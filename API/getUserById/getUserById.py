from pprint import pprint
import boto3
from botocore.exceptions import ClientError
import json
import os 

dynamodb = boto3.resource('dynamodb')


def lambda_handler(event, context):
    git_user=""
    resp={}
    statusCode=404
    
    if "queryStringParameters" in event:
        if "username" in event["queryStringParameters"]:
            git_user=event["queryStringParameters"]['username']
    if git_user=="":
        resp['message']='User Not found'
    else:   
        try:
            if 'databaseName' in os.environ:
                table = dynamodb.Table(os.environ['databaseName'])
                response = table.get_item(Key={'github_username': git_user})
                if "Item" in  response:
                    resp= response['Item']
                    statusCode=200
                else:
                     statusCode=404   
                     resp['message']='User Not found'
            else:    
                statusCode=500
                resp['message']="Server error, table not configured"

        except ClientError as e:
            print(e.response['Error']['Message'])
            resp['message']=e.response['Error']['Message']
        
           
    
    
    return {
        'statusCode': statusCode,
        'body': json.dumps(resp)
    }