import boto3
import StringIO
import zipfile
import mimetypes
import os

def lambda_handler(event, context):
    sns = boto3.resource('sns')
    topic = sns.Topic(os.environ['TOPIC_ARN'])
    s3 = boto3.resource('s3')
    
    location = {
        "bucketName":'portfoliobuild.christopherball.info',
        "objectKey":'portfolio.build.zip'
    }
    
    try:
        job  = event.get("CodePipeline.job")
        if job:
            for artifact in job["data"]["inputArtifacts"]:
                if artifact["name"] == "MyAppBuild":
                    location = artifact["location"]["s3Location"]
        
        print "building from " + str(location)
        
        portfolio_bucket = s3.Bucket('portfolio.christopherball.info')
        build_bucket = s3.Bucket(location["bucketName"])
        
        portfolio_zip = StringIO.StringIO()
        build_bucket.download_fileobj(location["objectKey"], portfolio_zip)
        
        with zipfile.ZipFile(portfolio_zip) as myzip:
            for nm in myzip.namelist():
                obj = myzip.open(nm)
                portfolio_bucket.upload_fileobj(obj,nm,
                    ExtraArgs={'ContentType':mimetypes.guess_type(nm)[0]})
                portfolio_bucket.Object(nm).Acl().put(ACL='public-read')
        
        topic.publish(Subject="Portfolio Deployment", Message="Portfolio deployed successfully.")
        if job:
            codePipeline = boto3.client("codepipeline")
            codePipeline.put_job_success_result(jobId = job["id"])
    except:
        topic.publish(Subject="Portfolio Deployment Failed", Message="Portfolio was not deployed. An error occurred.")
        raise
    
    return 'Updated Portfolio'
