import * as React from 'react';
import DateFormatter from '../dateFormatter';
import Link from 'next/link';

export default function LatestPosts({ posts }) {
	return (
		<>
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
									<h3 className="font-bold">{post.title}</h3>
								</div>
							</div>
						</a>
					</Link>
				);
			})}
		</>
	);
}
