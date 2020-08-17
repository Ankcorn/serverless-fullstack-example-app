import { useEffect, useState } from 'react';
import Auth from '@aws-amplify/auth';

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

export default usePrivate;
