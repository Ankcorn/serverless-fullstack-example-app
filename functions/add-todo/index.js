import { Todo } from '../../data/dynamodb'

export async function handler(e) {
	await Todo.put({
		id: e.requestContext.authorizer.claims.sub,
		status: 'todo',
		date_added: Date.now(),
		message: JSON.parse(e.body).message
	});
	return {
		statusCode: 200
	}
}
