import React from 'react';

export default function Error() {
	return (
		<div className="bg-gray-900 h-screen w-screen flex justify-center items-center">
			<h1 className="text-white text-xl md:text-4xl">
				<span className="font-semibold">404</span> |{' '}
				<span className="font-thin">Not Found</span>
			</h1>
		</div>
	);
}
