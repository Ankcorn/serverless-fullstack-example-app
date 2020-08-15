import React, { useState, useEffect } from "react";
import Auth from '@aws-amplify/auth';
import useTodos from '../hooks/useTodos';

function usePrivate() {
	const [state, setState] = useState();

	async function getSession() {
		try {
			const auth = await Auth.currentSession();
			setState(auth.idToken.payload);
		} catch (e) {
			await Auth.federatedSignIn({ provider: 'COGNITO' });
		}
	}

	useEffect(() => {
		getSession();
	}, []);

	return state;
}

function App() {
	const user = usePrivate();
	const stuff = useTodos();
	console.log(stuff)
	if (!user) {
		return (<div>
			... Please Wait
		</div>)
	}

	return (
		<div>

		</div>
	)
}

export default App
