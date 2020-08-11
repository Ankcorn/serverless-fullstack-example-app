import { Todo } from '../../data/dynamodb'


export async function handler(e) {
	console.log(e.requestContext.authorizer.claims);
	const todo = await Todo.query(e.requestContext.authorizer.claims.sub);
	return {
		statusCode: 200,
		body: JSON.stringify(todo)
	}
}
