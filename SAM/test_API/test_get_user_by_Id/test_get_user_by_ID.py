import os
from moto import  mock_dynamodb2
import boto3
import pytest
from API.get_user_by_Id import get_user_by_Id


@pytest.fixture(scope='function')
def aws_credentials():
    """Mocked AWS Credentials for moto."""
    os.environ['AWS_ACCESS_KEY_ID'] = 'testing'
    os.environ['AWS_SECRET_ACCESS_KEY'] = 'testing'
    os.environ['AWS_SECURITY_TOKEN'] = 'testing'
    os.environ['AWS_SESSION_TOKEN'] = 'testing'



@pytest.fixture(scope='function')
def dynamodb(aws_credentials):
    with mock_dynamodb2():
        yield boto3.resource('dynamodb', region_name='us-east-1')

    

@pytest.fixture(scope='function')
def dynamodb_table(dynamodb):
    """Create a DynamoDB UsersTable table fixture ."""
    table = dynamodb.create_table(
        TableName='UsersTable',
        KeySchema=[
            {
                'AttributeName': 'github_username',
                'KeyType': 'HASH'
            }
        ],
        AttributeDefinitions=[
            {
                'AttributeName': 'github_username',
                'AttributeType': 'S'
            }
        ],
        ProvisionedThroughput={
            'ReadCapacityUnits': 1,
            'WriteCapacityUnits': 1
        }
    )
    yield table


def test_get_user_by_ID(dynamodb,dynamodb_table):
    table=dynamodb_table
    table.put_item(Item={"github_username":'johndoe'})
    #response = table.get_item(Key={'github_username': 'johndoe'}) local test
    response=get_user_by_Id.get_user_details_by_Id(table,'johndoe')
    assert True if 'github_username' in response else False