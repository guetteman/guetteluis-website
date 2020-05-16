import * as React from 'react';
import Navbar from '../components/navbar';

export default function App() {
	return (
		<>
			<Navbar />

			<div className="text-white px-4">
				<h1 className="text-4xl text-center leading-relaxed">
					Hey, I'm
					<br />
					<span className="uppercase font-bold tracking-10">
						Luis Güette
					</span>
				</h1>

				<p className="text-center mt-4">
					I'm a <b>tech</b> guy and I love to make{' '}
					<b>software products</b> with the last technology trends.
				</p>

				<a
					href="#"
					className="block w-full mt-10 p-4 uppercase text-sm text-center tracking-24 bg-white text-gray-900 hover:shadow-lg focus:shadow-lg transition duration-150 ease-in-out"
				>
					My projects
				</a>
				<a
					href="#"
					className="block w-full mt-4 p-4 uppercase text-sm text-center tracking-24 border-2 border-white text-white hover:bg-white hover:text-gray-900 focus:bg-white focus:text-gray-900 transition duration-150 ease-in-out"
				>
					My blog
				</a>

				<div className="relative mt-10 h-72 w-72 mx-auto">
					<div className="absolute z-0 border-2 border-white w-72 h-72 ml-4 hover:bg-gray-700 focus:bg-gray-700 transition duration-500 ease-in-out" />
					<img
						className="absolute mt-4 h-72 shadow-lg hover:shadow-none transform hover:translate-x-1 hover:-translate-y-1 focus:shadow-none focus:translate-x-1 focus:-translate-y-1 transition duration-500 ease-in-out"
						src="/assets/img/profile-img.png"
						alt="Luis Güette photo"
					/>
				</div>
			</div>
		</>
	);
}
