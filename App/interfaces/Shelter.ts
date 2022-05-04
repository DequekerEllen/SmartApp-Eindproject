import Dog from './Dog';

export default interface Shelter {
	description: string;
	dogs: Dog[];
	imgUrl: string;
	location: string;
	name: string;
	phoneNumber: number;
	shelterId: string;
	site: string;
	visitingHours: string;
}
