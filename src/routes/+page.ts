import type { PageLoad } from './$types';

interface TestData {
	originalData: string;
	newData: string;
}

// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production
export const prerender = true;

export const load: PageLoad<TestData> = async ({ fetch }) => {
	const stackedData = (await fetch('/api/relative').then((payload) => payload.json())) as TestData;

	return stackedData;
};
