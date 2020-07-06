---
title: "AWS Billing and Pricing"
date: "2020-07-02 08:00:00"
author: "Christina Gorton"
format: "image"
image: "../images/blog-4.jpg"
category: AWS
tags:
  - cloud
  - aws
is_featured: true
---

## AWS Budgets

AWS Budgets is a service that helps you plan service usage, service costs, and instance reservations.

**Note:** First two budgets are free of charge.

Each budget is **\$0.02 per day** with a **20,000** budget limit.

**Key Points:**

- AWS Budgets give you the ability to setup alerts if you exceed or are approaching your defined budget

- **Types of budgets:**

  1. Cost
  2. Usage
  3. Reservation

- Budgets can be tracked at the **monthly**, **quarterly**, or **yearly** levels with customizable start and end dates.
- Alerts support **EC2**, **RDS**, **Redshift**, and **ElastiCache** reservations
- Your budget can be based on a fixed cost or you can plan your upfront cost based on your chosen level.
- Budgets can easily be managed from the `AWS Budgets` dashboard or via the `Budgets API`
- You can get notified by providing an email or `chatbot` and give a threshold for how close to the current or forecasted budget you would like to spend before being alerted.

## AWS Cost and Usage Report

The AWS [Cost and Usage Reports](https://aws.amazon.com/aws-cost-management/aws-cost-and-usage-reporting/) tracks your AWS usage and provides estimated charges associated with your account.

**Key Points:**

- You can generate a `detailed spreadsheet`, enabling you to better `analyze` and understand your AWS costs.
- The reports are placed in to S3
- You can use `Athena` to turn the report into a queryable database.
- You can use `QuickSight` to visualize your billing data as graphs.

**[Athena:](https://aws.amazon.com/athena/)** Amazon Athena is an interactive query service that makes it easy to analyze data in Amazon S3 using standard SQL.

**[QuickSight:](https://aws.amazon.com/quicksight/)** Amazon QuickSight is a fast, cloud-powered business intelligence service that makes it easy to deliver insights to everyone in your organization.

## Consolidated Billing

[Consolidated billing](https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/consolidated-billing.html) allows you to have one bill for all of your accounts.

**Key Points:**

- You can consolidate your billing and payment methods `across` multiple AWS accounts into `one bill`.
- For billing, AWS treats all accounts in an organization as if they were one account.
- You can designate one **master account** that pays the charges of all the other **member accounts.**
- There is no extra cost to use consolidated billing.
- You can use AWS `Cost Explorer` to visualize usage for consolidated billing.

## Cost Explorer

[AWS Cost Explorer](https://aws.amazon.com/aws-cost-management/aws-cost-explorer/) lets you **visualize**, **understand**, and **manage** your AWS costs and usage over time.

Key Points:

- Costs for multiple AWS accounts within an AWS Organization will be consolidated in a **master account.**
- You can use **default reports** to help gain insight into your cost rivers and usage trends.
- You can use **forecasting** to get an idea of future costs.
- You can choose to view your data at a **monthly** or **daily** level of granularity.
- You can use **filter** and **grouping** functionalities to dig deeper into your data.

## TCO Calculator

The [Total Cost of Ownership](https://aws.amazon.com/tco-calculator/) (TCO) allows you to estimate how much you would save moving to AWS from on-premise.

**Key Points:**

- It provides you with a **detailed set of reports** that can be used in executive presentations.
- The tool is built on underlying calculation models that generate fair assessments of value that you can achieve given the data provided.
- Helps reduce the need to invest in large capital expenditures.
- The tool is for **approximation purposes** only.

## AWS Trusted Advisor

[AWS Trusted Advisor](https://aws.amazon.com/premiumsupport/technology/trusted-advisor/) advises you on **security**, **saving money**, **performance**, **service limits**, and **fault tolerance**

**Key Points:**

- All accounts receive 7 free Trusted Advisor Checks. Business and Enterprise accounts you receive all Trusted Advisor Checks.

The 5 areas Trusted Advisor will check you on:

1. Cost Optimization
2. Performance
3. Security
4. Fault Tolerance
5. Service Limits

Each category has the potential to check many different services.

**Most common checks in each category:**

**Cost Optimization**

- Idle Load Balancers
- Unassociated Elastic IP Addresses

**Performance**

- High Utilization Amazon EC2 Instances

**Security**

- MFA on Root Account
- IAM Access Key Rotation

**Fault Tolerance**

- Amazon RDS Backups

**Service Limits**

- VPC

For the complete list you can visit [this page](https://aws.amazon.com/premiumsupport/technology/trusted-advisor/best-practice-checklist/).

## AWS Free Services

Certain AWS services are free, but the resources they setup may cost you.

**Free services:**

- [Identity Access Management (IAM)](https://docs.aws.amazon.com/IAM/latest/UserGuide/introduction.html)
- [Amazon VPC](https://aws.amazon.com/vpc/)
- [Organizations](https://aws.amazon.com/organizations/) & [Consolidated Billing](https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/consolidated-billing.html)
- [AWS Cost Explorer](https://aws.amazon.com/aws-cost-management/aws-cost-explorer/)

**Free Services with resources that cost money:**

- [Auto Scaling](https://aws.amazon.com/autoscaling/)
- [Cloud Formation](https://aws.amazon.com/cloudformation/)
- [Elastic Beanstalk](https://aws.amazon.com/elasticbeanstalk/)
- [Opsworks](https://aws.amazon.com/opsworks/)
- [Amplify](https://aws.amazon.com/amplify/)
- [AppSync](https://aws.amazon.com/appsync/)
- [CodeStar](https://aws.amazon.com/codestar/)

## AWS Landing Zone

**[AWS Landing Zone](https://aws.amazon.com/solutions/implementations/aws-landing-zone/)** helps Enterprises quickly set-up a secure, AWS multi-account.

**Key Points:**

- Set up through **AWS Account Vending Machine** (AVM)

**AVM** allows customers to create new AWS accounts in Organizational Units (OUs) preconfigured with an account security baseline, and a predefined network.

- AVM automatically provisions and configures new accounts via **[AWS Service Catalog](https://aws.amazon.com/servicecatalog/?aws-service-catalog.sort-by=item.additionalFields.createdDate&aws-service-catalog.sort-order=desc)**
- Uses **Single Sign-on** (SSO) for managing and accessing accounts
- The environment is customizable to allow customers to implement their own account baselines through a **Landing Zone configuration** and update pipeline

**The AWS Landing Zone solution includes four accounts:**

1. AWS Organization account
2. Shared Services account
3. Log Archive account
4. Security account

## AWS Quick Starts

**[AWS Quick Starts](https://aws.amazon.com/quickstart/?quickstart-all.sort-by=item.additionalFields.updateDate&quickstart-all.sort-order=desc)** are prebuilt templates by AWS and AWS Partners to help you deploy popular stacks on AWS.

**Key Points:**

- It can reduce hundreds of manual procedures into a few steps.

A **Quick Start** is composed of 3 parts:

1. A reference architecture for the deployment
2. AWS CloudFormation templates that automate and configure the deployment
3. A deployment guide explaining the architecture and implementation in detail

- Most Quick Start reference deployments enable you to spin up a fully functional architecture in **less than an hour.**

## AWS Support Plans

[AWS Support](https://docs.aws.amazon.com/awssupport/latest/user/getting-started.html) offers a range of plans that provide access to tools and expertise that support the success and operational health of your AWS solutions.

**Key Points:**

There are **4 support plans** available.

1. Basic Plan - Free
   - Every AWS account has access to this free basic plan.
   - It provides Email Support for Billing and Accounts.
2. [Developer Plan](https://aws.amazon.com/premiumsupport/plans/developers/)- \$20 USD month
   - Great for learning how to use a lot of AWS services or for help configuring things while learning.
   - Provides tech support via email -24hrs until reply
   - Provides general support and help if your system is impaired
   - Does not provide help with 3rd party products
3. [Business Plan](https://aws.amazon.com/premiumsupport/plans/business/)- \$100 USD month
   - Provides tech support via email -24hrs until reply
   - Provides tech support via chat and phone 24 hours a day. Often can reach a support engineer within 10-15 minutes.
   - Receive all Trusted Advisor Checks
   - Will try to provide help with 3rd party products
4. [Enterprise Plan](https://aws.amazon.com/premiumsupport/plans/enterprise/)- \$15,000 USD month
   - All of the services of the other plans included with this one
   - Will respond within **15 minutes** if there is a business critical system down
   - Your account is given a **Personal Concierge**
   - Your account is given a **Technical Account Manager (TAM)**

A TAM is a designated point of contact to all necessary AWS expertise

A Personal Concierge(Support Concierge) is a dedicated team of enterprise account specialist to help with billing and account subjects.

## AWS Resource Groups and Tagging

**Key Points:**

- [Tags](https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html) are words or phrases that act as metadata for organizing your AWS resources
- [Resource groups](https://docs.aws.amazon.com/ARG/latest/userguide/welcome.html) are a collection of resources that share one or more tags
- Both help you organize and consolidate information based on your project and the resources that you use.

**Resource Groups** can display details about a group based on:

- Metrics
- Alarms
- Configuration Settings

- At any time you can modify the settings of your resource groups to change what resources appear

## AWS Marketplace

[AWS Marketplace](https://aws.amazon.com/marketplace) is a curated digital catalogue with `thousands` of software listings from independent software vendors.

**Key Points:**

- You can easily find, buy, test, and deploy software that already runs on AWS
- The product can be `free to use` or can have an `associated charge`. The charge becomes part of your AWS bill, and once you pay, AWS Marketplace pays the provider
- The sales channel for Independent Software Vendors (ISVs) and Consulting Partners allows you to `sell your solutions` to other AWS customers

**Products can be offered as:**

- Amazon Machine Images (AMIs)
- AWS CloudFormation templates
- Software as a service (SaaS) offerings
- AWS WAF rules
