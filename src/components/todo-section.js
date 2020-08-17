import React from 'react';
import { formatDistanceToNow, isAfter } from 'date-fns';

export default function TodoSection({ title, todos }) {
	return todos.length > 0 && (<section className="container mx-auto px-5 pt-16 space-y-8">
		<h2 className="text-5xl font-semibold">{title}</h2>
		<div className="space-y-4">
			{todos.sort((a, b) => isAfter(new Date(a.created), new Date(b.created)) ? -1 : 1).map(t => (
				<div className="flex justify-between">
					<div className="flex space-x-4">
						<div>
							<svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="calendar w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
						</div>
						<div className="font-semibold">
							{t.message}
						</div>
					</div>
					<div className="text-gray-600">{formatDistanceToNow(new Date(t.created))} ago</div>
				</div>
			))}
		</div>
	</section>)
}
