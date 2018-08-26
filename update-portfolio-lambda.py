import boto3
import StringIO
import zipfile
import mimetypes
import os

def lambda_handler(event, context):
    sns = boto3.resource('sns')
    topic = sns.Topic(os.environ['TOPIC_ARN'])
    s3 = boto3.resource('s3')
    
    try:
        portfolio_bucket = s3.Bucket('portfolio.christopherball.info')
        build_bucket = s3.Bucket('portfoliobuild.christopherball.info')
        
        portfolio_zip = StringIO.StringIO()
        build_bucket.download_fileobj('portfolio.build.zip', portfolio_zip)
        
        with zipfile.ZipFile(portfolio_zip) as myzip:
            for nm in myzip.namelist():
                obj = myzip.open(nm)
                portfolio_bucket.upload_fileobj(obj,nm,
                    ExtraArgs={'ContentType':mimetypes.guess_type(nm)[0]})
                portfolio_bucket.Object(nm).Acl().put(ACL='public-read')
        
        topic.publish(Subject="Portfolio Deployment", Message="Portfolio deployed successfully.")
    except:
        topic.publish(Subject="Portfolio Deployment Failed", Message="Portfolio was not deployed. An error occurred.")
        raise
    
    return 'Updated Portfolio'

