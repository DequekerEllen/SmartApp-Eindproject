import { LinearGradient } from 'expo-linear-gradient';
import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Dog from '../interfaces/Dog';
import Shelter from '../interfaces/Shelter';

export default ({ shelter, navigation }: { shelter: Shelter; navigation: any }) => {
	return (
		<TouchableOpacity style={styles.container} onPress={() => navigation.navigate('Detail', { payload: shelter })}>
			<ImageBackground source={{ uri: shelter.imgUrl }} resizeMode="cover" style={styles.image}>
				<LinearGradient colors={['transparent', '#000000CC']} locations={[0, 0.8]} style={styles.linearGradient}>
					<Text style={styles.name}>{shelter.name}</Text>
					<Text style={styles.info}>{shelter.location}</Text>
				</LinearGradient>
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
	linearGradient: {
		justifyContent: 'flex-end',
		height: 100,
		paddingLeft: 20,
		paddingBottom: 15,
	},
	image: {
		flex: 1,
		justifyContent: 'flex-end',
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
