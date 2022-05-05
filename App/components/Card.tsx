import { ImageBackground, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Dog from '../interfaces/Dog';
import { LinearGradient } from 'expo-linear-gradient';
import React, { useCallback, useEffect, useRef } from 'react';
import LottieView from 'lottie-react-native';
import { useState } from 'react';
import { useFocusEffect } from '@react-navigation/native';

export default ({ dog, navigation }: { dog: Dog; navigation: any }) => {
	const [isFavorite, setIsFavorite] = useState<boolean>(dog.isFavorite);
	const animation = useRef(null);
	const firstRun = useRef(true);

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
							console.log('--------------------------');
							dog = json;
							setIsFavorite(dog.isFavorite);
							console.log(dog.name, dog.isFavorite);
						});
				} catch (e) {
					console.log(e);
				}
			};

			fetchDog();
		}, [dog.dogId])
	);

	const pressHeart = () => {
		let dogFavorite = dog;
		dogFavorite.isFavorite == true ? (dogFavorite.isFavorite = false) : (dogFavorite.isFavorite = true);
		updateDog();
	};

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
		<TouchableOpacity style={styles.container} onPress={() => navigation.navigate('Detail', { payload: dog })}>
			<ImageBackground source={{ uri: dog.imgUrl }} resizeMode="cover" style={styles.image}>
				<View style={styles.heartContainer}>
					<Pressable onPressIn={pressHeart}>
						<LottieView ref={animation} style={{ width: 75, height: 75 }} source={require('../heart.json')} autoPlay={false} loop={false} />
						{/* <Ionicons style={styles.heart} color={'red'} name={dog.isFavorite == true ? 'heart' : 'heart-outline'} size={32} /> */}
					</Pressable>
				</View>
				<LinearGradient colors={['transparent', '#000000CC']} locations={[0, 0.8]} style={styles.linearGradient}>
					<Text style={styles.name}>{dog.name}</Text>
					<Text style={styles.info}>{dog.breed}</Text>
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
