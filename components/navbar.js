import React, { useState } from 'react';
import Transition from '../helpers/Transition';
import Link from 'next/link';

export default function Navbar() {
	const [showMenu, setShowMenu] = useState(false);

	const Logo = (
		<svg className="h-10 sm:h-16" viewBox="0 0 54 63" fill="none">
			<path
				stroke="white"
				strokeWidth="1"
				d="M9.57447 34.9787H1M1.31915 34.6383L1.31915 1M1.31915 63L1.31915 38.5957M1.65957 1.31915H51.1277M1.65957 62H51.1277M52.1277 1L52.1277 63M43.6079 46.4223C39.2639 51.3532 34.2546 53.8187 28.5801 53.8187C25.6841 53.8187 23.023 53.2121 20.5966 51.999C18.2094 50.7466 16.1353 49.1226 14.3742 47.1267C12.6523 45.1308 11.3021 42.8806 10.3237 40.3759C9.38451 37.8322 8.91489 35.2689 8.91489 32.686C8.91489 29.9857 9.38451 27.3636 10.3237 24.8199C11.263 22.2761 12.5544 20.0259 14.1981 18.0691C15.8809 16.0733 17.8768 14.4883 20.1857 13.3143C22.5338 12.1402 25.0971 11.5532 27.8757 11.5532C30.0281 11.5532 31.9457 11.788 33.6285 12.2576C35.3113 12.6881 36.7984 13.3143 38.0899 14.1361C39.3813 14.9188 40.4771 15.8776 41.3772 17.0125C42.3164 18.1083 43.1187 19.3214 43.784 20.652L42.6686 21.0042C41.0641 18.0691 39.0095 15.9559 36.5049 14.6644C34.0003 13.373 31.1239 12.7272 27.8757 12.7272C25.1362 12.7272 22.6708 13.3143 20.4792 14.4883C18.2877 15.6232 16.4092 17.1299 14.8438 19.0084C13.3176 20.8868 12.1435 23.0197 11.3217 25.4069C10.4999 27.7941 10.0889 30.2205 10.0889 32.686C10.0889 35.308 10.5586 37.8322 11.4978 40.2585C12.4762 42.6457 13.8067 44.759 15.4895 46.5984C17.1723 48.4377 19.1291 49.9052 21.3597 51.001C23.5904 52.0968 25.9972 52.6447 28.5801 52.6447C31.3195 52.6447 33.922 52.0185 36.3875 50.7662C38.853 49.5139 41.2598 47.518 43.6079 44.7786V35.2979H33.8046V33.9787L44.5319 33.9787V59.0426H43.6079V46.4223Z"
			/>
		</svg>
	);

	return (
		<div className="relative">
			<div className="relative pt-6 pb-12 sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32">
				<div className="max-w-screen-xl mx-auto px-4 sm:px-6">
					<nav className="relative flex items-center justify-between sm:h-10 md:justify-center">
						<div className="flex items-center flex-1 md:absolute md:inset-y-0 md:left-0">
							<div className="flex items-center justify-between w-full md:w-auto">
								<Link href="/">
									<a>{Logo}</a>
								</Link>
								<div className="-mr-2 flex items-center md:hidden">
									<button
										type="button"
										className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-gray-100 hover:bg-gray-800 focus:outline-none focus:bg-gray-800 focus:text-gray-100 transition duration-150 ease-in-out"
										onClick={() => {
											setShowMenu(true);
										}}
									>
										<svg
											className="h-6 w-6"
											fill="none"
											viewBox="0 0 448 512"
										>
											<path
												fill="currentColor"
												d="M442 114H6a6 6 0 0 1-6-6V84a6 6 0 0 1 6-6h436a6 6 0 0 1 6 6v24a6 6 0 0 1-6 6zm0 160H6a6 6 0 0 1-6-6v-24a6 6 0 0 1 6-6h436a6 6 0 0 1 6 6v24a6 6 0 0 1-6 6zm0 160H6a6 6 0 0 1-6-6v-24a6 6 0 0 1 6-6h436a6 6 0 0 1 6 6v24a6 6 0 0 1-6 6z"
											/>
										</svg>
									</button>
								</div>
							</div>
						</div>
						<div className="hidden md:absolute md:flex md:items-center md:justify-end md:inset-y-0 md:right-0">
							<a
								href="#"
								className="relative nav-link py-2 text-white text-sm uppercase tracking-24"
							>
								Blog
							</a>

							<a
								href="#"
								className="relative nav-link ml-10 py-2 text-white text-sm uppercase tracking-24"
							>
								Projects
							</a>

							<a
								href="#"
								className="relative nav-link ml-10 py-2 text-white text-sm uppercase tracking-24"
							>
								Skills
							</a>

							<a
								href="#"
								className="relative nav-link ml-10 py-2 text-white text-sm uppercase tracking-24"
							>
								English
							</a>

							<a
								href="#"
								className="ml-10 py-2 px-4 border-2 border-white text-white uppercase text-sm tracking-24 bg-transparent hover:bg-white hover:text-gray-900 transition duration-150 ease-in-out"
							>
								Contact me
							</a>
						</div>
					</nav>
				</div>

				<Transition
					show={showMenu}
					enter="transition ease-out duration-100 transform"
					enterFrom="opacity-0 scale-95"
					enterTo="opacity-100 scale-100"
					leave="transition ease-in duration-75 transform"
					leaveFrom="opacity-100 scale-100"
					leaveTo="opacity-0 scale-95"
				>
					<div className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
						<div className="shadow-lg">
							<div className="bg-dark-card-gradient shadow-xs overflow-hidden">
								<div className="px-5 pt-4 flex items-center justify-between">
									<div>{Logo}</div>
									<div className="-mr-2">
										<button
											type="button"
											className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-gray-100 hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-gray-100 transition duration-150 ease-in-out"
											onClick={() => {
												setShowMenu(false);
											}}
										>
											<svg
												className="h-6 w-6"
												stroke="currentColor"
												fill="none"
												viewBox="0 0 24 24"
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth="2"
													d="M6 18L18 6M6 6l12 12"
												/>
											</svg>
										</button>
									</div>
								</div>
								<div className="px-2 pt-4 pb-3">
									<a
										href="#"
										className="block px-3 py-2 text-base uppercase text-white tracking-24 hover:text-gray-100 hover:bg-gray-800 hover:bg-opacity-25 focus:outline-none focus:text-gray-100 focus:bg-gray-800 focus:bg-opacity-25 transition duration-150 ease-in-out"
									>
										Blog
									</a>

									<a
										href="#"
										className="block px-3 py-2 text-base uppercase text-white tracking-24 hover:text-gray-100 hover:bg-gray-800 hover:bg-opacity-25 focus:outline-none focus:text-gray-100 focus:bg-gray-800 focus:bg-opacity-25 transition duration-150 ease-in-out"
									>
										Projects
									</a>

									<a
										href="#"
										className="block px-3 py-2 text-base uppercase text-white tracking-24 hover:text-gray-100 hover:bg-gray-800 hover:bg-opacity-25 focus:outline-none focus:text-gray-100 focus:bg-gray-800 focus:bg-opacity-25 transition duration-150 ease-in-out"
									>
										Skills
									</a>

									<a
										href="#"
										className="block px-3 py-2 text-base uppercase text-white tracking-24 hover:text-gray-100 hover:bg-gray-800 hover:bg-opacity-25 focus:outline-none focus:text-gray-100 focus:bg-gray-800 focus:bg-opacity-25 transition duration-150 ease-in-out"
									>
										English
									</a>

									<a
										href="#"
										className="block mt-8 px-3 py-2 text-base uppercase text-center text-white tracking-24 border-2 border-white hover:text-gray-900 hover:bg-white focus:outline-none focus:text-gray-900 focus:bg-white transition duration-150 ease-in-out"
									>
										Contact me
									</a>
								</div>
							</div>
						</div>
					</div>
				</Transition>
			</div>
		</div>
	);
}
