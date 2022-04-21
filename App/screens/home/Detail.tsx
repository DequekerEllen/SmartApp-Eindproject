import { useIsFocused, useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

export default (/*{ route, navigation }: { route: any; navigation: any }*/) => {
	// const { payload } = route.params;
	const nav = useNavigation();
	const isFocused = useIsFocused();

	useEffect(() => {
		nav?.getParent()?.setOptions({ title: 'Detail' });
	}, [isFocused]);
	return (
		<View style={styles.container}>
			<ImageBackground style={styles.image} resizeMode="cover" source={{ uri: 'https://images.unsplash.com/photo-1588943211346-0908a1fb0b01?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80' }}>
				<View style={styles.imageText}>
					<Text>{'dog.firstName'}</Text>
					<Text>{'dog.info'}</Text>
				</View>
			</ImageBackground>
			<View style={styles.actionsContainer}>
				<View>
					<Ionicons name="share-social" size={30} />
					<Text>Share</Text>
				</View>
				<View>
					<Ionicons name="today" size={30} />
					<Text>Schedule visit</Text>
				</View>
				<View>
					<Ionicons name="navigate-circle" size={30} />
					<Text>Directions</Text>
				</View>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		height: 350,
		overflow: 'hidden',
	},
	image: {
		flex: 1,
		justifyContent: 'flex-end',
	},
	imageText: {
		padding: 15,
		paddingBottom: 60,
		backgroundColor: '#00000073', //Last 2 are opacity value
	},
	actionsContainer: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems: 'center',
		height: 100,
		backgroundColor: 'white',
		// shadowColor: 'grey',
		// shadowOffset: { width: -10, height: -10 },
		// shadowOpacity: 70,
		borderRadius: 50,
		marginTop: -50,
	},
});
