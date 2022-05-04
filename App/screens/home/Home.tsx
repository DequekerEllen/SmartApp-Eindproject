import { useIsFocused, useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { View, FlatList, StyleSheet, Text, StatusBar, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Card from '../../components/Card';
import SearchBar from '../../components/SearchBar';
import SmallCard from '../../components/SmallCard';
import Dog from '../../interfaces/Dog';
import Shelter from '../../interfaces/Shelter';

export default ({ navigation }: { navigation: any }) => {
	const nav = useNavigation();
	const isFocused = useIsFocused();

	useEffect(() => {
		nav?.getParent()?.setOptions({ title: 'Explore' });
	}, [isFocused]);

	const [isLoading, setLoading] = useState(false);
	const [dogData, setDogData] = useState([]);
	const [shelterData, setShelterData] = useState([]);

	const getDogData = () => {
		fetch('http://192.168.1.5:3000/dogs', {
			method: 'GET',
			headers: {
				Accept: 'application/json',
			},
		})
			.then((response) => response.json())
			.then((json) => setDogData(json))
			.catch((error) => console.error(error))
			.finally(() => setLoading(false));
	};
	const getShelterData = () => {
		fetch('http://192.168.1.5:3000/shelters', {
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

	useEffect(() => {
		setLoading(true);
		getDogData();
		getShelterData();
	}, []);

	const Dogs: Dog[] = dogData;
	const Shelters: Shelter[] = shelterData;

	const renderDog = ({ item }: { item: Dog }) => <Card dog={item} key={item.dogId} navigation={navigation} />;
	const renderShelter = ({ item }: { item: Shelter }) => <SmallCard shelter={item} key={item.shelterId} navigation={navigation} />;
	return (
		<SafeAreaView>
			<SearchBar />
			<ScrollView>
				<ScrollView horizontal={true}>
					<FlatList horizontal nestedScrollEnabled data={Shelters} renderItem={renderShelter} />
				</ScrollView>
				<FlatList nestedScrollEnabled data={Dogs} renderItem={renderDog} keyExtractor={(item) => item.dogId} />
			</ScrollView>
		</SafeAreaView>
	);
};
