import useSWR from 'swr';
import axios from 'axios';
import Auth from '@aws-amplify/auth';

async function get(url) {
	return axios.get(url, {
		headers: {
			authorization: `Bearer ${(await Auth.currentSession()).getIdToken().getJwtToken()}`
		}
	})
}

async function post(url, body) {
	return axios.post(url, body, {
		headers: {
			authorization: `Bearer ${(await Auth.currentSession()).getIdToken().getJwtToken()}`
		}
	})
}

export default function useTodos() {
	const { data, loading, revalidate } = useSWR('/api/todo', get);
	return { loading, todos: data && data.data.Items, create: (body) => post('api/todo', body), revalidate }
}
