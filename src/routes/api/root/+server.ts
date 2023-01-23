import { json } from '@sveltejs/kit';

export function GET() {
	return json({
		data: 'This is the source API data.'
	});
}
