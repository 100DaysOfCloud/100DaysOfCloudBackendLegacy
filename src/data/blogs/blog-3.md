---
title: "AWS Cloud Practitioner Exam: Cloud Concepts"
date: "2020-04-20 08:00:00"
author: "Christina Gorton"
format: "image"
image: "../images/blog-3.jpg"
category: AWS
tags:
  - cloud
  - aws
is_featured: false
---

I am working to complete a couple of AWS certifications. These are my notes for the Cloud Concepts portion of the AWS Certified Cloud Practitioner exam. I have been using [ExamPro's free course](https://dev.to/exampro/the-free-aws-certified-cloud-practitioner-study-course-1bcb) and [Hiro's](https://dev.to/hiro) courses [Introduction to AWS for Non-Engineers](https://www.linkedin.com/learning/introduction-to-aws-for-non-engineers-1-cloud-concepts-2/how-did-we-get-in-the-cloud) on LinkedIn

You can also find these notes on my [Notion](https://www.notion.so/christinagorton/Cloud-Concepts-f7f6ca54de784b7b93f842c169e55c63) where you can duplicate them and change them for yourself.

# Cloud Concepts

### What is AWS?

Amazon Web Services(AWS) is a cloud computing platform created by Amazon. It currently holds the market share in the cloud computing sphere.

AWS provides many different IT services on the cloud. It makes it easier, faster, and cheaper to run an IT infrastructure compared with a traditional on-premise IT infrastructure.

## Cloud Computing models

- SaaS - Software as a Service
- PaaS- Platform as a Service
- IaaS- Infrastructure as a Service

### IaaS- Infrastructure as a Service (Host)

Most basic building blocks of cloud IT infrastructure.
It has the most flexibility and management control of all the different cloud computing models.
It is the closest to having a traditional on-premises data center.

**Examples:**

- Amazon Web Services
- Microsoft Azure
- Google Cloud

### PaaS- Platform as a Service (Build)

Provides a platform allowing customers to develop, run, and manage applications without the complexity of building and maintaining the infrastructure typically associated with developing and launching an app.
Less flexibility than IaaS because of pre-constructed packages.

**Examples:**

- AWS Elastic Beanstalk
- Windows Azure
- Heroku
- Google App Engine

### SaaS- Software as a Service (Consume)

Completed projects managed by a service provider.
Easy to use and comes complete with a user interface.
Least flexibility

**Examples:**

- Gmail
- Adobe Creative Cloud

## Cloud Development Models

**Cloud Deployment**

- 100% of IT infrastructure is on the cloud.
- All of a companies applications were migrated to or created on the cloud.
- Helps to remove roadblocks of costly and time consuming procurement processes for on-premises infrastructure (big servers and data centers!).
- Great for small businesses and start-ups.

**On-premises(Private cloud) Deployment**

- Use virtualization to deploy resources in their on-premises data centers.
- Resembles traditional IT infrastructure with big servers, data centers, etc.
- Do not get the same benefits of cloud computing (ability to easily scale up and down on demand)
- Company has dedicated resources that are not shared with others(good for security)
- Resources cannot be accessed using the internet

**Hybrid Deployment**

- Connects on-premises technology with cloud-based resources
- Great for established companies that had a dedicated data center but also wants to migrate processes over to the cloud
- Data is partially on the cloud, and partially in the on-premises

**Six Advantages of Cloud Computing**

1. Trade capital expense for variable expense
2. Benefit from massive economics of scale
3. Stop guessing about capacity
4. Increase speed and agility
5. Stop spending money running and maintaining data centers
6. Go global in minutes

## Design Principles of Cloud Computing

### 5 pillars of a well-architected framework

**Cost Optimization**/**Avoid unnecessary costs:**

- Use only what you need ( make sure you aren't running extra servers etc.)
- Reserve resources in advance. Many resources will give you a discount for upfront payment.

**Reliability:**

- Test disaster recovery systems ( Can your system recover quickly?)
- Incorporate redundancy ( Have duplicate copies of resources)

**Efficiency:**

Performance efficiency is the ability to use computing resources to adjust system requirements.

- Allows for more experimentation
- When a change occurs it should be able to go global in minutes.

**Security:**

- Best practices should be automated.
- Data should always be protected.
- Traceability should be enables along with strong identity foundation.
- You want to be able to manage access so you know "who did what" at any point. ( every user should have a unique account or access key.

**Operational Excellence:**

The ability to run and monitor systems while constantly improving processes and procedures.

- Document everything.
- Standard operating procedures are important and should be frequently refined.
- Failures should be anticipated and then learned from (again document everything!)
- Once a failure occurs update processes to reflect what was learned.

## Popular Services Provided by AWS

**Provisioning Services:**

The allocation or creation of resources and services to a customer.

- Elastic Beanstalk- an easy-to-use service for deploying and scaling web applications and services developed with Java, .NET, PHP, Node.js, Python, Ruby, Go, and Docker on familiar servers such as Apache, Nginx, Passenger, and Internet Information Services (IIS).
- OpWorks- configuration management service that provides managed instances of **Chef** and **Puppet**
- CloudFormation- infrastructure as code, **JSON** and **YAML**
- AWS QuickStart- pre-made packages that can launch and configure your AWS compute, network, storage, and other services required to deploy a workload on AWS
- AWS Marketplace- a digital catalogue of **thousands** of software listing from independent software vendors you can use to find, buy, test, and deploy software.

**Compute Services:**

Provide virtual server hosting, container management, and serverless computer

Amazon Elastic Compute Cloud (Amazon EC2) - a web service that provides secure, resizable compute capacity in the cloud. It is designed to make web-scale computing easier for developers.

- ECS- a highly scalable, high-performance container orchestration service that supports Docker containers and allows you to easily run and scale containerized applications on AWS.
- Fargate- is a compute engine for Amazon ECS that allows you to run containers without having to manage servers or clusters. With AWS Fargate you no longer have to provision, configure, and scale clusters of virtual machines to run containers.
- EKS- Amazon Elastic Kubernetes Service (Amazon EKS) makes it easy to deploy, manage, and scale containerized applications using Kubernetes on AWS.
- Lambda- lets you run code without provisioning or managing servers. You pay only for the compute time you consume—there is no charge when your code is not running.
- Elastic Beanstalk- an easy-to-use service for deploying and scaling web applications and services developed with Java, .NET, PHP, Node.js, Python, Ruby, Go, and Docker on familiar servers such as Apache, Nginx, Passenger, and Internet Information Services (IIS).
- AWS Batch- enables developers, scientists, and engineers to easily and efficiently run hundreds of thousands of batch computing jobs on AWS.

**Storage Services:**

Provide storage for both in-use and archival files.

- Amazon Simple Storage Service (Amazon S3) is an `object storage` service that offers industry-leading scalability, data availability, security, and performance.
- S3 Glacier- low cost storage for `archiving and long-term backup`
- Storage Gateway- hybrid cloud storage with local caching
- EBS- Elastic Block Storage- hard drive in the cloud you attach to EC2 instances.
- EFS- Elastic File Storage- file storage mountable to multiple EC2 instances at the same time
- Snowball- physically migrate lots of data via a computer suitcase 50-80 TB

**Database Services:**

Fully managed relational and NoSQL databases. They are all highly scalable and cost efficient.

- DynamoDB- NoSQL key/value database
- RDS- Relational Database Service that supports multiple engines
- Aurora- MySQL (5x faster) and PSQL(3x faster) database fully managed
- Redshift- Columnar database, petabyte warehouse ( 1000TB = 1PB)

**Business Centric Services:**

- Amazon Connect- Call center
  a self-service, cloud-based contact center service that makes it easy for any business to deliver better customer service at lower cost.
- WorkSpaces- Virtual Remote Desktop
  a fully managed, secure cloud desktop service. You can use Amazon WorkSpaces to provision either Windows or Linux desktops in just a few minutes and quickly scale to provide thousands of desktops to workers across the globe.
- WorkDocs- a content creation and collaboration service. Easily create, edit, and share content saved centrally in AWS
- Chime- AWS platform for online meetings, video conferencing, and business calling which elastically scales to meet your capacity needs.
- WorkMail- Managed business email, contacts, and calendar service with support for existing desktop and mobile email client applications
- Pinpoint- Marketing campaign management system you can use for sending targeted email, SMS, push notifications, and voice messages.
- SES- Simple Email Service- A cloud based email sending service designed fro marketers and application developers to send marketing, notifications, and emails.
- QuickSight- A Business Intelligence (BI) service. Connect multiple datasource and quickly visualize data in the form of graphs with little to no programming knowledge.
