import * as React from 'react';
import Navbar from '../components/navbar';
import { useEffect, useState } from 'react';
import LatestPosts from '../components/posts/latestPosts';
import { getPosts } from '../lib/api/post';

export default function App({ posts }) {
	const [topPosition, setTopPosition] = useState(-60);

	const handleScroll = () => {
		let scrollTop = window.scrollY;
		setTopPosition(-scrollTop / 3 - 60);
	};

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

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
					style={{
						top: topPosition + 'px',
						height: '1200px',
						width: '600px',
					}}
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
					style={{
						top: topPosition + 400 + 'px',
						height: '1000px',
						width: '400px',
					}}
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

					<LatestPosts posts={posts} />

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

			<div className="relative text-white mt-20 px-4 max-w-6xl mx-auto sm:mt-32">
				<div
					className="absolute z-0 bg-gray-800 opacity-50 transform translate-y-64 right-0"
					style={{
						top: topPosition + 400 + 'px',
						height: '1100px',
						width: '500px',
					}}
				/>

				<h2 className="relative text-center font-light text-3xl leading-relaxed lg:text-5xl">
					Or watch
					<br />
					<span className="uppercase font-bold tracking-10">
						What I'm working on
					</span>
				</h2>

				<div className="relative mt-10 mx-auto max-w-md grid grid-cols-1 gap-8 md:max-w-4xl md:grid-cols-2 md:gap-4 lg:max-w-4xl lg:gap-10">
					<div className="flex max-w-md bg-dark-card-gradient shadow-lg">
						<img
							className="h-64 w-1/2 object-cover object center"
							src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&h=500&q=60"
							alt=""
						/>
						<div className="relative w-1/2 p-4">
							<h3 className="font-bold">
								Swim - A geolocalized social network
							</h3>
							<p className="text-sm mt-2">
								Development of the main website for Swim, built
								in Laravel and Wink
							</p>

							<div className="absolute pb-4 pr-4 bottom-0 right-0">
								<a
									href="#"
									className="mt-4 p-1 uppercase text-sm text-center tracking-24 border-2 border-white text-white hover:bg-white hover:text-gray-900 focus:bg-white focus:text-gray-900 transition duration-150 ease-in-out"
								>
									More
								</a>
							</div>
						</div>
					</div>
					<div className="flex max-w-md bg-dark-card-gradient shadow-lg">
						<img
							className="h-64 w-1/2 object-cover object center"
							src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&h=500&q=60"
							alt=""
						/>
						<div className="relative w-1/2 p-4">
							<h3 className="font-bold">
								Swim - A geolocalized social network
							</h3>
							<p className="text-sm mt-2">
								Development of the main website for Swim, built
								in Laravel and Wink
							</p>

							<div className="absolute pb-4 pr-4 bottom-0 right-0">
								<a
									href="#"
									className="mt-4 p-1 uppercase text-sm text-center tracking-24 border-2 border-white text-white hover:bg-white hover:text-gray-900 focus:bg-white focus:text-gray-900 transition duration-150 ease-in-out"
								>
									More
								</a>
							</div>
						</div>
					</div>
					<div className="flex max-w-md bg-dark-card-gradient shadow-lg">
						<img
							className="h-64 w-1/2 object-cover object center"
							src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&h=500&q=60"
							alt=""
						/>
						<div className="relative w-1/2 p-4">
							<h3 className="font-bold">
								Swim - A geolocalized social network
							</h3>
							<p className="text-sm mt-2">
								Development of the main website for Swim, built
								in Laravel and Wink
							</p>

							<div className="absolute pb-4 pr-4 bottom-0 right-0">
								<a
									href="#"
									className="mt-4 p-1 uppercase text-sm text-center tracking-24 border-2 border-white text-white hover:bg-white hover:text-gray-900 focus:bg-white focus:text-gray-900 transition duration-150 ease-in-out"
								>
									More
								</a>
							</div>
						</div>
					</div>
					<div className="flex max-w-md bg-dark-card-gradient shadow-lg">
						<img
							className="h-64 w-1/2 object-cover object center"
							src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&h=500&q=60"
							alt=""
						/>
						<div className="relative w-1/2 p-4">
							<h3 className="font-bold">
								Swim - A geolocalized social network
							</h3>
							<p className="text-sm mt-2">
								Development of the main website for Swim, built
								in Laravel and Wink
							</p>

							<div className="absolute pb-4 pr-4 bottom-0 right-0">
								<a
									href="#"
									className="mt-4 p-1 uppercase text-sm text-center tracking-24 border-2 border-white text-white hover:bg-white hover:text-gray-900 focus:bg-white focus:text-gray-900 transition duration-150 ease-in-out"
								>
									More
								</a>
							</div>
						</div>
					</div>
				</div>

				<div className="relative mt-12 text-center">
					<a
						href="#"
						className="mt-4 py-4 px-8 uppercase text-sm text-center tracking-24 border-2 border-white text-white hover:bg-white hover:text-gray-900 focus:bg-white focus:text-gray-900 transition duration-150 ease-in-out"
					>
						My blog
					</a>
				</div>
			</div>

			<div className="relative text-white mt-20 px-4 sm:mt-32">
				<div
					className="hidden absolute inset-x-0 h-96 max-w-lg mx-auto bg-gray-700 opacity-50 shadow-lg lg:block lg:max-w-3xl"
					style={{ top: '160px' }}
				/>

				<h2 className="text-center font-light text-3xl leading-relaxed lg:text-5xl">
					Finally, check
					<br />
					<span className="uppercase font-bold tracking-10">
						What are my skills
					</span>
				</h2>

				<div className="mt-10 mx-auto max-w-xl grid grid-cols-1 gap-8 md:max-w-3xl md:grid-cols-2 lg:max-w-screen-xl lg:grid-cols-3">
					<div className="relative flex items-center">
						<div className="absolute w-16 h-16 bg-gray-800 shadow-lg rounded-full">
							<img
								className="h-full p-4 object-contain object-center"
								src="/assets/logos/laravel-logo.svg"
								alt="Laravel logo"
							/>
						</div>

						<div className="ml-8 pl-12 p-4 bg-dark-card-gradient shadow-lg md:h-64">
							<h3 className="font-bold text-lg">Laravel</h3>
							<p className="mt-4">
								Called the ”<b>PHP</b> framework for web
								artisans". It is one of the best web frameworks
								out there to make web development.
							</p>

							<div className="relative h-10" />
							<div className="absolute bottom-0 right-0 pb-4 pr-4">
								<a
									href="#"
									className="mt-4 p-1 uppercase text-sm text-center tracking-24 border-2 border-white text-white hover:bg-white hover:text-gray-900 focus:bg-white focus:text-gray-900 transition duration-150 ease-in-out"
								>
									More
								</a>
							</div>
						</div>
					</div>
					<div className="relative flex items-center">
						<div className="absolute w-16 h-16 bg-gray-800 shadow-lg rounded-full">
							<img
								className="h-full p-4 object-contain object-center"
								src="/assets/logos/laravel-logo.svg"
								alt="Laravel logo"
							/>
						</div>

						<div className="ml-8 pl-12 p-4 bg-dark-card-gradient shadow-lg md:h-64">
							<h3 className="font-bold text-lg">Laravel</h3>
							<p className="mt-4">
								Called the ”<b>PHP</b> framework for web
								artisans". It is one of the best web frameworks
								out there to make web development.
							</p>

							<div className="relative h-10" />
							<div className="absolute bottom-0 right-0 pb-4 pr-4">
								<a
									href="#"
									className="mt-4 p-1 uppercase text-sm text-center tracking-24 border-2 border-white text-white hover:bg-white hover:text-gray-900 focus:bg-white focus:text-gray-900 transition duration-150 ease-in-out"
								>
									More
								</a>
							</div>
						</div>
					</div>
					<div className="relative flex items-center">
						<div className="absolute w-16 h-16 bg-gray-800 shadow-lg rounded-full">
							<img
								className="h-full p-4 object-contain object-center"
								src="/assets/logos/laravel-logo.svg"
								alt="Laravel logo"
							/>
						</div>

						<div className="ml-8 pl-12 p-4 bg-dark-card-gradient shadow-lg md:h-64">
							<h3 className="font-bold text-lg">Laravel</h3>
							<p className="mt-4">
								Called the ”<b>PHP</b> framework for web
								artisans". It is one of the best web frameworks
								out there to make web development.
							</p>

							<div className="relative h-10" />
							<div className="absolute bottom-0 right-0 pb-4 pr-4">
								<a
									href="#"
									className="mt-4 p-1 uppercase text-sm text-center tracking-24 border-2 border-white text-white hover:bg-white hover:text-gray-900 focus:bg-white focus:text-gray-900 transition duration-150 ease-in-out"
								>
									More
								</a>
							</div>
						</div>
					</div>
					<div className="relative flex items-center">
						<div className="absolute w-16 h-16 bg-gray-800 shadow-lg rounded-full">
							<img
								className="h-full p-4 object-contain object-center"
								src="/assets/logos/laravel-logo.svg"
								alt="Laravel logo"
							/>
						</div>

						<div className="ml-8 pl-12 p-4 bg-dark-card-gradient shadow-lg md:h-64">
							<h3 className="font-bold text-lg">Laravel</h3>
							<p className="mt-4">
								Called the ”<b>PHP</b> framework for web
								artisans". It is one of the best web frameworks
								out there to make web development.
							</p>

							<div className="relative h-10" />
							<div className="absolute bottom-0 right-0 pb-4 pr-4">
								<a
									href="#"
									className="mt-4 p-1 uppercase text-sm text-center tracking-24 border-2 border-white text-white hover:bg-white hover:text-gray-900 focus:bg-white focus:text-gray-900 transition duration-150 ease-in-out"
								>
									More
								</a>
							</div>
						</div>
					</div>
					<div className="relative flex items-center">
						<div className="absolute w-16 h-16 bg-gray-800 shadow-lg rounded-full">
							<img
								className="h-full p-4 object-contain object-center"
								src="/assets/logos/laravel-logo.svg"
								alt="Laravel logo"
							/>
						</div>

						<div className="ml-8 pl-12 p-4 bg-dark-card-gradient shadow-lg md:h-64">
							<h3 className="font-bold text-lg">Laravel</h3>
							<p className="mt-4">
								Called the ”<b>PHP</b> framework for web
								artisans". It is one of the best web frameworks
								out there to make web development.
							</p>

							<div className="relative h-10" />
							<div className="absolute bottom-0 right-0 pb-4 pr-4">
								<a
									href="#"
									className="mt-4 p-1 uppercase text-sm text-center tracking-24 border-2 border-white text-white hover:bg-white hover:text-gray-900 focus:bg-white focus:text-gray-900 transition duration-150 ease-in-out"
								>
									More
								</a>
							</div>
						</div>
					</div>
					<div className="relative flex items-center">
						<div className="absolute w-16 h-16 bg-gray-800 shadow-lg rounded-full">
							<img
								className="h-full p-4 object-contain object-center"
								src="/assets/logos/laravel-logo.svg"
								alt="Laravel logo"
							/>
						</div>

						<div className="ml-8 pl-12 p-4 bg-dark-card-gradient shadow-lg md:h-64">
							<h3 className="font-bold text-lg">Laravel</h3>
							<p className="mt-4">
								Called the ”<b>PHP</b> framework for web
								artisans". It is one of the best web frameworks
								out there to make web development.
							</p>

							<div className="relative h-10" />
							<div className="absolute bottom-0 right-0 pb-4 pr-4">
								<a
									href="#"
									className="mt-4 p-1 uppercase text-sm text-center tracking-24 border-2 border-white text-white hover:bg-white hover:text-gray-900 focus:bg-white focus:text-gray-900 transition duration-150 ease-in-out"
								>
									More
								</a>
							</div>
						</div>
					</div>
				</div>

				<div className="mt-12 text-center">
					<a
						href="#"
						className="mt-4 py-4 px-8 uppercase text-sm text-center tracking-24 border-2 border-white text-white hover:bg-white hover:text-gray-900 focus:bg-white focus:text-gray-900 transition duration-150 ease-in-out"
					>
						All my skills
					</a>
				</div>
			</div>

			<div className="relative py-20 sm:py-40">
				<div className="hidden absolute z-0 w-full h-64 bg-gray-800 opacity-50 transform sm:block sm:w-1/2 sm:translate-x-1/2 sm:translate-y-24" />

				<div className="relative flex flex-wrap items-center justify-center sm:space-x-10">
					<a
						href="#"
						className="relative nav-link p-4 text-white text-sm uppercase tracking-24 sm:p-2"
					>
						Blog
					</a>

					<a
						href="#"
						className="relative nav-link p-4 text-white text-sm uppercase tracking-24 sm:p-2"
					>
						Projects
					</a>

					<a
						href="#"
						className="relative nav-link p-4 text-white text-sm uppercase tracking-24 sm:p-2"
					>
						Skills
					</a>

					<a
						href="#"
						className="relative nav-link p-4 text-white text-sm uppercase tracking-24 sm:p-2"
					>
						Contact me
					</a>
				</div>
				<div className="relative mt-8 flex items-center justify-center space-x-16">
					<a
						href="#"
						className="py-2 text-white transform hover:scale-105 focus:scale-105 transition duration-200 ease-in-out"
					>
						<svg
							className="h-8"
							viewBox="0 0 30 30"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M10.0343 24.156C10.0343 24.28 9.89516 24.3793 9.71976 24.3793C9.52016 24.3979 9.38105 24.2986 9.38105 24.156C9.38105 24.0319 9.52016 23.9326 9.69556 23.9326C9.87702 23.914 10.0343 24.0133 10.0343 24.156ZM8.15323 23.8768C8.11089 24.0009 8.23186 24.1435 8.41331 24.1808C8.57056 24.2428 8.75202 24.1808 8.78831 24.0567C8.8246 23.9326 8.70968 23.79 8.52823 23.7341C8.37097 23.6907 8.19556 23.7527 8.15323 23.8768ZM10.8266 23.7713C10.6512 23.8148 10.5302 23.9326 10.5484 24.0753C10.5665 24.1994 10.7238 24.28 10.9052 24.2366C11.0806 24.1932 11.2016 24.0753 11.1835 23.9512C11.1653 23.8334 11.002 23.7527 10.8266 23.7713ZM14.8065 0C6.41734 0 0 6.53216 0 15.1362C0 22.0158 4.22177 27.9028 10.252 29.9747C11.0262 30.1174 11.2984 29.6273 11.2984 29.2241C11.2984 28.8395 11.2802 26.718 11.2802 25.4152C11.2802 25.4152 7.04637 26.3457 6.15726 23.5666C6.15726 23.5666 5.46774 21.7614 4.47581 21.2962C4.47581 21.2962 3.09073 20.3223 4.57258 20.3409C4.57258 20.3409 6.07863 20.4649 6.90726 21.9414C8.23185 24.3359 10.4516 23.6473 11.3165 23.2379C11.4556 22.2453 11.8488 21.5567 12.2843 21.1473C8.90323 20.7627 5.49194 20.2602 5.49194 14.2926C5.49194 12.5867 5.95161 11.7306 6.91935 10.6388C6.7621 10.2356 6.24798 8.57307 7.07661 6.4267C8.34073 6.02348 11.25 8.10161 11.25 8.10161C12.4597 7.75422 13.7601 7.57433 15.0484 7.57433C16.3367 7.57433 17.6371 7.75422 18.8468 8.10161C18.8468 8.10161 21.756 6.01728 23.0202 6.4267C23.8488 8.57927 23.3347 10.2356 23.1774 10.6388C24.1452 11.7368 24.7379 12.5929 24.7379 14.2926C24.7379 20.2788 21.1754 20.7565 17.7944 21.1473C18.3508 21.6374 18.8226 22.5679 18.8226 24.0257C18.8226 26.1162 18.8044 28.703 18.8044 29.2117C18.8044 29.6149 19.0827 30.105 19.8508 29.9623C25.8992 27.9028 30 22.0158 30 15.1362C30 6.53216 23.1956 0 14.8065 0ZM5.87903 21.3955C5.8004 21.4575 5.81855 21.6002 5.92137 21.718C6.01815 21.8173 6.15726 21.8607 6.23589 21.7801C6.31452 21.718 6.29637 21.5753 6.19355 21.4575C6.09677 21.3582 5.95766 21.3148 5.87903 21.3955ZM5.22581 20.893C5.18347 20.9736 5.24395 21.0729 5.36492 21.1349C5.46169 21.1969 5.58266 21.1783 5.625 21.0915C5.66734 21.0108 5.60685 20.9116 5.48589 20.8496C5.36492 20.8123 5.26815 20.8309 5.22581 20.893ZM7.18548 23.1014C7.08871 23.182 7.125 23.3681 7.26411 23.486C7.40323 23.6287 7.57863 23.6473 7.65726 23.548C7.73589 23.4674 7.6996 23.2813 7.57863 23.1634C7.44556 23.0207 7.26411 23.0021 7.18548 23.1014ZM6.49597 22.1895C6.39919 22.2515 6.39919 22.4128 6.49597 22.5555C6.59274 22.6982 6.75605 22.7602 6.83468 22.6982C6.93145 22.6175 6.93145 22.4562 6.83468 22.3136C6.75 22.1709 6.59274 22.1088 6.49597 22.1895Z"
								fill="currentColor"
							/>
						</svg>
					</a>

					<a
						href="#"
						className="py-2 text-white transform hover:scale-105 focus:scale-105 transition duration-200 ease-in-out"
					>
						<svg
							className="h-8"
							viewBox="0 0 37 30"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M33.1406 7.47654C33.1641 7.80464 33.1641 8.13283 33.1641 8.46093C33.1641 18.4687 25.5469 30 11.625 30C7.33593 30 3.35158 28.7578 0 26.6016C0.609397 26.6719 1.19528 26.6953 1.82812 26.6953C5.36713 26.6953 8.62499 25.5 11.2266 23.461C7.89843 23.3906 5.10936 21.211 4.1484 18.2109C4.61719 18.2812 5.08591 18.3281 5.57815 18.3281C6.25781 18.3281 6.93755 18.2343 7.57032 18.0703C4.10158 17.3671 1.49994 14.3203 1.49994 10.6406V10.5469C2.50771 11.1094 3.67969 11.461 4.92178 11.5078C2.88272 10.1484 1.54683 7.82809 1.54683 5.20307C1.54683 3.79685 1.92176 2.50779 2.57805 1.38278C6.30463 5.97652 11.9062 8.97647 18.1874 9.30466C18.0703 8.74215 17.9999 8.15627 17.9999 7.57032C17.9999 3.3984 21.3749 0 25.5702 0C27.7499 0 29.7186 0.91406 31.1015 2.39062C32.8124 2.06252 34.453 1.42967 35.9062 0.562504C35.3436 2.32036 34.1483 3.79692 32.5781 4.73435C34.1015 4.57037 35.5781 4.1484 36.9374 3.56253C35.9063 5.06246 34.6172 6.39835 33.1406 7.47654Z"
								fill="white"
							/>
						</svg>
					</a>
				</div>
			</div>
		</div>
	);
}

export async function getStaticProps({ params }) {
	const posts = getPosts(
		['title', 'date', 'slug', 'coverImage', 'headerImage', 'imageAlt'],
		3
	);

	return {
		props: {
			posts: posts,
		},
	};
}
