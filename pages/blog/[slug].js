import { getPostBySlug, getPosts } from '../../lib/api/post';
import markdownToHtml from '../../lib/markdownToHTML';
import React, { useEffect } from 'react';
import Navbar from '../../components/navbar';
import DateFormatter from '../../components/dateFormatter';
import Footer from '../../components/footer';
import Head from 'next/head';
import { APP_NAME, HOME_OG_IMAGE_URL } from '../../lib/constants';
import Meta from '../../components/meta';
import ArticleBody from '../../components/articleBody';
import Layout from '../../components/layout';
const Prism = require('../../lib/prism');

export default function Post({ post }) {
	useEffect(() => {
		Prism.highlightAll();
	}, []);

	function getImageLink() {
		if (post.ogImage.url.includes('https://')) {
			return post.ogImage.url;
		}
		return `${process.env.APP_URL}${post.ogImage.url}`;
	}

	return (
		<Layout>
			<Meta />
			<Head>
				<title>
					{post.title} | {APP_NAME} Blog
				</title>
				<meta property="og:image" content={getImageLink()} />
				<meta property="og:title" content={post.title} />
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
						className="max-w-screen-lg mx-auto mt-4 w-full sm:mt-10"
						src={post.headerImage}
						alt={post.imageAlt}
					/>
				</header>

				<ArticleBody content={post.content} />

				<Footer />
			</div>
		</Layout>
	);
}

export async function getStaticProps({ params }) {
	const post = getPostBySlug(params.slug, [
		'title',
		'date',
		'slug',
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
