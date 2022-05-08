import { ImageBackground, Text, View } from 'react-native';
import Shelter from '../interfaces/Shelter';
import generic from '../styles/generic';

export default ({ shelter }: { shelter: Shelter }) => {
	return (
		<View style={generic.infoBar}>
			<View style={generic.interTitleContainer}>
				<View style={generic.infoIconContainer}>
					<ImageBackground style={generic.infoIcon} source={{ uri: 'https://img.freepik.com/free-vector/mobile-tracking-soft-abstract-concept-illustration_335657-3871.jpg?t=st=1651749465~exp=1651750065~hmac=2540c2ba6428f74eea972fed21b9006d61f9fea3ed0d18df1fba887db555cecc&w=900' }} />
				</View>
				<View style={generic.infoTextContainer}>
					<Text style={generic.infoText}>{shelter.name}</Text>
					<Text style={generic.interTitle}>{shelter.location}</Text>
				</View>
			</View>
			<View style={generic.interTitleContainer}>
				<View style={generic.infoIconContainer}>
					<ImageBackground style={generic.infoIcon} source={{ uri: 'https://img.freepik.com/free-vector/staying-touch-modern-communication-means-phone-calls-letters-emails-person-contacting-friends-customers-via-email-encouraging-feedback_335657-813.jpg?t=st=1651749465~exp=1651750065~hmac=91528b0c959dd4ed4cbf0f06fe2d758b7e53163f17c3d4049f3f014fa6f60310&w=900' }} />
				</View>
				<View style={generic.infoTextContainer}>
					<Text style={generic.infoText}>{shelter.phoneNumber}</Text>
				</View>
			</View>
			<View style={generic.interTitleContainer}>
				<View style={generic.infoIconContainer}>
					<ImageBackground style={generic.infoIcon} source={{ uri: 'https://img.freepik.com/free-vector/www-concept-illustration_114360-2143.jpg?t=st=1651749567~exp=1651750167~hmac=2c868eb33200831ca908e588598e1f24f31ea9146106e4a1f87346daf14eb07f&w=900' }} />
				</View>
				<View style={generic.infoTextContainer}>
					<Text style={generic.infoText}>{shelter.site}</Text>
				</View>
			</View>
		</View>
	);
};
