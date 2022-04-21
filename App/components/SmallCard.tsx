import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Dog from '../interfaces/Dog';

export default ({ dog, navigation }: { dog: Dog; navigation: any }) => {
	return (
		<TouchableOpacity style={styles.container}>
			<ImageBackground source={{uri: dog.profilePic}} resizeMode="cover" style={styles.image}>
				<View style={styles.imageText}>
					<Text style={styles.name}>{dog.firstName}</Text>
					<Text style={styles.info}>{dog.shelter}</Text>
				</View>
			</ImageBackground>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	container: {
		width: 125,
		height: 175,
		borderRadius: 20,
		overflow: 'hidden',
		margin: 10,
	},
	image: {
		flex: 1,
		justifyContent: 'flex-end',
	},
	imageText: {
		padding: 15,
		backgroundColor: '#00000073', //Last 2 are opacity value
	},
	name: {
		color: 'white',
		fontSize: 16,
		lineHeight: 16,
	},
	info: {
		color: 'white',
		fontSize: 11,
	},
});
