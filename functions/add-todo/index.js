import { Todo } from '../../data/dynamodb'


export async function handler(e) {
	console.log(e.requestContext.authorizer.claims);
	const todo = await Todo.put({
		id: e.requestContext.authorizer.claims.sub,
		status: 'todo',
		date_added: Date.now(),
		message: JSON.parse(e.body).message
	});
	return {
		statusCode: 200
	}
}
