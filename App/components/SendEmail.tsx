// send-email.js
import * as qs from 'qs';
import { Linking } from 'react-native';

export default async function sendEmail(to: any, subject = {}) {
	let url = `mailto:${to}`;

	// Create email link query
	const query = qs.stringify({
		subject: subject,
		cc: to,
	});

	if (query.length) {
		url += `?${query}`;
	}

	// check if we can use this link
	const canOpen = await Linking.canOpenURL(url);

	if (!canOpen) {
		throw new Error('Provided URL can not be handled');
	}

	return Linking.openURL(url);
}
