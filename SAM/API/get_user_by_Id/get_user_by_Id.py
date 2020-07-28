import boto3
from botocore.exceptions import ClientError
import logging
import json
import os 

dynamodb = boto3.resource('dynamodb',os.environ['AWS_REGION'])
logging.basicConfig(
    level=logging.INFO,
    format=f'%(asctime)s %(levelname)s %(message)s'
)

logger = logging.getLogger()


def lambda_handler(event, context):
    """ 
    A Lambda function used by the APIs from 100daysofcloud.com to get user details by Id

    Parameters: 
    event["queryStringParameters"]["username"] (string): 100daysofcloud user name
  
    Returns: 
    object: Returns user details from 100daysofcloud account if user is valid.
  
    """
 

    git_user=""
    resp={}
    status_code=404
    
    
    
    #checking if the query params from the API call has a username
    if "username" in event["queryStringParameters"]:
        git_user=event["queryStringParameters"]['username']

    if git_user=="":
        resp['message']='Please query for a valid user'
        logger.error('Username in request found to be empty')
    else:   
        table = dynamodb.Table(os.environ['databaseName'])
        resp=get_user_details_by_Id(table,git_user)
            
    return {
        'headers': {
            'Access-Control-Allow-Headers': 'Content-Type',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'OPTIONS,POST,GET'
        },
        'statusCode': status_code,
        'body': json.dumps(resp)
    }


def get_user_details_by_Id(table,git_user):
    resp={}
    try:
        #querying the dynamoDb with the primary key github_username
        response = table.get_item(Key={'github_username': git_user})
        #If there is an entry there exists a user with that username, return user details wrapped in an object 
        if "Item" in  response:
            resp= response['Item']
            status_code=200
        #If there is no 'Item' found in response it means that there was no data for that primary key and user does not exist    
        else:
             status_code=404   
             resp['message']='User Not found'
             logger.error('User '+str(git_user)+' not found')
        
    except ClientError as e:
        status_code=500
        logger.error(e.response['Error']['Message'])
        resp['message']=e.response['Error']['Message']
    return resp    