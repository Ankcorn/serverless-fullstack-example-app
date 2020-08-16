import React, { useEffect, useState } from 'react';
import Auth from '@aws-amplify/auth';

export default function Header() {
	const [session, setSession] = useState()

	useEffect(() => {
		Auth.currentSession()
			.then(session => {
				console.log(session)
				setSession(session)
			})
			.catch((e) => {
				console.log(e)
				setSession(e)
			})
	}, []);

	return (
		<header class="text-gray-700 bg-white body-font">
			<div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
				<a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0" href="#home">
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-teal-700 rounded-full" viewBox="0 0 24 24">
						<path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
					</svg>
					<span class="ml-3 text-xl">Serverless Sass Starter</span>
				</a>
				{session === 'No current user' ? <>
					<nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
						<a class="mr-5 hover:text-white" href="#home">About</a>
						<a class="mr-5 hover:text-white" href="#home">Pricing</a>
						<a class="mr-5 hover:text-white" href="#home">Twitter</a>
						<button onClick={() => Auth.federatedSignIn({ provider: 'COGNITO' })} class="mr-5 hover:text-white">Login</button>
					</nav>
					<button onClick={() => Auth.federatedSignIn({ provider: 'COGNITO' })} class="inline-flex items-center bg-teal-700 border-0 py-1 px-3 focus:outline-none hover:bg-teal-500 rounded text-white mt-4 md:mt-0">Sign up
      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
							<path d="M5 12h14M12 5l7 7-7 7"></path>
						</svg>
					</button></> : <>
						<nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
							<a class="mr-5 hover:text-white" href="#home">Settings</a>
						</nav>
						<button onClick={() => Auth.signOut()} class="inline-flex items-center bg-white border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Sign out
      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
								<path d="M5 12h14M12 5l7 7-7 7"></path>
							</svg>
						</button>
					</>}
			</div>
		</header>
	)
}
