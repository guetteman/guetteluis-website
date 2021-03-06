import React from 'react';
import Meta from '../components/meta';
import Head from 'next/head';
import { APP_NAME, HOME_OG_IMAGE_URL } from '../lib/constants';
import Navbar from '../components/navbar';
import DateFormatter from '../components/dateFormatter';
import Link from 'next/link';
import Footer from '../components/footer';
import { getProjects } from '../lib/api/projects';
import Layout from '../components/layout';

export default function Projects({ projects }) {
	return (
		<Layout>
			<Meta />
			<Head>
				<title>Projects | {APP_NAME}</title>
				<meta property="og:title" content={APP_NAME} />
				<meta
					property="og:description"
					content={`${APP_NAME} projects.`}
				/>
				<meta
					property="og:image"
					content={`${process.env.APP_URL}${HOME_OG_IMAGE_URL}`}
				/>
			</Head>

			<div className="relative overflow-hidden text-white">
				<div className="relative z-10">
					<Navbar />
				</div>

				<div className="relative max-w-screen-lg mx-auto">
					<h1 className="text-center font-light text-3xl leading-relaxed lg:text-5xl">
						<span className="uppercase font-bold tracking-10">
							My latest projects
						</span>
					</h1>
				</div>

				<div className="relative mt-10 mx-auto max-w-xl grid grid-cols-1 gap-4 md:max-w-2xl md:grid-cols-2 lg:max-w-4xl lg:grid-cols-3 xl:max-w-screen-xl xl:grid-cols-4">
					{projects.map((project) => {
						return (
							<Link
								key={project.slug}
								href="/projects/[slug]"
								as={`/projects/${project.slug}`}
							>
								<a className="relative w-full sm:w-auto sm:p-4">
									<div className="relative h-72 w-72 mx-auto transform hover:scale-105 hover:shadow-xl focus:scale-105 focus:shadow-xl transition duration-300 ease-in-out">
										<img
											className="relative h-72 w-72 object-cover object-center"
											src={project.coverImage}
											alt={project.imageAlt}
										/>
										<div className="absolute inset-0 bg-gray-900 opacity-50" />

										<div className="absolute bottom-0 p-4">
											<DateFormatter
												className="text-sm"
												dateString={project.date}
											/>
											<h3 className="font-bold">
												{project.title}
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
	const projects = getProjects([
		'title',
		'date',
		'slug',
		'coverImage',
		'headerImage',
		'imageAlt',
	]);

	return {
		props: {
			projects: projects,
		},
	};
}
