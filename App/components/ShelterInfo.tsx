import Shelter from '../interfaces/Shelter';
import { FlatList, Text, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import VisitingHours from './VisitingHours';
import ShelterContact from './ShelterContact';
import { useEffect, useState } from 'react';
import Dog from '../interfaces/Dog';
import Card from './Card';
import EmptyComponent from './EmptyComponent';

export default ({ value, shelter, navigation }: { value: string; shelter: Shelter; navigation: any }) => {
	const shelterLocation = {
		latitude: shelter.latitude,
		longitude: shelter.longitude,
		latitudeDelta: 0.01,
		longitudeDelta: 0.01,
	};
	if (value == 'visit') {
		return (
			<View>
				<ShelterContact shelter={shelter} />
				<MapView
					style={{ height: 200 }}
					initialRegion={{
						latitude: 51.0017181,
						longitude: 3.9425546,
						latitudeDelta: 0.8122,
						longitudeDelta: 0.0421,
					}}
				>
					<Marker coordinate={shelterLocation} />
				</MapView>
				<VisitingHours shelter={shelter} />
			</View>
		);
	} else if (value == 'story') {
		return (
			<View style={{ marginHorizontal: 20, marginBottom: 20 }}>
				<Text style={{ lineHeight: 20 }}>{shelter.description}</Text>
			</View>
		);
	} else if (value == 'pets') {
		const [dogData, setDogData] = useState([]);
		const [isLoading, setLoading] = useState(false);

		const getDogData = () => {
			fetch(`http://192.168.1.5:3000/dogs/${shelter.shelterId}`, {
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
		useEffect(() => {
			setLoading(true);
			getDogData();
			//@ts-ignore
			if (dogData == 'No dogs yet') {
				setDogData([]);
			}
		}, [getDogData]);

		const Dogs: Dog[] = dogData;

		const renderDog = ({ item }: { item: Dog }) => <Card dog={item} key={item.dogId} navigation={navigation} />;
		const _listEmptyComponent = () => {
			return <EmptyComponent text={'No dogs found in this shelter'} />;
		};
		return (
			<View>
				<FlatList ListEmptyComponent={_listEmptyComponent} data={Dogs} renderItem={renderDog} keyExtractor={(item) => item.dogId} />
			</View>
		);
	} else {
		return (
			<View>
				<Text>Visit</Text>
			</View>
		);
	}
};
