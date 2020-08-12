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
			<header class="text-gray-500 bg-gray-900 body-font">
				<div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
					<a class="flex title-font font-medium items-center text-white mb-4 md:mb-0" href="#home">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-teal-500 rounded-full" viewBox="0 0 24 24">
							<path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
						</svg>
						<span class="ml-3 text-xl">Serverless Owl</span>
					</a>
					<nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
						<a class="mr-5 hover:text-white" href="#home">Settings</a>
					</nav>
					<button onClick={() => Auth.signOut()} class="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">Sign out
      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
							<path d="M5 12h14M12 5l7 7-7 7"></path>
						</svg>
					</button>
				</div>
			</header>

		</div>
	)
}

export default App
