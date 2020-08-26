import { Todo } from '../../data/dynamodb'
import tracer from 'tracer';

const logger = tracer.colorConsole()
export async function handler(e) {
	logger.info('Request for todo list', e.requestContext.authorizer.jwt.claims)
	const todo = await Todo.query(e.requestContext.authorizer.jwt.claims.sub);
	return {
		statusCode: 200,
		body: JSON.stringify(todo)
	}
}
