import { useFocusEffect, useIsFocused, useNavigation } from '@react-navigation/native';
import { useCallback, useEffect, useRef, useState } from 'react';
import { ImageBackground, StyleSheet, Text, View, ScrollView, Pressable, Share } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import Dog from '../../interfaces/Dog';
import YoutubeIframe from 'react-native-youtube-iframe';
import { LinearGradient } from 'expo-linear-gradient';
import Shelter from '../../interfaces/Shelter';
import sendEmail from '../../components/SendEmail';
import card from '../../styles/card';
import LottieView from 'lottie-react-native';

export default ({ route, navigation }: { route: any; navigation: any }) => {
	const { payload } = route.params;
	let dog: Dog = payload;

	const [isLoading, setLoading] = useState(false);
	const [shelterData, setShelterData] = useState<Shelter>();
	const [age, setAge] = useState<number>();
	const [isFavorite, setIsFavorite] = useState<boolean>(dog.isFavorite);

	const nav = useNavigation();
	const isFocused = useIsFocused();

	const animation = useRef(null);
	const firstRun = useRef(true);

	useEffect(() => {
		nav.setOptions({ title: dog.name });
	}, [isFocused]);

	const getDogAge = () => {
		fetch(`http://192.168.1.5:3000/dog/age/${dog.dogId}`, {
			method: 'GET',
			headers: {
				Accept: 'application/json',
			},
		})
			.then((response) => response.json())
			.then((json) => setAge(json))
			.catch((error) => console.error(error))
			.finally(() => setLoading(false));
	};

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

	const email = () => {
		sendEmail('ellen.dequeker@student.howest.be', `Shedule a visit for ${dog.name}`).then(() => {
			console.log('Your message was successfully sent!');
		});
	};

	const description = () => {
		let desArray = dog.description.split(';');
		let descriptionPartOne = desArray[0];
		let descriptionPartTwo = desArray[1];
		return { descriptionPartOne, descriptionPartTwo };
	};

	const pressHeart = () => {
		let dogFavorite = dog;
		dogFavorite.isFavorite == true ? (dogFavorite.isFavorite = false) : (dogFavorite.isFavorite = true);
		updateDog();
	};

	const updateDog = () => {
		setIsFavorite(dog.isFavorite);
		fetch('http://192.168.1.5:3000/dog', {
			method: 'PUT',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				DogId: dog.dogId,
				Name: dog.name,
				Breed: dog.breed,
				Gender: dog.gender,
				DateOfBirth: dog.dateOfBirth,
				ImgUrl: dog.imgUrl,
				VideoUrl: dog.videoUrl,
				Description: dog.description,
				IsFavorite: dog.isFavorite,
			}),
		});
	};

	useFocusEffect(
		useCallback(() => {
			const fetchDog = () => {
				try {
					fetch(`http://192.168.1.5:3000/dog/${dog.dogId}`, {
						method: 'GET',
						headers: {
							Accept: 'application/json',
						},
					})
						.then((response) => response.json())
						.then((json) => {
							// console.log('--------------------------');
							dog = json;
							setIsFavorite(dog.isFavorite);
							// console.log(dog.name, dog.isFavorite);
						});
				} catch (e) {
					console.log(e);
				}
			};
			fetchDog();
		}, [dog.dogId])
	);

	useEffect(() => {
		setLoading(true);
		getDogAge();
		getShelterData();
		description();
	}, []);

	useEffect(() => {
		if (firstRun.current) {
			if (isFavorite) {
				//@ts-ignore
				animation.current.play(75, 75);
			} else {
				//@ts-ignore
				animation.current.play(0, 0);
			}
			firstRun.current = false;
		} else if (isFavorite) {
			//@ts-ignore
			animation.current.play(0, 75);
		} else {
			//@ts-ignore
			animation.current.play(75, 0);
		}
	}, [isFavorite]);

	return (
		<ScrollView style={styles.container}>
			<View style={styles.headerContainer}>
				<ImageBackground style={styles.image} resizeMode="cover" source={{ uri: dog.imgUrl }}>
					<View style={card.heartContainer}>
						<Pressable onPressIn={pressHeart}>
							<LottieView ref={animation} style={card.heart} source={require('../../heart.json')} autoPlay={false} loop={false} />
							{/* <Ionicons style={styles.heart} color={'red'} name={dog.isFavorite == true ? 'heart' : 'heart-outline'} size={32} /> */}
						</Pressable>
					</View>
					<LinearGradient colors={['transparent', '#000000CC']} locations={[0, 0.7]} style={styles.linearGradient}>
						<Text style={styles.text}>{dog.name}</Text>
						<Text style={styles.text}>
							{dog.breed}, {age} years
						</Text>
					</LinearGradient>
				</ImageBackground>
				<View style={styles.actionsContainer}>
					<Pressable onPress={share} style={styles.actionGroup}>
						<Ionicons name="share-social" size={28} color={'#1a1a1a'} />
						<Text style={{ fontSize: 12 }}>Share</Text>
					</Pressable>
					<Pressable onPress={email} style={styles.actionGroup}>
						<Ionicons name="today" size={28} color={'#1a1a1a'} />
						<Text style={{ fontSize: 12 }}>Schedule visit</Text>
					</Pressable>
					<Pressable style={styles.actionGroup} onPress={() => navigation.navigate('ShelterDetail', { payload: shelterData })}>
						<Ionicons name="navigate-circle" size={28} color={'#1a1a1a'} />
						<Text style={{ fontSize: 12 }}>Location</Text>
					</Pressable>
				</View>
			</View>
			<View>
				<Text style={styles.interTitle}>STORY</Text>
				<Text style={styles.textBlock}>{description().descriptionPartOne}</Text>
			</View>
			<View style={styles.videoContainer}>
				<YoutubeIframe videoId={dog.videoUrl} height={300} />
			</View>
			<View>
				<Text style={styles.textBlock}>{description().descriptionPartTwo}</Text>
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
							<ImageBackground style={styles.infoIcon} source={{ uri: 'https://img.freepik.com/free-vector/mobile-tracking-soft-abstract-concept-illustration_335657-3871.jpg?t=st=1651749465~exp=1651750065~hmac=2540c2ba6428f74eea972fed21b9006d61f9fea3ed0d18df1fba887db555cecc&w=900' }} />
						</View>
						<View style={styles.infoTextContainer}>
							<Text style={styles.infoText}>{shelterData?.name}</Text>
							<Text style={styles.interTitle}>{shelterData?.location}</Text>
						</View>
					</View>
					<View style={styles.interTitleContainer}>
						<View style={styles.infoIconContainer}>
							<ImageBackground style={styles.infoIcon} source={{ uri: 'https://img.freepik.com/free-vector/staying-touch-modern-communication-means-phone-calls-letters-emails-person-contacting-friends-customers-via-email-encouraging-feedback_335657-813.jpg?t=st=1651749465~exp=1651750065~hmac=91528b0c959dd4ed4cbf0f06fe2d758b7e53163f17c3d4049f3f014fa6f60310&w=900' }} />
						</View>
						<View style={styles.infoTextContainer}>
							<Text style={styles.infoText}>{shelterData?.phoneNumber}</Text>
						</View>
					</View>
					<View style={styles.interTitleContainer}>
						<View style={styles.infoIconContainer}>
							<ImageBackground style={styles.infoIcon} source={{ uri: 'https://img.freepik.com/free-vector/www-concept-illustration_114360-2143.jpg?t=st=1651749567~exp=1651750167~hmac=2c868eb33200831ca908e588598e1f24f31ea9146106e4a1f87346daf14eb07f&w=900' }} />
						</View>
						<View style={styles.infoTextContainer}>
							<Text style={styles.infoText}>{shelterData?.site}</Text>
						</View>
					</View>
				</View>
			</View>
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	container: {
		overflow: 'hidden',
		backgroundColor: '#FEFBE7',
	},
	headerContainer: {
		height: 400,
	},
	infoBar: {
		marginHorizontal: 20,
	},
	infoIconContainer: {
		marginBottom: -10,
		width: '20%',
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
		backgroundColor: '#F8ECD1',
		//shadow
		shadowColor: '#555',
		shadowRadius: 10,
		elevation: 6,
		//
		borderRadius: 50,
		marginTop: -50,
		marginBottom: 35,
	},
	actionGroup: {
		alignItems: 'center',
	},
	interTitle: {
		color: '#AC7D88',
		opacity: 0.7,
		fontSize: 12,
		paddingLeft: 20,
		lineHeight: 16,
	},
	interTitleContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginRight: 20,
		alignItems: 'center',
		marginBottom: 10,
		marginTop: 25,
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
		marginBottom: 5,
		marginTop: 5,
	},
	videoContainer: {
		height: 200,
		marginVertical: 10,
	},
});
