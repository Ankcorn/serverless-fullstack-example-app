import { Todo } from '../../data/dynamodb'
import tracer from 'tracer';
import AWS from 'aws-sdk';
const logger = tracer.colorConsole()
const cloudFront = new AWS.CloudFront();
export async function handler(e) {
	
	try {
		await Todo.put({
			id: e.requestContext.authorizer.claims.sub,
			status: 'todo',
			date_added: Date.now(),
			message: JSON.parse(e.body).message
		});
		return {
			statusCode: 200
		}
	} catch(e) {
		logger.error('Failed to add a todo', e)
		return {
			statusCode: 500
		}
	}
	
}
