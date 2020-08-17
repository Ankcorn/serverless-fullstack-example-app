import React from 'react';
import Hero from '../components/hero';
import Tools from '../components/tools';
import AWS from '../assets/logos/aws';
import Serverless from '../assets/logos/serverless';
import Node from '../assets/logos/node';
import ReactLogo from '../assets/logos/react';
import Tailwind from '../assets/logos/tailwind'

function Home() {
	return (
		<div className="App">
			<Hero
				title="Helping you build software products with serverless"
				description={`Serverless promises that it helps you focus on your core product
				but because the tooling is complicated it can often be hard to achieve that.
				Serverless Sass Starter is a high quality opinionated boilerplate that supercharges
				your serverless development process.`}
				image="https://images.unsplash.com/photo-1597509288493-c1fff98a4bd3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&crop=center&w=720&h=600&q=80"
			/>
			<Tools
				title="Components"
				description="Serverless sass starter uses"
				tools={[
					{
						name: "Amazon Web Services",
						description: "Serverless web hosting, compute, and storage.",
						link: "https://aws.amazon.com/",
						icon: AWS
					},
					{
						name: "Serverless Framework",
						description: "Zero-friction serverless infrastructure deployment as code",
						link: "https://www.serverless.com/",
						icon: Serverless
					},
					{
						name: "Node.js",
						description: "An asynchronous event-driven JavaScript runtime, designed to build scalable network applications.",
						link: "https://nodejs.org/en/about/",
						icon: Node
					},
					{
						name: "React",
						description: "A JavaScript library for building user interf.aces",
						link: "https://reactjs.org/",
						icon: ReactLogo
					},
					{
						name: "Tailwind CSS",
						description: "A utility-first CSS framework for rapidly building custom designs.",
						link: "https://tailwindcss.com/",
						icon: Tailwind
					},
					{
						name: "Tailblocks",
						description: "Ready-to-use Tailwind CSS blocks.",
						link: "https://mertjf.github.io/tailblocks/",
						icon: () => (<svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-blue-500 rounded" viewBox="0 0 24 24">
							<path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
						</svg>)
					},
				]}
			/>
			<section class="text-gray-500 bg-gray-900 body-font" >
				<div class="container px-5 py-24 mx-auto">
					<div class="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
						<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="inline-block w-8 h-8 text-gray-700 mb-8" viewBox="0 0 975.036 975.036">
							<path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
						</svg>
						<p class="leading-relaxed text-lg">Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware. Man bun next level coloring book skateboard four loko knausgaard. Kitsch keffiyeh master cleanse direct trade indigo juice before they sold out gentrify plaid gastropub normcore XOXO 90's pickled cindigo jean shorts. Slow-carb next level shoindigoitch ethical authentic, yr scenester sriracha forage franzen organic drinking vinegar.</p>
						<span class="inline-block h-1 w-10 rounded bg-teal-700 mt-8 mb-6"></span>
						<h2 class="text-white font-medium title-font tracking-wider text-sm">HOLDEN CAULFIELD</h2>
						<p class="text-gray-400">Senior Product Designer</p>
					</div>
				</div>
			</section >
			<footer class="text-gray-700 bg-white body-font">
				<div class="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
					<a class="flex title-font font-medium items-center md:justify-start justify-center">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-teal-500 rounded-full" viewBox="0 0 24 24">
							<path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
						</svg>
						<span class="ml-3 text-xl">tailblocks</span>
					</a>
					<p class="text-sm text-gray-600 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-800 sm:py-2 sm:mt-0 mt-4">© 2020 tailblocks —
      <a href="https://twitter.com/knyttneve" class="text-gray-500 ml-1" target="_blank" rel="noopener noreferrer">@knyttneve</a>
					</p>
					<span class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
						<a class="text-gray-600">
							<svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
								<path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
							</svg>
						</a>
						<a class="ml-3 text-gray-600">
							<svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
								<path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
							</svg>
						</a>
						<a class="ml-3 text-gray-600">
							<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
								<rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
								<path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
							</svg>
						</a>
						<a class="ml-3 text-gray-600">
							<svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" class="w-5 h-5" viewBox="0 0 24 24">
								<path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
								<circle cx="4" cy="4" r="2" stroke="none"></circle>
							</svg>
						</a>
					</span>
				</div>
			</footer>
		</div >
	);
}

export default Home;
