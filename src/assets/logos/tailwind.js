import * as React from "react"

function Tailwind(props) {
	return (
		<svg
			className="prefix__w-10 prefix__h-10 prefix__block prefix__md:hidden"
			viewBox="0 0 64 64"
			{...props}
		>
			<title>{"Tailwind CSS"}</title>
			<path
				d="M13.5 11.1C15.3 3.9 19.8.3 27 .3c10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 27.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"
				transform="translate(5 16)"
				fill="url(#prefix__logoMarkGradient)"
				fillRule="evenodd"
			/>
			<defs>
				<linearGradient x1="0%" y1="0%" y2="100%" id="prefix__logoMarkGradient">
					<stop stopColor="#2298BD" />
					<stop offset={1} stopColor="#0ED7B5" />
				</linearGradient>
			</defs>
		</svg>
	)
}

export default Tailwind
