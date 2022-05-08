import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import Shelter from '../interfaces/Shelter';

export default ({ shelter }: { shelter: Shelter }) => {
	return (
		<View style={styles.infoBar}>
			<View style={styles.interTitleContainer}>
				<View style={styles.infoIconContainer}>
					<ImageBackground style={styles.infoIcon} source={{ uri: 'https://img.freepik.com/free-vector/mobile-tracking-soft-abstract-concept-illustration_335657-3871.jpg?t=st=1651749465~exp=1651750065~hmac=2540c2ba6428f74eea972fed21b9006d61f9fea3ed0d18df1fba887db555cecc&w=900' }} />
				</View>
				<View style={styles.infoTextContainer}>
					<Text style={styles.infoText}>{shelter.name}</Text>
					<Text style={styles.interTitle}>{shelter.location}</Text>
				</View>
			</View>
			<View style={styles.interTitleContainer}>
				<View style={styles.infoIconContainer}>
					<ImageBackground style={styles.infoIcon} source={{ uri: 'https://img.freepik.com/free-vector/staying-touch-modern-communication-means-phone-calls-letters-emails-person-contacting-friends-customers-via-email-encouraging-feedback_335657-813.jpg?t=st=1651749465~exp=1651750065~hmac=91528b0c959dd4ed4cbf0f06fe2d758b7e53163f17c3d4049f3f014fa6f60310&w=900' }} />
				</View>
				<View style={styles.infoTextContainer}>
					<Text style={styles.infoText}>{shelter.phoneNumber}</Text>
				</View>
			</View>
			<View style={styles.interTitleContainer}>
				<View style={styles.infoIconContainer}>
					<ImageBackground style={styles.infoIcon} source={{ uri: 'https://img.freepik.com/free-vector/www-concept-illustration_114360-2143.jpg?t=st=1651749567~exp=1651750167~hmac=2c868eb33200831ca908e588598e1f24f31ea9146106e4a1f87346daf14eb07f&w=900' }} />
				</View>
				<View style={styles.infoTextContainer}>
					<Text style={styles.infoText}>{shelter.site}</Text>
				</View>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	infoBar: {
		marginHorizontal: 20,
		marginBottom: 30,
	},
	infoIconContainer: {
		marginBottom: -10,
		width: '15%',
	},
	infoTextContainer: {
		marginBottom: -10,
		width: '75%',
	},
	infoText: {
		fontSize: 16,
		paddingLeft: 20,
	},
	infoIcon: {
		borderRadius: 50,
		overflow: 'hidden',
		width: 70,
		height: 70,
	},

	interTitleContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginRight: 20,
		alignItems: 'center',
		marginBottom: 10,
		marginTop: 25,
	},
	interTitle: {
		color: '#AC7D88',
		fontSize: 12,
		paddingLeft: 20,
		lineHeight: 16,
	},
});
