import { Todo } from '../../data/dynamodb'

export async function handler(e) {
	const todo = await Todo.query(e.requestContext.authorizer.jwt.claims.sub);
	return {
		statusCode: 200,
		body: JSON.stringify(todo)
	}
}
