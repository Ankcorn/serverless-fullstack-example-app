import React, { useState } from "react";
import usePrivate from '../hooks/usePrivate';
import useTodos from '../hooks/useTodos';
import TodoSection from '../components/todo-section';
import { differenceInDays } from 'date-fns';

function App() {
	const [newTodo, setNewTodo] = useState();
	const user = usePrivate();
	const { loading, todos, create, revalidate } = useTodos();

	if (!user || loading) {
		return null;
	}

	const handleSubmit = async (e) => {
		e.preventDefault();
		await create({ message: newTodo })
		await revalidate()
		setNewTodo('');
	}

	let today = [];
	let yesterday = []
	let other = []

	if (todos) {
		todos.forEach((t) => {
			if (differenceInDays(new Date(t.created), new Date()) === 0) {
				return today.push(t)

			}
			if (differenceInDays(new Date(t.created), new Date()) === 1) {
				return yesterday.push(t)
			}
			return other.push(t)
		})
	}

	return (
		<div>
			<section className="container mx-auto px-5 pt-16 space-y-8">
				<div className="flex flex-col justify-center items-center space-y-8">
					<form onSubmit={handleSubmit} class="flex w-full justify-center">
						<input value={newTodo} onChange={(e) => setNewTodo(e.target.value)} class="bg-gray-100 rounded mr-4 border border-gray-400 focus:outline-none focus:border-teal-700 text-base px-4 lg:w-full xl:w-1/2 w-2/4 md:w-full" placeholder="Placeholder" type="text" />
						<button type="submit" class="inline-flex text-white bg-teal-700 border-0 py-2 px-6 focus:outline-none hover:bg-teal-900 rounded text-lg">Create</button>
					</form>
				</div>
			</section>
			<TodoSection title="Today" todos={today} />
			<TodoSection title="Yesterday" todos={yesterday} />
			<TodoSection title="Historical" todos={other} />
		</div>
	)
}

export default App
