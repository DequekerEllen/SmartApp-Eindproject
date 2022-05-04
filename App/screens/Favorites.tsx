import { useIsFocused, useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { FlatList, ScrollView, SectionList, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Card from '../components/Card';
import Dog from '../interfaces/Dog';

export default ({ navigation }: { navigation: any }) => {
	const nav = useNavigation();
	const isFocused = useIsFocused();

	useEffect(() => {
		nav?.getParent()?.setOptions({ title: 'Explore' });
	}, [isFocused]);

	const [isLoading, setLoading] = useState(false);
	const [dogData, setDogData] = useState([]);

	const getDogData = () => {
		fetch('http://192.168.1.5:3000/dogs/favorites', {
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

	// console.log(dogData);

	useEffect(() => {
		setLoading(true);
		getDogData();
	}, [getDogData]);

	const testUsers: Dog[] = dogData;

	const renderDog = ({ item }: { item: Dog }) => <Card dog={item} key={item.dogId} navigation={navigation} />;
	return (
		<SafeAreaView>
			<ScrollView>
				<FlatList nestedScrollEnabled data={testUsers} renderItem={renderDog} keyExtractor={(item) => item.dogId} />
			</ScrollView>
		</SafeAreaView>
	);
};
