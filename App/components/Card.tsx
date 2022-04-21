import { ImageBackground, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Dog from '../interfaces/Dog';
import Ionicons from '@expo/vector-icons/Ionicons';

export default ({ dog, navigation }: { dog: Dog; navigation: any }) => {
	return (
		<TouchableOpacity style={styles.container} onPress={() => navigation.navigate('Detail', { payload: dog })}>
			<ImageBackground source={{ uri: dog.profilePic }} resizeMode="cover" style={styles.image}>
				<Pressable style={styles.heartContainer}>
					<Ionicons style={styles.heart} color={'red'} name={dog.isFavorite == true ? 'heart' : 'heart-outline'} size={32} />
				</Pressable>
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
		width: '95%',
		height: 200,
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
	heartContainer: {
		height: 120,
		alignItems: 'flex-end',
	},
	heart: {
		paddingRight: 20,
	},
});
