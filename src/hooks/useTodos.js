import useSWR from 'swr';
import axios from 'axios';
import Auth from '@aws-amplify/auth';

async function get(url) {
	return axios.get(url, {
		headers: {
			authorization: (await Auth.currentSession()).getIdToken().getJwtToken()
		}
	})
}

async function post(url, body) {
	return axios.get(url, body, {
		headers: {
			authorization: (await Auth.currentSession()).getIdToken().getJwtToken()
		}
	})
}

export default function useTodos() {
	const { data, loading } = useSWR('/api/todo', get);



	return { loading, todos: data, create: (body) => post('api/todo', body) }
}
