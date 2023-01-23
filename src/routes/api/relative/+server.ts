import { json } from '@sveltejs/kit';

/** @type {import('./$types').RequestHandler} */
export async function GET({ fetch }) {
	let data = '';

	try {
		({ data } = await (await fetch('/api/root')).json());
	} catch (e) {
		return new Response(e.toString(), {
			status: 500
		});
	}

	return json({
		originalData: data,
		newData: 'This data was added by the second API call.'
	});
}
