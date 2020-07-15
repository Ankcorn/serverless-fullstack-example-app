# [WIP] The Best Serverless Fullstack Example App

Bold claim right? Maybe but most serverless examples leave me wanting more. They often have great aspects but fail to put together the complete picture of how good application development with the serverless framework can be. Because of this I have had to work through the pain over overly complex serverless configuration, brittle tooling attempting to recreate aws on your laptop and constant mistakes in my iam permissions.

This template puts together everything I have learnt to show you how building serverless can be done. This example will be

* Completly powered by IAC
* 100% Pay Per Use
* Follow best practices like 1 IAM role per function, Single Table Design, and Broken Up yml files

This doesnt come at the expense of developer productivity, I have also considered

* Seemless local development of each serverless function
* Demonstration on how to test at each stage of your applications lifesycle (dev, staging, prod)

(Yes we will even test in prod 🦄)


#### Infrastructure

* [Authentication](infrastructure/authentication/README.md)
* [Database](infrastructure/database/README.md)
* [Gateway](infrastructure/gateway/README.md)
* [Graphql](infrastructure/graphql/README.md)
* [Website](infrastructure/website/README.md)
