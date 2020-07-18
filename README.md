## The #100DaysOfCloud Community

The purpose of this community-shared project is to introduce non-technical or non-cloud folk
to level 100(Introductory) and level 200 (Intermediate) cloud content.


## How to Install

```
npm i gatsby-cli -g
npm i
```

## How to run in developmenet

```
gatsby develop
```

### How to deploy

You always need to build before you deploy

#### AWS Amplify Deployement

The Gatsby site is deployed in AWS Amplify Console.
Below are the steps that were taken to deploy it.
Log into the [Amplify Console](https://console.aws.amazon.com/amplify/home).

From here, under Deploy we can click GET STARTED:

Next, we’ll choose GitHub as our repository & click **Next**.

![image](https://user-images.githubusercontent.com/45825464/86502325-e937f700-bd6f-11ea-94c0-240aea415d90.png)

Then connect the mater branch of the new repo we just created & click **Next**:
![image](https://user-images.githubusercontent.com/45825464/86502330-05d42f00-bd70-11ea-954c-dfb1b8b659e7.png)

In this view, we can review the default build settings & click **Next** to continue:
![image](https://user-images.githubusercontent.com/45825464/86502335-0e2c6a00-bd70-11ea-9bff-32fd5b668089.png)

Finally, we can review the deployment & click **Save & Deploy** when we’re ready to deploy our app:
![image](https://user-images.githubusercontent.com/45825464/86502341-243a2a80-bd70-11ea-925c-8d47231e0e7e.png)


Once the deployment is successful, you should see this:
![image](https://user-images.githubusercontent.com/45825464/86652217-34d9e300-bfb2-11ea-940a-59d5a9c30d10.png)


#### Kicking of a new build

As soon as you changes are merged to main(master) branch the deployement should be taken care of by Amplify.