# [WIP] Serverless Fullstack Example App

I'm building this because I'm not 100% happy with any of the existing serverless templates or examples. They often miss out steps, are only backend focussed, or don't consider the development and testing experience.

To achieve this this example will demonstrate how too
* Completely setup all your infrastructure Infrastructure As Code
* Only use pay per use resources so we can deploy to many stages without breaking the bank
* Follow best practices like no hard coded magic strings, 1 IAM role per function, Single Table Design, and Broken Up yml files

#### Infrastructure

* [Authentication](infrastructure/authentication/README.md)
* [Database](infrastructure/database/README.md)
* [Graphql](infrastructure/graphql/README.md)
* [Website](infrastructure/web/README.md)
