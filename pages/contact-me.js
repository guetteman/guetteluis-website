import React, { useState } from 'react';
import Meta from '../components/meta';
import Head from 'next/head';
import { APP_NAME, HOME_OG_IMAGE_URL } from '../lib/constants';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import Layout from '../components/layout';

export default () => {
	const [status, setStatus] = useState({
		submitted: false,
		submitting: false,
		info: { error: false, msg: null },
	});

	const [inputs, setInputs] = useState({
		email: '',
		message: '',
	});

	const handleResponse = (status, msg) => {
		if (status === 200) {
			setStatus({
				submitted: true,
				submitting: false,
				info: { error: false, msg: msg },
			});
			setInputs({
				email: '',
				message: '',
			});
		} else {
			setStatus({
				info: { error: true, msg: msg },
			});
		}
	};

	const handleOnChange = (e) => {
		e.persist();
		setInputs((prev) => ({
			...prev,
			[e.target.id]: e.target.value,
		}));
		setStatus({
			submitted: false,
			submitting: false,
			info: { error: false, msg: null },
		});
	};

	const handleOnSubmit = async (e) => {
		e.preventDefault();
		setStatus((prevStatus) => ({ ...prevStatus, submitting: true }));
		const res = await fetch('/api/send', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(inputs),
		});
		const text = await res.text();
		handleResponse(res.status, text);
	};

	return (
		<Layout>
			<Meta />
			<Head>
				<title>Contact Me | {APP_NAME}</title>
				<meta property="og:title" content={APP_NAME} />
				<meta
					property="og:description"
					content={`${APP_NAME} - Contact me.`}
				/>
				<meta
					property="og:image"
					content={`${process.env.APP_URL}${HOME_OG_IMAGE_URL}`}
				/>
			</Head>
			<div className="relative overflow-hidden text-white mx-auto max-w-screen-xl">
				<div className="relative z-10">
					<Navbar />
				</div>

				<div
					className="hidden absolute z-0 bg-gray-800 opacity-50 transform lg:block"
					style={{
						height: '400px',
						width: '600px',
					}}
				/>

				<div
					className="hidden absolute z-0 right-0 bg-gray-800 opacity-50 transform translate-y-40 lg:block"
					style={{
						height: '400px',
						width: '600px',
					}}
				/>

				<form
					onSubmit={handleOnSubmit}
					className="relative w-full px-4 mx-auto max-w-lg"
				>
					<h1 className="relative text-center font-light text-3xl leading-relaxed lg:text-5xl">
						<span className="uppercase font-bold tracking-10">
							Contact me
						</span>
					</h1>

					<div className="mt-10">
						<label htmlFor="email">Email</label>
						<input
							className="block w-full p-2 bg-gray-800 border border-white focus:outline-none"
							id="email"
							type="email"
							onChange={handleOnChange}
							required
							placeholder="your@email.com"
							value={inputs.email}
						/>
					</div>
					<div className="mt-10">
						<label htmlFor="message">Message</label>
						<textarea
							className="block w-full p-2 bg-gray-800 border border-white focus:outline-none"
							id="message"
							onChange={handleOnChange}
							required
							rows="10"
							value={inputs.message}
							placeholder="Your message..."
						/>
					</div>
					<button
						className="mt-10 py-2 px-4 border-2 border-white text-white uppercase text-sm tracking-24 bg-transparent hover:bg-white hover:text-gray-900 transition duration-150 ease-in-out"
						type="submit"
						disabled={status.submitting}
					>
						{!status.submitting
							? !status.submitted
								? 'Submit'
								: 'Submitted'
							: 'Submitting...'}
					</button>
					<div className="mt-4">
						{status.info.error && (
							<div className="error">
								Error: {status.info.msg}
							</div>
						)}
						{!status.info.error && status.info.msg && (
							<div className="success">{status.info.msg}</div>
						)}
					</div>
				</form>
				<Footer />
			</div>
		</Layout>
	);
};
