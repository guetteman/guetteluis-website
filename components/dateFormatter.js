import { parseISO, format } from 'date-fns';

export default function DateFormatter({ dateString, className }) {
	const date = parseISO(dateString);
	return (
		<time className={className} dateTime={dateString}>
			{format(date, 'LLLL	d, yyyy')}
		</time>
	);
}
