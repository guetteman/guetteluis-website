import React from 'react';
import Meta from '../components/meta';
import Head from 'next/head';
import { APP_NAME, HOME_OG_IMAGE_URL } from '../lib/constants';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import { SKILLS } from '../_skills/skills';
import SkillsGrid from '../components/skills/skillsGrid';
import Layout from '../components/layout';

export default function Skills({ skills }) {
	return (
		<Layout>
			<Meta />
			<Head>
				<title>Skills | {APP_NAME}</title>
				<meta property="og:title" content={APP_NAME} />
				<meta
					property="og:description"
					content={`${APP_NAME} skills.`}
				/>
				<meta
					property="og:image"
					content={`${process.env.APP_URL}${HOME_OG_IMAGE_URL}`}
				/>
			</Head>

			<div className="relative overflow-hidden text-white px-2">
				<Navbar />

				<div className="max-w-2xl mx-auto">
					<h1 className="text-center font-light text-3xl leading-relaxed lg:text-5xl">
						<span className="uppercase font-bold tracking-10">
							What are my skills
						</span>
					</h1>

					<p className="mt-10 text-center">
						These are skills that I've been learning over the years.
						My main focus is on web development, but I'm really
						excited about the future and the cross-platform
						development. Also, I've always cared about making good
						UI/UX and this is a skill that I've been learning by
						making different apps in different devices.
					</p>
				</div>

				<SkillsGrid skills={skills} />

				<div className="mt-10 max-w-2xl mx-auto">
					<p className="mt-10 text-center">
						And many more... I've learned that the key is to be
						constantly learning and testing in new projects. That's
						the way you connect dots, create new things, and learn
						more.
					</p>
				</div>

				<Footer />
			</div>
		</Layout>
	);
}

export async function getStaticProps({ params }) {
	return {
		props: {
			skills: SKILLS,
		},
	};
}
