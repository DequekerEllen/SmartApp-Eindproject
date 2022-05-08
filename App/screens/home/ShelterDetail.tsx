import { useIsFocused, useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';
import { ImageBackground, StyleSheet, Text, View, ScrollView, Pressable } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Shelter from '../../interfaces/Shelter';
import Ionicons from '@expo/vector-icons/Ionicons';
import ShelterInfo from '../../components/ShelterInfo';
import { useState } from 'react';
import generic from '../../styles/generic';

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
		<ScrollView style={generic.container}>
			<View style={generic.headerContainer}>
				<ImageBackground style={generic.image} resizeMode="cover" source={{ uri: shelter.imgUrl }}>
					<LinearGradient colors={['transparent', '#000000CC']} locations={[0, 0.7]} style={generic.linearGradient}>
						<Text style={generic.text}>{shelter.name}</Text>
						<Text style={generic.text}>{shelter.location}</Text>
					</LinearGradient>
				</ImageBackground>
				<View style={generic.actionsContainer}>
					<Pressable
						onPress={() => {
							setValue('visit');
							setTextcolorvisit(primaryColor);
							setTextcolorstory('#1a1a1a');
							setTextcolorpets('#1a1a1a');
						}}
						style={generic.actionGroup}
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
						style={generic.actionGroup}
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
						style={generic.actionGroup}
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
