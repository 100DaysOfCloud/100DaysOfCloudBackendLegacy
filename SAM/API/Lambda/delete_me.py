import json

def lambda_handler(event, context):
  return {
      "statusCode": 200,
      "body": json.dumps({
          "message": "Delete me and replace with the actual Lambda function for the getUsedID API. I'm just a placeholder!",
      })
  }