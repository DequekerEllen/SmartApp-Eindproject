import { useIsFocused, useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';
import { ImageBackground, StyleSheet, Text, View, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Shelter from '../../interfaces/Shelter';

export default ({ route }: { route: any }) => {
	const { payload } = route.params;
	const shelter: Shelter = payload;

	const nav = useNavigation();
	const isFocused = useIsFocused();

	useEffect(() => {
		nav.setOptions({ title: shelter.name });
	}, [isFocused]);

	return (
		<ScrollView style={styles.container}>
			<View style={styles.headerContainer}>
				<ImageBackground style={styles.image} resizeMode="cover" source={{ uri: shelter.imgUrl }}>
					<LinearGradient colors={['transparent', '#000000CC']} locations={[0, 0.7]} style={styles.linearGradient}>
						<Text style={styles.text}>{shelter.name}</Text>
						<Text style={styles.text}>{shelter.location}</Text>
					</LinearGradient>
				</ImageBackground>
			</View>
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	container: {
		overflow: 'hidden',
	},
	headerContainer: {
		height: 300,
	},
	image: {
		flex: 1,
		justifyContent: 'flex-end',
	},
	text: {
		color: 'white',
		fontSize: 16,
		paddingLeft: 20,
		lineHeight: 16,
	},
	linearGradient: {
		justifyContent: 'flex-end',
		height: 150,
		paddingBottom: 60,
	},
});
