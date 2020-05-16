import * as React from 'react';
import Navbar from '../components/navbar';

export default function App() {
	return (
		<>
			<Navbar />

			<div className="px-4 max-w-4xl mx-auto text-white flex flex-wrap justify-between md:px-10 lg:max-w-5xl xl:px-6 xl:max-w-screen-xl lg:justify-start">
				<div className="w-full md:w-1/2 text-center md:text-left">
					<h1 className="text-4xl leading-relaxed lg:text-5xl xl:text-6xl">
						Hey, I'm
						<br />
						<span className="uppercase font-bold tracking-10">
							Luis Güette
						</span>
					</h1>

					<p className="mt-4 max-w-lg mx-auto md:mx-0">
						I'm a <b>tech</b> guy and I love to make{' '}
						<b>software products</b> with the last technology
						trends.
					</p>

					<div className="mt-10 flex flex-wrap justify-center items-center sm:space-x-4 md:justify-start">
						<a
							href="#"
							className="block w-full p-4 uppercase text-sm text-center tracking-24 bg-white text-gray-900 border-2 border-white hover:shadow-lg focus:shadow-lg transition duration-150 ease-in-out sm:w-48 md:w-auto"
						>
							My projects
						</a>
						<a
							href="#"
							className="block w-full mt-4 p-4 uppercase text-sm text-center tracking-24 border-2 border-white text-white hover:bg-white hover:text-gray-900 focus:bg-white focus:text-gray-900 transition duration-150 ease-in-out sm:w-48 sm:mt-0 md:w-auto"
						>
							My blog
						</a>
					</div>
				</div>

				<div className="w-full mt-10 md:w-1/2 md:mt-0 lg:w-auto lg:pl-40">
					<div className="relative h-72 w-72 mx-auto md:mx-0 md:ml-auto md:mr-4 lg:h-72 lg:w-72 xl:h-96 xl:w-96">
						<div className="absolute z-0 border-2 border-white w-72 h-72 ml-4 hover:bg-gray-700 focus:bg-gray-700 transition duration-500 ease-in-out lg:h-72 lg:w-72 xl:h-96 xl:w-96" />
						<img
							className="absolute mt-4 h-72 shadow-lg hover:shadow-none transform hover:translate-x-1 hover:-translate-y-1 focus:shadow-none focus:translate-x-1 focus:-translate-y-1 transition duration-500 ease-in-out lg:h-72 xl:h-96"
							src="/assets/img/profile-img.png"
							alt="Luis Güette photo"
						/>
					</div>
				</div>
			</div>
		</>
	);
}
