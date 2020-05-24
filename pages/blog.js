import React from 'react';
import Meta from '../components/meta';
import Head from 'next/head';
import { APP_NAME } from '../lib/constants';
import Navbar from '../components/navbar';
import { getPosts } from '../lib/api/post';
import DateFormatter from '../components/dateFormatter';
import Link from 'next/link';
import Footer from '../components/footer';
import Layout from '../components/layout';

export default function Blog({ posts, firstPost }) {
	return (
		<Layout>
			<Meta />
			<Head>
				<title>Blog | {APP_NAME}</title>
			</Head>

			<div className="relative overflow-hidden text-white">
				<Navbar />

				<div className="max-w-screen-lg mx-auto">
					<h1 className="text-center font-light text-3xl leading-relaxed lg:text-5xl">
						<span className="uppercase font-bold tracking-10">
							My recent thoughts
						</span>
					</h1>

					<img
						className="mt-10 w-full"
						src={firstPost.headerImage}
						alt={firstPost.imageAlt}
					/>

					<div className="px-4 mt-4 w-full md:w-4/5 md:mt-10 lg:px-0">
						<Link
							href="/blog/[slug]"
							as={`/blog/${firstPost.slug}`}
						>
							<a className="leading-tight text-2xl font-medium hover:underline md:text-4xl">
								{firstPost.title}
							</a>
						</Link>
						<p>
							<DateFormatter dateString={firstPost.date} />
						</p>
					</div>
				</div>

				<div className="mt-10 mx-auto max-w-xl grid grid-cols-1 gap-4 md:max-w-2xl md:grid-cols-2 lg:max-w-4xl lg:grid-cols-3 xl:max-w-screen-xl xl:grid-cols-4">
					{posts.map((post) => {
						return (
							<Link
								key={post.slug}
								href="/blog/[slug]"
								as={`/blog/${post.slug}`}
							>
								<a className="relative w-full sm:w-auto sm:p-4">
									<div className="relative h-72 w-72 mx-auto transform hover:scale-105 hover:shadow-xl focus:scale-105 focus:shadow-xl transition duration-300 ease-in-out">
										<img
											className="relative h-72 w-72 object-cover object-center"
											src={post.coverImage}
											alt={post.imageAlt}
										/>
										<div className="absolute inset-0 bg-gray-900 opacity-50" />

										<div className="absolute bottom-0 p-4">
											<DateFormatter
												className="text-sm"
												dateString={post.date}
											/>
											<h3 className="font-bold">
												{post.title}
											</h3>
										</div>
									</div>
								</a>
							</Link>
						);
					})}
				</div>

				<Footer />
			</div>
		</Layout>
	);
}

export async function getStaticProps({ params }) {
	const posts = getPosts([
		'title',
		'date',
		'slug',
		'coverImage',
		'headerImage',
		'imageAlt',
	]);

	const firstPost = posts[0];
	posts.shift();

	return {
		props: {
			posts: posts,
			firstPost: firstPost,
		},
	};
}
