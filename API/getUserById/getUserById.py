import boto3
from botocore.exceptions import ClientError
import logging
import json
import os 

dynamodb = boto3.resource('dynamodb')


def lambda_handler(event, context):
    """ 
	A Lambda function used by the APIs from 100daysofcloud.com to get user details by Id

	Parameters: 
	event["queryStringParameters"]["username"] (string): 100daysofcloud user name
  
	Returns: 
	object: Returns user details from 100daysofcloud account if user is valid.
  
	"""
    logging.basicConfig(
        level=logging.INFO,
        format=f'%(asctime)s %(levelname)s %(message)s'
    )

    logger = logging.getLogger()

    git_user=""
    resp={}
    statusCode=404
    
    #checking if the lambda is called by an API gateway and has query params in the call
    if "queryStringParameters" in event:
    	#checking if the query params from the API call has a username
        if "username" in event["queryStringParameters"]:
            git_user=event["queryStringParameters"]['username']
    if git_user=="":
        resp['message']='User Not found'
    else:   
        try:
        	#checking for database name from env variables on the lambda
            if 'databaseName' in os.environ:
                table = dynamodb.Table(os.environ['databaseName'])
                #querying the dynamoDb with the primary key github_username
                response = table.get_item(Key={'github_username': git_user})
                #If there is an entry there exists a user with that username, return user details wrapped in an object 
                if "Item" in  response:
                    resp= response['Item']
                    statusCode=200
                #If there is no 'Item' found in response it means that there was no data for that primary key and user does not exist    
                else:
                     statusCode=404   
                     resp['message']='User Not found'
                     logger.error('User '+str(git_user)+' not found')
            else:    
                statusCode=500
                #This means we need a valid table name to query and get the data. 
                resp['message']="Server error, table not configured"
                logger.error('Server error, table not configured')

        except ClientError as e:
            print(e.response['Error']['Message'])
            resp['message']=e.response['Error']['Message']
            logger.error(e.response['Error']['Message'])
        
           
    
    	
    final_response= {
    	'headers': {
            'Access-Control-Allow-Headers': 'Content-Type',
            'Access-Control-Allow-Origin': 'https://www.example.com',
            'Access-Control-Allow-Methods': 'OPTIONS,POST,GET'
        }
        'statusCode': statusCode,
        'body': json.dumps(resp)
    }
    
    	
    return final_response