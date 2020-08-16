import React from 'react';

export default function Tools({ title, description, tools }) {
	return (
		<section class="text-gray-700 body-font">
			<div class="container px-5 py-24 mx-auto">
				<div class="flex flex-wrap w-full mb-20 flex-col items-center text-center">
					<h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">{title}</h1>
					<p class="lg:w-1/2 w-full leading-relaxed text-base">{description}</p>
				</div>
				<div class="flex flex-wrap -m-4">
					{tools.map(tool => (
						<a class="xl:w-1/3 md:w-1/2 p-4" href={tool.link}>
							<div class="border border-gray-300 p-6 rounded-lg">
								<div class="w-10 h-10 inline-flex items-center justify-center rounded-full mb-4">
									<tool.icon />
								</div>
								<h2 class="text-lg text-gray-900 font-medium title-font mb-2">{tool.name}</h2>
								<p class="leading-relaxed text-base">{tool.description}</p>
							</div>
						</a>
					))}
				</div>
				<button class="flex mx-auto mt-16 text-white bg-teal-700 border-0 py-2 px-8 focus:outline-none hover:bg-teal-600 rounded text-lg">Button</button>
			</div>
		</section>
	)
}
