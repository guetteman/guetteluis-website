import markdownToHtml from '../../lib/markdownToHTML';
import React, { useEffect } from 'react';
import Navbar from '../../components/navbar';
import DateFormatter from '../../components/dateFormatter';
import Footer from '../../components/footer';
import Head from 'next/head';
import { APP_NAME, HOME_OG_IMAGE_URL } from '../../lib/constants';
import Meta from '../../components/meta';
import ArticleBody from '../../components/articleBody';
import { getProjectBySlug, getProjects } from '../../lib/api/projects';
import Layout from '../../components/layout';
const Prism = require('../../lib/prism');

export default function Project({ project }) {
	useEffect(() => {
		Prism.highlightAll();
	}, []);

	return (
		<Layout>
			<Meta />
			<Head>
				<title>
					{project.title} | {APP_NAME} Projects
				</title>
				<meta
					property="og:image"
					content={`${process.env.APP_URL}${project.ogImage.url}`}
				/>
				<meta property="og:title" content={project.title} />
			</Head>

			<div className="relative overflow-hidden text-white">
				<Navbar />

				<header className="max-w-screen-lg mx-auto">
					<div className="max-w-2xl mx-auto px-4">
						<h1 className="leading-tight text-2xl md:text-4xl">
							{project.title}
						</h1>
						<DateFormatter dateString={project.date} />
					</div>

					<img
						className="max-w-screen-lg mx-auto mt-4 w-full sm:mt-10"
						src={project.headerImage}
						alt={project.imageAlt}
					/>
				</header>

				<ArticleBody content={project.content} />

				<Footer />
			</div>
		</Layout>
	);
}

export async function getStaticProps({ params }) {
	const project = getProjectBySlug(params.slug, [
		'title',
		'date',
		'slug',
		'content',
		'ogImage',
		'coverImage',
		'headerImage',
	]);
	const content = await markdownToHtml(project.content || '');

	return {
		props: {
			project: {
				...project,
				content,
			},
		},
	};
}

export async function getStaticPaths() {
	const projects = getProjects(['slug']);

	return {
		paths: projects.map((projects) => {
			return {
				params: {
					slug: projects.slug,
				},
			};
		}),
		fallback: false,
	};
}
