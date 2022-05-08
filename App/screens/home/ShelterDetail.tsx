import { useIsFocused, useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';
import { ImageBackground, StyleSheet, Text, View, ScrollView, Pressable } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Shelter from '../../interfaces/Shelter';
import Ionicons from '@expo/vector-icons/Ionicons';
import ShelterInfo from '../../components/ShelterInfo';
import { useState } from 'react';

export default ({ route, navigation }: { route: any; navigation: any }) => {
	const { payload } = route.params;
	const shelter: Shelter = payload;
	const [value, setValue] = useState('visit');

	const primaryColor = '#85586F';

	const [textcolorvisit, setTextcolorvisit] = useState(primaryColor);
	const [textcolorstory, setTextcolorstory] = useState('#1a1a1a');
	const [textcolorpets, setTextcolorpets] = useState('#1a1a1a');
	// let value = 'visit';

	const nav = useNavigation();
	const isFocused = useIsFocused();

	useEffect(() => {
		nav.setOptions({ title: shelter.name });
	}, [isFocused]);

	useEffect(() => {
		// console.log(value);
	}, [value]);

	useEffect(() => {
		// console.log(textcolorvisit);
	}, [textcolorvisit]);

	return (
		<ScrollView style={styles.container}>
			<View style={styles.headerContainer}>
				<ImageBackground style={styles.image} resizeMode="cover" source={{ uri: shelter.imgUrl }}>
					<LinearGradient colors={['transparent', '#000000CC']} locations={[0, 0.7]} style={styles.linearGradient}>
						<Text style={styles.text}>{shelter.name}</Text>
						<Text style={styles.text}>{shelter.location}</Text>
					</LinearGradient>
				</ImageBackground>
				<View style={styles.actionsContainer}>
					<Pressable
						onPress={() => {
							setValue('visit');
							setTextcolorvisit(primaryColor);
							setTextcolorstory('#1a1a1a');
							setTextcolorpets('#1a1a1a');
						}}
						style={styles.actionGroup}
					>
						<Text style={{ color: textcolorvisit }}>Visit</Text>
					</Pressable>
					<Text style={{ color: '#85586F' }}>|</Text>
					<Pressable
						onPress={() => {
							setValue('story');
							setTextcolorstory(primaryColor);
							setTextcolorvisit('#1a1a1a');
							setTextcolorpets('#1a1a1a');
						}}
						style={styles.actionGroup}
					>
						<Text style={{ color: textcolorstory }}>Story</Text>
					</Pressable>
					<Text style={{ color: '#85586F' }}>|</Text>

					<Pressable
						onPress={() => {
							setValue('pets');
							setTextcolorpets(primaryColor);
							setTextcolorvisit('#1a1a1a');
							setTextcolorstory('#1a1a1a');
						}}
						style={styles.actionGroup}
					>
						<Text style={{ color: textcolorpets }}>Pets</Text>
					</Pressable>
				</View>
			</View>
			<View>
				<ShelterInfo navigation={navigation} value={value} shelter={shelter} />
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

	infoBar: {
		marginHorizontal: 20,
	},
	infoIconContainer: {
		marginBottom: -10,
		width: '20%',
	},
	infoTextContainer: {
		marginBottom: -10,
		width: '70%',
	},
	infoText: {
		fontSize: 18,
		paddingLeft: 20,
	},
	infoIcon: {
		borderRadius: 50,
		overflow: 'hidden',
		width: 80,
		height: 80,
	},

	actionsContainer: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-evenly',
		alignItems: 'center',
		height: 75,
		backgroundColor: '#F8ECD1',
		//shadow
		shadowColor: '#555',
		shadowRadius: 10,
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
