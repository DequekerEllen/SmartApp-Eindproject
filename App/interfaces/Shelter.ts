import Dog from './Dog';

export default interface visitingHours {
	monday: string;
	tuesday: string;
	wednesday: string;
	thursday: string;
	friday: string;
	saturday: string;
	sunday: string;
}
export default interface Shelter {
	description: string;
	dogs: Dog[];
	imgUrl: string;
	location: string;
	name: string;
	phoneNumber: string;
	shelterId: string;
	site: string;
	visitingHours: visitingHours;
}
