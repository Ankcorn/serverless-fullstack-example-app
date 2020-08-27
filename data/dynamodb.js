const { Table, Entity } = require('dynamodb-toolbox');

const DynamoDB = require('aws-sdk/clients/dynamodb')
const DocumentClient = new DynamoDB.DocumentClient({region: 'eu-west-1'})

console.log(`owl-${process.env.STAGE}`)
const OwlTable = new Table({
	name: `owl-${process.env.STAGE}`,
	partitionKey: 'pk',
	sortKey: 'sk',
	DocumentClient
});

export const Todo = new Entity({
	name: 'Todo',
	attributes: {
		id: { partitionKey: true },
		sk: { hidden: true, sortKey: true },
		message: { type: 'string' },
		status: ['sk', 0],
		date_added: ['sk', 1]
	},
	table: OwlTable
})
