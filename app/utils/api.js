import { getLocalIPAddress } from '@/app/utils/networkUtils';

export const sendRequest = async (endpoint) => {
	try {
		const baseUrl = await getLocalIPAddress();
		await fetch(`${baseUrl}${endpoint}`, {
			method: 'GET',
		});
	} catch (err) {
		console.error('Error:', err);
	}
};
