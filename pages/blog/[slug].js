import { getPostBySlug, getPosts } from '../../lib/api/post';
import markdownToHtml from '../../lib/markdownToHTML';
import React from 'react';

export default function Post({ post }) {
	return <h1>{post.title}</h1>;
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
