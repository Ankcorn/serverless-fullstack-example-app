import { Todo } from '../../data/dynamodb'
import tracer from 'tracer';

const logger = tracer.colorConsole()
export async function handler(e) {
	try {
		logger.info('test', e.requestContext.authorizer.claims)
		logger.info('Request for todo list', e.requestContext.authorizer.claims)
		const todo = await Todo.query(e.requestContext.authorizer.claims.sub);
		return {
			statusCode: 200,
			body: JSON.stringify(todo)
		}
	} catch(e) {
		console.log(e)
		return {
			statusCode: 500,
			body: JSON.stringify(e)
		}
	}

}
