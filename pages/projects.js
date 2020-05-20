import React from 'react';
import Meta from '../components/meta';
import Head from 'next/head';
import { APP_NAME } from '../lib/constants';
import Navbar from '../components/navbar';
import DateFormatter from '../components/dateFormatter';
import Link from 'next/link';
import Footer from '../components/footer';
import { getProjects } from '../lib/api/projects';

export default function Projects({ projects, firstProject }) {
	return (
		<>
			<Meta />
			<Head>
				<title>Projects | {APP_NAME}</title>
			</Head>

			<div className="relative overflow-hidden text-white">
				<Navbar />

				<div className="max-w-screen-lg mx-auto">
					<img
						className="h-72 w-full object-cover object-center sm:h-96"
						src={firstProject.headerImage}
						alt={firstProject.imageAlt}
					/>

					<div className="px-4 mt-4 w-full md:w-2/3 md:mt-10 lg:w-1/2 lg:px-0">
						<Link
							href="/projects/[slug]"
							as={`/projects/${firstProject.slug}`}
						>
							<a className="leading-tight text-2xl font-medium hover:underline md:text-4xl">
								{firstProject.title}
							</a>
						</Link>
						<p>
							<DateFormatter dateString={firstProject.date} />
						</p>
					</div>
				</div>

				<div className="mt-10 mx-auto max-w-xl grid grid-cols-1 gap-4 md:max-w-2xl md:grid-cols-2 lg:max-w-4xl lg:grid-cols-3 xl:max-w-screen-xl xl:grid-cols-4">
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
		</>
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

	const firstProject = projects[0];
	projects.shift();

	return {
		props: {
			projects: projects,
			firstProject: firstProject,
		},
	};
}
