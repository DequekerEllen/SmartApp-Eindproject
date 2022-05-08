import { useIsFocused, useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { View, FlatList, StyleSheet, Text, StatusBar, ScrollView, RefreshControl } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Card from '../../components/Card';
import SmallCard from '../../components/SmallCard';
import Dog from '../../interfaces/Dog';
import Shelter from '../../interfaces/Shelter';
import card from '../../styles/card';
import generic from '../../styles/generic';

export default ({ navigation }: { navigation: any }) => {
	const nav = useNavigation();
	const isFocused = useIsFocused();

	useEffect(() => {
		nav?.getParent()?.setOptions({ title: 'Explore' });
	}, [isFocused]);

	const [isLoading, setLoading] = useState(false);
	const [dogData, setDogData] = useState([]);
	const [shelterData, setShelterData] = useState([]);
	const [refreshing, setRefreshing] = useState(false);

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
		// setLoading(true);
		getDogData();
		getShelterData();
	}, []);

	const Dogs: Dog[] = dogData;

	const Shelters: Shelter[] = shelterData;

	const onRefresh = () => {
		console.log('refreshing');
		getDogData();
	};

	const renderDog = ({ item }: { item: Dog }) => <Card dog={item} key={item.dogId} navigation={navigation} />;
	const renderShelter = ({ item }: { item: Shelter }) => <SmallCard shelter={item} key={item.shelterId} navigation={navigation} />;

	return (
		<SafeAreaView style={{ backgroundColor: '#FEFBE7' }}>
			{/* <SearchBar /> */}
			<ScrollView>
				<Text style={generic.interTitle}>Shelters</Text>
				<ScrollView horizontal={true} style={card.smallCardsContainer}>
					<FlatList horizontal data={Shelters} renderItem={renderShelter} keyExtractor={(item) => item.shelterId} />
				</ScrollView>
				<Text style={generic.interTitle}>Available Dogs</Text>
				<FlatList refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />} data={Dogs} renderItem={renderDog} keyExtractor={(item) => item.dogId} />
			</ScrollView>
		</SafeAreaView>
	);
};
