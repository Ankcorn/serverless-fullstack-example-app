# [WIP] Serverless Fullstack Template

Kickstart development of a fullstack serverless app with a cloud first development workflow.

***

## [![forthebadge](https://forthebadge.com/images/badges/made-with-javascript.svg)](https://forthebadge.com) [![forthebadge](https://forthebadge.com/images/badges/fuck-it-ship-it.svg)](https://forthebadge.com)

This example will demonstrate how too

* Completely setup all your infrastructure Infrastructure As Code
* Only use pay per use resources so we can deploy to many stages without breaking the bank
* Follow best practices like no hard coded magic strings, 1 IAM role per function, and Modular yml files

### Why This Exists

Most examples of how to use the serverless framework to build a fullstack web application trade ease of initial understanding for long term maintainability and development velocity. This helps more people get started building serverless applications but when concerns like testing, developing and deploying iterable chunks of an application quickly and reliably start to arise generally we have to figure out how to solve those challenges ourselves.

This template is a reference mostly for myself on how to configure some of the more gnarly resources like cognito and cloudformation, and get them working together correctly with a stage based deployment strategy.

### Features

* Stage based ephemaral deploys to <stage>.domain (when stage is production it deploys to domain)
* localhost development against cloud resources for `--stage local`
* Distributed edge caching (Built to scale)
* User management using cognito
* SPA built with React and Tailwind
* CRUD lambda examples
* Continuius deployment to dev.<domain> with simple promote to production powered by [seed.run](seed.run)

Upcoming features

* OriginAccessIdentity for s3 website
* Observability
* Full test coverage (unit - e2e - post deploy canaries for production)
* A/B testing and feature flagging

## Getting Started

This application deploys to many different stages. I recomend you get it working on localhost first before trying out the production deploys.

### Local Setup

Fork this repo and clone it.

Install the dependencies by running `npm install`

Deploy the resources required for local development. See the yml files at infrastructure/authentication and infrastructure/database

```bash
serverless deploy --stage local
```

Once that command is complete you can run `npm start`

This should start up the create react app dev server at port 3000 and the serverless offline server at port 4000. It uses the built in http api jwt authorizer support and the create react app web proxy functionality to forward requests to the local http api port.

## Dev Setup

This stage is completely managed by seed.run

### Scripts Reference

### Development Workflow

### Debugging

## Infrastructure

* [Authentication](infrastructure/authentication/README.md)
* [Database](infrastructure/database/README.md)
* [Website](infrastructure/web/README.md)

## Contributing
