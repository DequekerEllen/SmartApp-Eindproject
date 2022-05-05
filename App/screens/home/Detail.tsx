import { useIsFocused, useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { ImageBackground, StyleSheet, Text, View, ScrollView, Pressable, Share } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import Dog from '../../interfaces/Dog';
import YoutubeIframe from 'react-native-youtube-iframe';
import { LinearGradient } from 'expo-linear-gradient';
import Shelter from '../../interfaces/Shelter';

export default ({ route, navigation }: { route: any; navigation: any }) => {
	const { payload } = route.params;
	const dog: Dog = payload;

	const nav = useNavigation();
	const isFocused = useIsFocused();

	useEffect(() => {
		nav.setOptions({ title: dog.name });
	}, [isFocused]);

	const [isLoading, setLoading] = useState(false);
	const [shelterData, setShelterData] = useState<Shelter>();

	const getShelterData = () => {
		fetch(`http://192.168.1.5:3000/shelter/${dog.shelterId}`, {
			method: 'GET',
			headers: {
				Accept: 'application/json',
			},
		})
			.then((response) => response.json())
			.then((json) => setShelterData(json))
			.catch((error) => console.error(error))
			.finally(() => setLoading(false));
	};

	const share = async () => {
		const text = `${dog.name} is een ${dog.breed}`;
		const result = await Share.share({
			message: text,
			title: '',
		});
	};

	useEffect(() => {
		setLoading(true);
		getShelterData();
		console.log(shelterData);
	}, []);

	return (
		<ScrollView style={styles.container}>
			<View style={styles.headerContainer}>
				<ImageBackground style={styles.image} resizeMode="cover" source={{ uri: dog.imgUrl }}>
					<LinearGradient colors={['transparent', '#000000CC']} locations={[0, 0.7]} style={styles.linearGradient}>
						<Text style={styles.text}>{dog.name}</Text>
						<Text style={styles.text}>{dog.breed}</Text>
					</LinearGradient>
				</ImageBackground>
				<View style={styles.actionsContainer}>
					<Pressable onPress={share} style={styles.actionGroup}>
						<Ionicons name="share-social" size={30} />
						<Text>Share</Text>
					</Pressable>
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
			<View>
				<Text style={styles.interTitle}>STORY</Text>
				<Text style={styles.textBlock}>{dog.description}</Text>
			</View>
			<View style={styles.videoContainer}>
				<YoutubeIframe videoId={dog.videoUrl} height={300} />
			</View>
			<View>
				<View style={styles.interTitleContainer}>
					<Text style={styles.interTitle}>SHELTER</Text>
					<Pressable onPress={() => navigation.navigate('ShelterDetail', { payload: shelterData })}>
						<Text>View More</Text>
					</Pressable>
				</View>
				<ImageBackground style={{ width: '100%', height: 300 }} source={{ uri: shelterData?.imgUrl }} />
				<View style={styles.infoBar}>
					<View style={styles.interTitleContainer}>
						<View style={styles.infoIconContainer}>
							<ImageBackground style={styles.infoIcon} source={{ uri: 'https://img.freepik.com/free-vector/location_53876-59942.jpg?t=st=1651494407~exp=1651495007~hmac=2ebd1261ccad668f343bb244ccf2f0efedd0ec7df5c11396a6c832394b12cbe5&w=900' }} />
						</View>
						<View>
							<Text>{shelterData?.name}</Text>
							<Text>{shelterData?.location}</Text>
						</View>
						<Ionicons name="arrow-forward-circle" size={30} />
					</View>
					<View style={styles.interTitleContainer}>
						<View style={styles.infoIconContainer}>
							<ImageBackground style={styles.infoIcon} source={{ uri: 'https://img.freepik.com/free-vector/location_53876-59942.jpg?t=st=1651494407~exp=1651495007~hmac=2ebd1261ccad668f343bb244ccf2f0efedd0ec7df5c11396a6c832394b12cbe5&w=900' }} />
						</View>
						<View>
							<Text>{shelterData?.phoneNumber}</Text>
						</View>
					</View>
					<View style={styles.interTitleContainer}>
						<View style={styles.infoIconContainer}>
							<ImageBackground style={styles.infoIcon} source={{ uri: 'https://img.freepik.com/free-vector/location_53876-59942.jpg?t=st=1651494407~exp=1651495007~hmac=2ebd1261ccad668f343bb244ccf2f0efedd0ec7df5c11396a6c832394b12cbe5&w=900' }} />
						</View>
						<View>
							<Text>{shelterData?.site}</Text>
						</View>
					</View>
				</View>
				<Text style={styles.textBlock}>{shelterData?.description}</Text>
			</View>
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	container: {
		overflow: 'hidden',
	},
	headerContainer: {
		height: 400,
	},
	infoBar: {
		marginHorizontal: 20,
	},
	infoIconContainer: {
		borderRadius: 50,
		overflow: 'hidden',
		width: 60,
		height: 60,
	},
	infoIcon: {
		width: '100%',
		height: '100%',
	},
	image: {
		flex: 1,
		justifyContent: 'flex-end',
	},
	linearGradient: {
		justifyContent: 'flex-end',
		height: 150,
		paddingBottom: 60,
	},
	actionsContainer: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-evenly',
		alignItems: 'center',
		height: 100,
		backgroundColor: 'white',
		//shadow
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 3,
		},
		shadowOpacity: 0.27,
		shadowRadius: 4.65,
		elevation: 6,
		//
		borderRadius: 50,
		marginTop: -50,
		marginBottom: 20,
	},
	actionGroup: {
		alignItems: 'center',
	},
	interTitle: {
		color: '#ababab',
		fontSize: 12,
		paddingLeft: 20,
		lineHeight: 16,
	},
	interTitleContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginRight: 20,
		alignItems: 'center',
		marginBottom: 15,
		marginTop: 10,
	},
	text: {
		color: 'white',
		fontSize: 16,
		paddingLeft: 20,
		lineHeight: 16,
	},
	textBlock: {
		color: 'black',
		marginHorizontal: 20,
		lineHeight: 24,
		marginBottom: 10,
	},
	videoContainer: {
		height: 200,
		marginVertical: 10,
	},
});
