import { Todo } from '../../data/dynamodb'

export async function handler(e) {
	await Todo.put({
		id: e.requestContext.authorizer.jwt.claims.sub,
		status: 'todo',
		message: JSON.parse(e.body).message
	});
	return {
		statusCode: 200
	}
}
