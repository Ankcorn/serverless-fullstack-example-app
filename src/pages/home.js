import React from 'react';
import Auth from '@aws-amplify/auth'

function Home() {
	return (
		<div className="App">
			<header class="text-gray-500 bg-gray-900 body-font">
				<div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
					<a class="flex title-font font-medium items-center text-white mb-4 md:mb-0" href="#home">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-teal-500 rounded-full" viewBox="0 0 24 24">
							<path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
						</svg>
						<span class="ml-3 text-xl">Serverless Owl</span>
					</a>
					<nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
						<a class="mr-5 hover:text-white" href="#home">About</a>
						<a class="mr-5 hover:text-white" href="#home">Pricing</a>
						<a class="mr-5 hover:text-white" href="#home">Twitter</a>
						<button onClick={() => Auth.federatedSignIn({ provider: 'COGNITO' })} class="mr-5 hover:text-white">Login</button>
					</nav>
					<button onClick={() => Auth.federatedSignIn({ provider: 'COGNITO' })} class="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">Sign up
      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
							<path d="M5 12h14M12 5l7 7-7 7"></path>
						</svg>
					</button>
				</div>
			</header>
			<section class="text-gray-500 bg-gray-900 body-font">
				<div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
					<div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
						<h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">High quality aws serverless templates
        <br class="hidden lg:inline-block" />you can trust
      </h1>
						<p class="mb-8 leading-relaxed">For too long developers strugled fighing with the cloudformation docs to build serverless applications on AWS. No More! Serverless Owl is a curated and thoroughly vetted repository of high quality cloud formation examples so you can spend more time on the meeningfull stuff.</p>
						<div class="flex justify-center">
							<button class="inline-flex text-white bg-teal-500 border-0 py-2 px-6 focus:outline-none hover:bg-teal-600 rounded text-lg">Button</button>
							<button class="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">Button</button>
						</div>
					</div>
					<div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
						<img class="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600" />
					</div>
				</div>
			</section>
			<section class="text-gray-500 bg-gray-900 body-font">
				<div class="container px-5 py-24 mx-auto flex flex-wrap items-center">
					<div class="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
						<h1 class="title-font font-medium text-3xl text-white">Slow-carb next level shoindxgoitch ethical authentic, poko scenester</h1>
						<p class="leading-relaxed mt-4">Poke slow-carb mixtape knausgaard, typewriter street art gentrify hammock starladder roathse. Craies vegan tousled etsy austin.</p>
					</div>
					<div class="lg:w-2/6 md:w-1/2 bg-gray-800 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
						<h2 class="text-white text-lg font-medium title-font mb-5">Sign Up</h2>
						<input class="bg-gray-900 rounded border text-white border-gray-900 focus:outline-none focus:border-teal-500 text-base px-4 py-2 mb-4" placeholder="Full Name" type="text" />
						<input class="bg-gray-900 rounded border text-white border-gray-900 focus:outline-none focus:border-teal-500 text-base px-4 py-2 mb-4" placeholder="Email" type="email" />
						<button class="text-white bg-teal-500 border-0 py-2 px-8 focus:outline-none hover:bg-teal-600 rounded text-lg">Button</button>
						<p class="text-xs text-gray-600 mt-3">Literally you probably haven't heard of them jean shorts.</p>
					</div>
				</div>
			</section>

			<section class="text-gray-500 bg-gray-900 body-font">
				<div class="container px-5 py-24 mx-auto">
					<h1 class="sm:text-3xl text-2xl font-medium title-font text-center text-white mb-20">Raw Denim Heirloom Man Braid
            <br class="hidden sm:block" />Selfies Wayfarers
              </h1>
					<div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
						<div class="p-4 md:w-1/3 md:mb-0 mb-6 flex">
							<div class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-gray-800 text-teal-400 mb-4 flex-shrink-0">
								<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
									<path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
								</svg>
							</div>
							<div class="flex-grow pl-6">
								<h2 class="text-white text-lg title-font font-medium mb-2">Shooting Stars</h2>
								<p class="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug VHS try-hard ugh iceland kickstarter tumblr live-edge tilde.</p>
								<a class="mt-3 text-teal-500 inline-flex items-center" href="#home">Learn More
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
										<path d="M5 12h14M12 5l7 7-7 7"></path>
									</svg>
								</a>
							</div>
						</div>
						<div class="p-4 md:w-1/3 md:mb-0 mb-6 flex">
							<div class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-gray-800 text-teal-400 mb-4 flex-shrink-0">
								<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
									<circle cx="6" cy="6" r="3"></circle>
									<circle cx="6" cy="18" r="3"></circle>
									<path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
								</svg>
							</div>
							<div class="flex-grow pl-6">
								<h2 class="text-white text-lg title-font font-medium mb-2">The Catalyzer</h2>
								<p class="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug VHS try-hard ugh iceland kickstarter tumblr live-edge tilde.</p>
								<a class="mt-3 text-teal-500 inline-flex items-center" href="#home">Learn More
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
										<path d="M5 12h14M12 5l7 7-7 7"></path>
									</svg>
								</a>
							</div>
						</div>
						<div class="p-4 md:w-1/3 md:mb-0 mb-6 flex">
							<div class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-gray-800 text-teal-400 mb-4 flex-shrink-0">
								<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
									<path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
									<circle cx="12" cy="7" r="4"></circle>
								</svg>
							</div>
							<div class="flex-grow pl-6">
								<h2 class="text-white text-lg title-font font-medium mb-2">Neptune</h2>
								<p class="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug VHS try-hard ugh iceland kickstarter tumblr live-edge tilde.</p>
								<a class="mt-3 text-teal-500 inline-flex items-center" href="#home">Learn More
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
										<path d="M5 12h14M12 5l7 7-7 7"></path>
									</svg>
								</a>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section class="text-gray-500 bg-gray-900 body-font">
				<div class="container px-5 py-24 mx-auto">
					<div class="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
						<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="inline-block w-8 h-8 text-gray-700 mb-8" viewBox="0 0 975.036 975.036">
							<path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
						</svg>
						<p class="leading-relaxed text-lg">Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware. Man bun next level coloring book skateboard four loko knausgaard. Kitsch keffiyeh master cleanse direct trade indigo juice before they sold out gentrify plaid gastropub normcore XOXO 90's pickled cindigo jean shorts. Slow-carb next level shoindigoitch ethical authentic, yr scenester sriracha forage franzen organic drinking vinegar.</p>
						<span class="inline-block h-1 w-10 rounded bg-teal-500 mt-8 mb-6"></span>
						<h2 class="text-white font-medium title-font tracking-wider text-sm">HOLDEN CAULFIELD</h2>
						<p class="text-gray-600">Senior Product Designer</p>
					</div>
				</div>
			</section>
			<section class="text-gray-500 bg-gray-900 body-font overflow-hidden">
				<div class="container px-5 py-24 mx-auto flex flex-wrap">
					<div class="lg:w-1/4 mt-48 hidden lg:block">
						<div class="mt-px border-t border-gray-700 border-b border-l rounded-tl-lg rounded-bl-lg overflow-hidden">
							<p class="bg-gray-800 text-white h-12 text-center px-4 flex items-center justify-start -mt-px">Fingerstache disrupt</p>
							<p class="text-white h-12 text-center px-4 flex items-center justify-start">Franzen hashtag</p>
							<p class="bg-gray-800 text-white h-12 text-center px-4 flex items-center justify-start">Tilde art party</p>
							<p class="text-white h-12 text-center px-4 flex items-center justify-start">Banh mi cornhole</p>
							<p class="bg-gray-800 text-white h-12 text-center px-4 flex items-center justify-start">Waistcoat squid hexagon</p>
							<p class="text-white h-12 text-center px-4 flex items-center justify-start">Pinterest occupy authentic</p>
							<p class="bg-gray-800 text-white h-12 text-center px-4 flex items-center justify-start">Brooklyn helvetica</p>
							<p class="text-white h-12 text-center px-4 flex items-center justify-start">Long Feature Two</p>
							<p class="bg-gray-800 text-white h-12 text-center px-4 flex items-center justify-start">Feature One</p>
						</div>
					</div>
					<div class="flex lg:w-3/4 w-full flex-wrap lg:border border-gray-700 rounded-lg">
						<div class="lg:w-1/3 lg:mt-px w-full mb-10 lg:mb-0 border-2 border-gray-700 lg:border-none rounded-lg lg:rounded-none relative">
							<div class="px-2 text-center h-48 flex flex-col items-center justify-center">
								<h3 class="tracking-widest">START</h3>
								<h2 class="text-5xl text-white font-medium leading-none mb-4 mt-2">Free</h2>
								<span class="text-sm text-gray-500">Next 3 months</span>
							</div>
							<p class="bg-gray-800 text-gray-500 h-12 text-center px-2 flex items-center -mt-px justify-center border-t border-gray-700">Schlitz single-origin</p>
							<p class="text-gray-500 text-center h-12 flex items-center justify-center">
								<span class="w-5 h-5 inline-flex items-center justify-center bg-gray-700 text-white rounded-full flex-shrink-0">
									<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="w-3 h-3" viewBox="0 0 24 24">
										<path d="M20 6L9 17l-5-5"></path>
									</svg>
								</span>
							</p>
							<p class="bg-gray-800 text-gray-500 text-center h-12 flex items-center justify-center">
								<span class="w-5 h-5 inline-flex items-center justify-center bg-gray-700 text-white rounded-full flex-shrink-0">
									<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="w-3 h-3" viewBox="0 0 24 24">
										<path d="M20 6L9 17l-5-5"></path>
									</svg>
								</span>
							</p>
							<p class="h-12 text-gray-500 px-6 text-center leading-relaxed flex items-center justify-center">Feature</p>
							<p class="bg-gray-800 text-gray-500 text-center h-12 flex items-center justify-center">
								<span class="w-5 h-5 inline-flex items-center justify-center bg-gray-700 text-white rounded-full flex-shrink-0">
									<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="w-3 h-3" viewBox="0 0 24 24">
										<path d="M20 6L9 17l-5-5"></path>
									</svg>
								</span>
							</p>
							<p class="text-gray-500 text-center h-12 flex items-center justify-center">
								<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.2" class="w-5 h-5 text-gray-500" viewBox="0 0 24 24">
									<path d="M18 6L6 18M6 6l12 12"></path>
								</svg>
							</p>
							<p class="bg-gray-800 text-gray-500 text-center h-12 flex items-center justify-center">
								<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.2" class="w-5 h-5 text-gray-500" viewBox="0 0 24 24">
									<path d="M18 6L6 18M6 6l12 12"></path>
								</svg>
							</p>
							<p class="text-gray-500 text-center h-12 flex items-center justify-center">
								<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.2" class="w-5 h-5 text-gray-500" viewBox="0 0 24 24">
									<path d="M18 6L6 18M6 6l12 12"></path>
								</svg>
							</p>
							<p class="bg-gray-800 text-gray-500 text-center h-12 flex items-center justify-center">
								<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.2" class="w-5 h-5 text-gray-500" viewBox="0 0 24 24">
									<path d="M18 6L6 18M6 6l12 12"></path>
								</svg>
							</p>
							<div class="border-t border-gray-700 p-6 text-center rounded-bl-lg">
								<button class="flex items-center mt-auto text-white bg-teal-500 border-0 py-2 px-4 w-full focus:outline-none hover:bg-teal-600 rounded">Button
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-auto" viewBox="0 0 24 24">
										<path d="M5 12h14M12 5l7 7-7 7"></path>
									</svg>
								</button>
								<p class="text-xs text-gray-600 mt-3">Literally you probably haven't heard of them jean shorts.</p>
							</div>
						</div>
						<div class="lg:w-1/3 lg:-mt-px w-full mb-10 lg:mb-0 border-2 rounded-lg border-teal-500 relative">
							<span class="bg-teal-500 text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl">POPULAR</span>
							<div class="px-2 text-center h-48 flex flex-col items-center justify-center">
								<h3 class="tracking-widest">PRO</h3>
								<h2 class="text-5xl text-white font-medium flex items-center justify-center leading-none mb-4 mt-2">$38
            <span class="text-gray-500 text-base ml-1">/mo</span>
								</h2>
								<span class="text-sm text-gray-500">Charging $456 per year</span>
							</div>
							<p class="bg-gray-800 text-gray-500 h-12 text-center px-2 flex items-center -mt-px justify-center border-t border-gray-700">Schlitz single-origin</p>
							<p class="text-gray-500 text-center h-12 flex items-center justify-center">
								<span class="w-5 h-5 inline-flex items-center justify-center bg-gray-700 text-white rounded-full flex-shrink-0">
									<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="w-3 h-3" viewBox="0 0 24 24">
										<path d="M20 6L9 17l-5-5"></path>
									</svg>
								</span>
							</p>
							<p class="bg-gray-800 text-gray-500 text-center h-12 flex items-center justify-center">
								<span class="w-5 h-5 inline-flex items-center justify-center bg-gray-700 text-white rounded-full flex-shrink-0">
									<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="w-3 h-3" viewBox="0 0 24 24">
										<path d="M20 6L9 17l-5-5"></path>
									</svg>
								</span>
							</p>
							<p class="h-12 text-gray-500 text-center leading-relaxed flex items-center justify-center">Feature</p>
							<p class="bg-gray-800 text-gray-500 text-center h-12 flex items-center justify-center">
								<span class="w-5 h-5 inline-flex items-center justify-center bg-gray-700 text-white rounded-full flex-shrink-0">
									<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="w-3 h-3" viewBox="0 0 24 24">
										<path d="M20 6L9 17l-5-5"></path>
									</svg>
								</span>
							</p>
							<p class="text-gray-500 text-center h-12 flex items-center justify-center">
								<span class="w-5 h-5 inline-flex items-center justify-center bg-gray-700 text-white rounded-full flex-shrink-0">
									<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="w-3 h-3" viewBox="0 0 24 24">
										<path d="M20 6L9 17l-5-5"></path>
									</svg>
								</span>
							</p>
							<p class="bg-gray-800 text-gray-500 text-center h-12 flex items-center justify-center">
								<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.2" class="w-5 h-5 text-gray-500" viewBox="0 0 24 24">
									<path d="M18 6L6 18M6 6l12 12"></path>
								</svg>
							</p>
							<p class="text-gray-500 text-center h-12 flex items-center justify-center">
								<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.2" class="w-5 h-5 text-gray-500" viewBox="0 0 24 24">
									<path d="M18 6L6 18M6 6l12 12"></path>
								</svg>
							</p>
							<p class="bg-gray-800 text-gray-500 text-center h-12 flex items-center justify-center">
								<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.2" class="w-5 h-5 text-gray-500" viewBox="0 0 24 24">
									<path d="M18 6L6 18M6 6l12 12"></path>
								</svg>
							</p>
							<div class="p-6 text-center border-t border-gray-700">
								<button class="flex items-center mt-auto text-white bg-teal-500 border-0 py-2 px-4 w-full focus:outline-none hover:bg-teal-600 rounded">Button
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-auto" viewBox="0 0 24 24">
										<path d="M5 12h14M12 5l7 7-7 7"></path>
									</svg>
								</button>
								<p class="text-xs text-gray-600 mt-3">Literally you probably haven't heard of them jean shorts.</p>
							</div>
						</div>
						<div class="lg:w-1/3 w-full lg:mt-px border-2 border-gray-700 lg:border-none rounded-lg lg:rounded-none">
							<div class="px-2 text-center h-48 flex flex-col items-center justify-center">
								<h3 class="tracking-widest">BUSINESS</h3>
								<h2 class="text-5xl text-white font-medium flex items-center justify-center leading-none mb-4 mt-2">$54
            <span class="text-gray-500 text-base ml-1">/mo</span>
								</h2>
								<span class="text-sm text-gray-500">Charging $648 per year</span>
							</div>
							<p class="bg-gray-800 text-gray-500 h-12 text-center px-2 flex items-center -mt-px justify-center border-t border-gray-700">Schlitz single-origin</p>
							<p class="text-gray-500 text-center h-12 flex items-center justify-center">
								<span class="w-5 h-5 inline-flex items-center justify-center bg-gray-700 text-white rounded-full flex-shrink-0">
									<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="w-3 h-3" viewBox="0 0 24 24">
										<path d="M20 6L9 17l-5-5"></path>
									</svg>
								</span>
							</p>
							<p class="bg-gray-800 text-gray-500 text-center h-12 flex items-center justify-center">
								<span class="w-5 h-5 inline-flex items-center justify-center bg-gray-700 text-white rounded-full flex-shrink-0">
									<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="w-3 h-3" viewBox="0 0 24 24">
										<path d="M20 6L9 17l-5-5"></path>
									</svg>
								</span>
							</p>
							<p class="h-12 text-gray-500 text-center leading-relaxed flex items-center justify-center">Feature</p>
							<p class="bg-gray-800 text-gray-500 text-center h-12 flex items-center justify-center">
								<span class="w-5 h-5 inline-flex items-center justify-center bg-gray-700 text-white rounded-full flex-shrink-0">
									<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="w-3 h-3" viewBox="0 0 24 24">
										<path d="M20 6L9 17l-5-5"></path>
									</svg>
								</span>
							</p>
							<p class="text-gray-500 text-center h-12 flex items-center justify-center">
								<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.2" class="w-5 h-5 text-gray-500" viewBox="0 0 24 24">
									<path d="M18 6L6 18M6 6l12 12"></path>
								</svg>
							</p>
							<p class="bg-gray-800 text-gray-500 text-center h-12 flex items-center justify-center">
								<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.2" class="w-5 h-5 text-gray-500" viewBox="0 0 24 24">
									<path d="M18 6L6 18M6 6l12 12"></path>
								</svg>
							</p>
							<p class="text-gray-500 text-center h-12 flex items-center justify-center">
								<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.2" class="w-5 h-5 text-gray-500" viewBox="0 0 24 24">
									<path d="M18 6L6 18M6 6l12 12"></path>
								</svg>
							</p>
							<p class="bg-gray-800 text-gray-500 text-center h-12 flex items-center justify-center">
								<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.2" class="w-5 h-5 text-gray-500" viewBox="0 0 24 24">
									<path d="M18 6L6 18M6 6l12 12"></path>
								</svg>
							</p>
							<div class="p-6 text-center border-t border-gray-700">
								<button class="flex items-center mt-auto text-white bg-teal-500 border-0 py-2 px-4 w-full focus:outline-none hover:bg-teal-600 rounded">Button
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-auto" viewBox="0 0 24 24">
										<path d="M5 12h14M12 5l7 7-7 7"></path>
									</svg>
								</button>
								<p class="text-xs text-gray-600 mt-3">Literally you probably haven't heard of them jean shorts.</p>
							</div>
						</div>
					</div>
				</div>
			</section>
			<footer class="text-gray-500 bg-gray-900 body-font">
				<div class="container px-5 py-24 mx-auto">
					<div class="flex flex-wrap md:text-left text-center order-first">
						<div class="lg:w-1/4 md:w-1/2 w-full px-4">
							<h2 class="title-font font-medium text-white tracking-widest text-sm mb-3">CATEGORIES</h2>
							<nav class="list-none mb-10">
								<li>
									<a class="text-gray-600 hover:text-white" href="#home">First Link</a>
								</li>
								<li>
									<a class="text-gray-600 hover:text-white" href="#home">Second Link</a>
								</li>
								<li>
									<a class="text-gray-600 hover:text-white" href="#home">Third Link</a>
								</li>
								<li>
									<a class="text-gray-600 hover:text-white" href="#home">Fourth Link</a>
								</li>
							</nav>
						</div>
						<div class="lg:w-1/4 md:w-1/2 w-full px-4">
							<h2 class="title-font font-medium text-white tracking-widest text-sm mb-3">CATEGORIES</h2>
							<nav class="list-none mb-10">
								<li>
									<a class="text-gray-600 hover:text-white" href="#home">First Link</a>
								</li>
								<li>
									<a class="text-gray-600 hover:text-white" href="#home">Second Link</a>
								</li>
								<li>
									<a class="text-gray-600 hover:text-white" href="#home">Third Link</a>
								</li>
								<li>
									<a class="text-gray-600 hover:text-white" href="#home">Fourth Link</a>
								</li>
							</nav>
						</div>
						<div class="lg:w-1/4 md:w-1/2 w-full px-4">
							<h2 class="title-font font-medium text-white tracking-widest text-sm mb-3">CATEGORIES</h2>
							<nav class="list-none mb-10">
								<li>
									<a class="text-gray-600 hover:text-white" href="#home">First Link</a>
								</li>
								<li>
									<a class="text-gray-600 hover:text-white" href="#home">Second Link</a>
								</li>
								<li>
									<a class="text-gray-600 hover:text-white" href="#home">Third Link</a>
								</li>
								<li>
									<a class="text-gray-600 hover:text-white" href="#home">Fourth Link</a>
								</li>
							</nav>
						</div>
						<div class="lg:w-1/4 md:w-1/2 w-full px-4">
							<h2 class="title-font font-medium text-white tracking-widest text-sm mb-3">SUBSCRIBE</h2>
							<div class="flex xl:flex-no-wrap md:flex-no-wrap lg:flex-wrap flex-wrap justify-center md:justify-start">
								<input class="w-40 sm:w-auto bg-gray-800 rounded text-white xl:mr-4 lg:mr-0 sm:mr-4 mr-2 border border-gray-700 focus:outline-none focus:border-teal-500 text-base py-2 px-4" placeholder="Placeholder" type="text" />
								<button class="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-teal-500 border-0 py-2 px-6 focus:outline-none hover:bg-teal-600 rounded">Button</button>
							</div>
							<p class="text-gray-600 text-sm mt-2 md:text-left text-center">Bitters chicharrones fanny pack
          <br class="lg:block hidden" />waistcoat green juice
        </p>
						</div>
					</div>
				</div>
				<div class="bg-gray-800">
					<div class="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
						<a class="flex title-font font-medium items-center md:justify-start justify-center text-white" href="#home">
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-teal-500 rounded-full" viewBox="0 0 24 24">
								<path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
							</svg>
							<span class="ml-3 text-xl">tailblocks</span>
						</a>
						<p class="text-sm text-gray-600 sm:ml-6 sm:mt-0 mt-4">© 2020 tailblocks —
        <a href="https://twitter.com/knyttneve" class="text-gray-500 ml-1" target="_blank" rel="noopener noreferrer">@knyttneve</a>
						</p>
						<span class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
							<a class="text-gray-600" href="#home">
								<svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
									<path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
								</svg>
							</a>
							<a class="ml-3 text-gray-600" href="#home">
								<svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
									<path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
								</svg>
							</a>
							<a class="ml-3 text-gray-600" href="#home">
								<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
									<rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
									<path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
								</svg>
							</a>
							<a class="ml-3 text-gray-600" href="#home">
								<svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" class="w-5 h-5" viewBox="0 0 24 24">
									<path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
									<circle cx="4" cy="4" r="2" stroke="none"></circle>
								</svg>
							</a>
						</span>
					</div>
				</div>
			</footer>
		</div>
	);
}

export default Home;
