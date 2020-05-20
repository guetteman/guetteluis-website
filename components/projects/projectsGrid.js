import React from 'react';
import Link from 'next/link';

export default function ProjectsGrid({ projects }) {
	return (
		<div className="relative mt-10 mx-auto max-w-md grid grid-cols-1 gap-8 md:max-w-4xl md:grid-cols-2 md:gap-4 lg:max-w-4xl lg:gap-10">
			{projects.map((project) => (
				<div
					key={project.slug}
					className="flex max-w-md bg-dark-card-gradient shadow-lg"
				>
					<img
						className="h-64 w-1/2 object-cover object center"
						src={project.coverImage}
						alt={project.imageAlt}
					/>
					<div className="relative w-1/2 p-4">
						<h3 className="font-bold">{project.title}</h3>
						<p className="text-sm mt-2">{project.excerpt}</p>

						<div className="absolute pb-4 pr-4 bottom-0 right-0">
							<Link
								href="/projects/[slug]"
								as={`/projects/${project.slug}`}
							>
								<a className="mt-4 p-1 uppercase text-sm text-center tracking-24 border-2 border-white text-white hover:bg-white hover:text-gray-900 focus:bg-white focus:text-gray-900 transition duration-150 ease-in-out">
									More
								</a>
							</Link>
						</div>
					</div>
				</div>
			))}
		</div>
	);
}
