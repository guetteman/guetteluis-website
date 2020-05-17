import * as React from 'react';
import Navbar from '../components/navbar';

export default function App() {
	return (
		<div className="relative overflow-hidden">
			<Navbar />

			<div className="px-4 max-w-4xl mx-auto text-white flex flex-wrap justify-between md:px-10 lg:max-w-5xl xl:px-6 xl:max-w-screen-xl lg:justify-start">
				<div className="w-full md:w-1/2 text-center md:text-left">
					<h1 className="text-4xl font-light leading-relaxed lg:text-5xl xl:text-6xl">
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

			<div className="relative mt-20 pl-4 pr-8 text-white max-w-4xl mx-auto sm:mt-32 lg:max-w-6xl">
				<div
					className="absolute z-0 bg-gray-800 opacity-50 transform translate-y-40 translate-x-40 right-0"
					style={{ height: '1200px', width: '600px' }}
				/>
				<div className="absolute inset-0 z-10 ml-10 mr-4 mt-4 -mb-4 border-2 border-white hover:bg-gray-700 focus:bg-gray-700 transition duration-500 ease-in-out" />
				<div className="relative z-20 bg-dark-card-gradient shadow-lg p-4 text-center transform hover:translate-x-1 hover:translate-y-1 focus:translate-x-1 focus:translate-y-1 transition duration-500 ease-in-out sm:p-10 lg:p-16">
					<p>
						I'm an electrical engineer who always loved software
						development, and learn how to make products for whatever
						cool device I found. I live in Venezuela, and from the
						very beginning I started to make remote software
						projects. I have worked with people in Venezuela, USA,
						Spain, Australia, Argentina, England, Italy, and so on.
					</p>
					<p className="mt-10">
						My main focus is on <b>web development</b> because I
						think that right now is the most needed kind of products
						in the world. I work mainly with <b>Laravel</b>,{' '}
						<b>VueJS</b>, <b>React</b> but I'm not limited to that,
						I think that one of the best quality I have is that I
						keep learning new technologies to improve my criteria
						about building software products.
					</p>
					<p className="mt-10">
						I see the future really interesting about multiplatform
						development, so I've been working on <b>Flutter</b>,{' '}
						<b>React Native</b> and <b>Ionic</b>. But without
						forgetting what I think is the most important part of
						software development, the backend. Every day look to
						improve my skills on writing better code depending on
						the situation.
					</p>
					<p className="mt-10">
						There are so many things that I've been working on and I
						want to show you. So, please check my website and see
						what I can offer.
					</p>
					<p className="mt-10 text-right text-lg font-bold">Luis</p>
				</div>
			</div>

			<div className="relative text-white mt-20 max-w-6xl mx-auto sm:mt-32">
				<div
					className="absolute z-0 left-0 bg-gray-800 opacity-50 transform translate-y-64"
					style={{ height: '1000px', width: '400px' }}
				/>

				<h2 className="relative text-center font-light text-3xl leading-relaxed lg:text-5xl">
					Check my
					<br />
					<span className="uppercase font-bold tracking-10">
						Latest posts
					</span>
				</h2>

				<div className="relative mt-10 space-y-8 flex flex-wrap justify-center sm:space-y-0">
					<div
						className="hidden absolute inset-x-0 h-96 max-w-lg mx-auto bg-gray-700 opacity-75 shadow-lg sm:block lg:h-72 lg:max-w-3xl"
						style={{ top: '60px' }}
					/>
					<a href="#" className="relative w-full sm:w-auto sm:p-4">
						<div className="relative h-72 w-72 mx-auto transform hover:scale-105 hover:shadow-xl focus:scale-105 focus:shadow-xl transition duration-300 ease-in-out">
							<img
								className="absolute inset-0"
								src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&h=500&q=60"
								alt=""
							/>
							<div className="absolute inset-0 bg-gray-900 opacity-50" />

							<div className="absolute bottom-0 p-4">
								<p className="text-sm">Sep 27, 2017</p>
								<p className="font-bold">
									How to Configure an API with ExpressJS
								</p>
							</div>
						</div>
					</a>

					<a href="#" className="relative w-full sm:w-auto sm:p-4">
						<div className="relative h-72 w-72 mx-auto transform hover:scale-105 hover:shadow-xl focus:scale-105 focus:shadow-xl transition duration-300 ease-in-out">
							<img
								className="absolute inset-0"
								src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&h=500&q=60"
								alt=""
							/>
							<div className="absolute inset-0 bg-gray-900 opacity-50" />

							<div className="absolute bottom-0 p-4">
								<p className="text-sm">Sep 27, 2017</p>
								<p className="font-bold">
									How to Configure an API with ExpressJS
								</p>
							</div>
						</div>
					</a>

					<a href="#" className="relative w-full sm:w-auto sm:p-4">
						<div className="relative h-72 w-72 mx-auto transform hover:scale-105 hover:shadow-xl focus:scale-105 focus:shadow-xl transition duration-300 ease-in-out">
							<img
								className="absolute inset-0"
								src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&h=500&q=60"
								alt=""
							/>
							<div className="absolute inset-0 bg-gray-900 opacity-50" />

							<div className="absolute bottom-0 p-4">
								<p className="text-sm">Sep 27, 2017</p>
								<p className="font-bold">
									How to Configure an API with ExpressJS
								</p>
							</div>
						</div>
					</a>

					<div className="relative w-full pt-4 px-4 text-center md:pt-10 lg:pt-12">
						<p className="font-light">Learn more about</p>

						<div className="flex flex-wrap justify-center space-x-4">
							<a
								href="#"
								className="relative nav-link py-2 text-white font-medium uppercase tracking-24"
							>
								Mobility
							</a>

							<a
								href="#"
								className="relative nav-link py-2 text-white font-medium uppercase tracking-24"
							>
								Web development
							</a>

							<a
								href="#"
								className="relative nav-link py-2 text-white font-medium uppercase tracking-24"
							>
								Design
							</a>
						</div>
					</div>
				</div>
			</div>

			<div className="relative text-white mt-20 sm:mt-32">
				<h2 className="text-center font-light text-3xl leading-relaxed lg:text-5xl">
					Or see
					<br />
					<span className="uppercase font-bold tracking-10">
						What I'm working on
					</span>
				</h2>
			</div>

			<div className="h-64" />
		</div>
	);
}
