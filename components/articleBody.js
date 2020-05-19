import React from 'react';

export default function ArticleBody({ content }) {
	return (
		<article
			className="max-w-2xl mx-auto py-10 px-4 markdown"
			dangerouslySetInnerHTML={{ __html: content }}
		/>
	);
}
