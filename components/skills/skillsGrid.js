import React from 'react';

export default function SkillsGrid({ skills }) {
	return (
		<div className="mt-10 mx-auto max-w-xl grid grid-cols-1 gap-8 md:max-w-3xl md:grid-cols-2 lg:max-w-screen-xl lg:grid-cols-3">
			{skills.map((skill) => (
				<div key={skill.name} className="relative flex items-center">
					<div className="absolute w-16 h-16 bg-gray-800 shadow-lg rounded-full">
						<img
							className="h-full p-4 object-contain object-center"
							src={skill.logo}
							alt={skill.logoAlt}
						/>
					</div>

					<div className="ml-8 pl-12 p-4 bg-dark-card-gradient shadow-lg md:h-64">
						<h3 className="font-bold text-lg">{skill.name}</h3>
						<p className="mt-4">{skill.paragraph}</p>

						<div className="relative h-10" />
						<div className="absolute bottom-0 right-0 pb-4 pr-4">
							<a
								href={skill.url}
								target="_blank"
								className="mt-4 p-1 uppercase text-sm text-center tracking-24 border-2 border-white text-white hover:bg-white hover:text-gray-900 focus:bg-white focus:text-gray-900 transition duration-150 ease-in-out"
							>
								More
							</a>
						</div>
					</div>
				</div>
			))}
		</div>
	);
}
