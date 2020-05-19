import { getPostBySlug, getPosts } from '../../lib/api/post';
import markdownToHtml from '../../lib/markdownToHTML';
import React, { useEffect } from 'react';
import Navbar from '../../components/navbar';
import DateFormatter from '../../components/dateFormatter';
import Footer from '../../components/footer';
import Head from 'next/head';
import { APP_NAME } from '../../lib/constants';
import Meta from '../../components/meta';
const Prism = require('../../lib/prism');

export default function Post({ post }) {
	useEffect(() => {
		Prism.highlightAll();
	}, []);

	return (
		<>
			<Meta />
			<Head>
				<title>
					{post.title} | {APP_NAME} Blog
				</title>
				<meta property="og:image" content={post.ogImage.url} />
			</Head>

			<div className="relative overflow-hidden text-white">
				<Navbar />

				<header className="max-w-screen-lg mx-auto">
					<div className="max-w-2xl mx-auto px-4">
						<h1 className="leading-tight text-2xl md:text-4xl">
							{post.title}
						</h1>
						<DateFormatter dateString={post.date} />
					</div>

					<img
						className="max-w-screen-lg mx-auto mt-4 h-72 w-full object-cover object-center sm:h-96 sm:mt-10"
						src={post.headerImage}
						alt={post.imageAlt}
					/>
				</header>

				<article
					className="max-w-2xl mx-auto py-10 px-4 markdown"
					dangerouslySetInnerHTML={{ __html: post.content }}
				/>

				<Footer />
			</div>
		</>
	);
}

export async function getStaticProps({ params }) {
	const post = getPostBySlug(params.slug, [
		'title',
		'date',
		'slug',
		'author',
		'content',
		'ogImage',
		'coverImage',
		'headerImage',
	]);
	const content = await markdownToHtml(post.content || '');

	return {
		props: {
			post: {
				...post,
				content,
			},
		},
	};
}

export async function getStaticPaths() {
	const posts = getPosts(['slug']);

	return {
		paths: posts.map((posts) => {
			return {
				params: {
					slug: posts.slug,
				},
			};
		}),
		fallback: false,
	};
}
