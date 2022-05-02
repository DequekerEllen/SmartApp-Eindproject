import { ImageBackground, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Dog from '../interfaces/Dog';
import Ionicons from '@expo/vector-icons/Ionicons';
import { GestureResponderEvent } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const heartPressOptions = (dog: Dog) => {
	if (dog.isFavorite == true) {
		dog.isFavorite = false;
	} else {
		dog.isFavorite = true;
	}

	return dog;
};

export default ({ dog, navigation }: { dog: Dog; navigation: any }) => {
	return (
		<TouchableOpacity style={styles.container} onPress={() => navigation.navigate('Detail', { payload: dog })}>
			<ImageBackground source={{ uri: dog.profilePic }} resizeMode="cover" style={styles.image}>
				<View style={styles.heartContainer}>
					<Pressable
						onPress={() => {
							heartPressOptions(dog);
							return dog;
						}}
					>
						<Ionicons style={styles.heart} color={'red'} name={dog.isFavorite == true ? 'heart' : 'heart-outline'} size={32} />
					</Pressable>
				</View>
				<LinearGradient colors={['transparent', '#000000CC']} locations={[0, 0.8]} style={styles.linearGradient}>
					<Text style={styles.name}>{dog.firstName}</Text>
					<Text style={styles.info}>{dog.shelter}</Text>
				</LinearGradient>
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
		textAlign: 'left',
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
	linearGradient: {
		justifyContent: 'flex-end',
		height: 100,
		paddingLeft: 20,
		paddingBottom: 15,
	},
	heartContainer: {
		flex: 1,
		alignItems: 'flex-end',
	},
	heart: {
		paddingRight: 10,
		paddingTop: 10,
	},
});
