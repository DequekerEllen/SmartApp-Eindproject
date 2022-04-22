import { useIsFocused, useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import Dog from '../../interfaces/Dog';

export default ({ route }: { route: any }) => {
	const { payload } = route.params;
	const dog: Dog = payload;

	const nav = useNavigation();
	const isFocused = useIsFocused();

	useEffect(() => {
		nav?.getParent()?.setOptions({ title: 'Detail' });
	}, [isFocused]);
	
	return (
		<View style={styles.container}>
			<ImageBackground style={styles.image} resizeMode="cover" source={{ uri: dog.profilePic }}>
				<View style={styles.imageText}>
					<Text style={styles.text}>{dog.firstName}</Text>
					<Text style={styles.text}>{'dog.info'}</Text>
				</View>
			</ImageBackground>
			<View style={styles.actionsContainer}>
				<View style={styles.actionGroup}>
					<Ionicons name="share-social" size={30} />
					<Text>Share</Text>
				</View>
				<View style={styles.actionGroup}>
					<Ionicons name="today" size={30} />
					<Text>Schedule visit</Text>
				</View>
				<View style={styles.actionGroup}>
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
		justifyContent: 'space-evenly',
		alignItems: 'center',
		height: 100,
		backgroundColor: 'white',
		// shadowColor: 'grey',
		// shadowOffset: { width: -10, height: -10 },
		// shadowOpacity: 70,
		borderRadius: 50,
		marginTop: -50,
	},
	actionGroup: {
		alignItems: 'center',
	},
	text: {
		color: 'white',
		fontSize: 16,
		lineHeight: 16,
	},
});
