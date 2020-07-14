# Databases

DynamoDB and Athena are the only databases in AWS that support pay per use pricing, therefor they are the only databases at the moment that can be included in this example.

[DynamoDB](https://aws.amazon.com/dynamodb/) is a key value and document database used for OLTP (Online Transactional Processing)

[Athena](https://aws.amazon.com/athena/) is a SQL Query service that lets you query data stored in S3 used for OLAP (Online Analytical Processing)

Between them with some glue (hehe) joining them together you can effectively serve most applications use cases.

## DynamoDb

[Dynamo.yml](Dynamo.yml) contains the configuration for the signle dynamodb table that powers this application. The configuration here is standard and will look the same accross most applications leveraging DynamoDb Single Table Design.

The purpose of this starter is not too teach single table design but my hope is it serves as an easy to understand reference. I recomend learning more about single table design before starting to build your own application using dynamodb.

Here is a link to all the resources that really helped me along the way when learning all about dynamodb data modelling.

* [Rick Houlihan - Advanced Design Patterns for DynamoDB](https://www.youtube.com/watch?v=HaEPXoXVf2k)
* [Alex DeBrie - DynamoDb Guide](https://www.dynamodbguide.com)
* [Alex DeBrie - The What, Why, and When of Single-Table Design with DynamoDB](https://www.alexdebrie.com/posts/dynamodb-single-table/)
* [Alex DeBrie - The DynamoDB Book](https://www.dynamodbbook.com/)
* [Jeremy Daly - dynamodb-toolbox](https://github.com/jeremydaly/dynamodb-toolbox)


