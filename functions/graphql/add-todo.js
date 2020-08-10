export async function handler(e) {
	console.log(e);
	return {
		data: [{
			id: 'Test',
			name: 'Test',
			description: 'Test',
			priority: 1
		}]
	}
}
