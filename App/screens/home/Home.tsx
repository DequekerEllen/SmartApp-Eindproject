import { useIsFocused, useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';
import { FlatList, ScrollView, SectionList, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Card from '../../components/Card';
import SearchBar from '../../components/SearchBar';
import SmallCard from '../../components/SmallCard';
import Dog from '../../interfaces/Dog';

export default ({ navigation }: { navigation: any }) => {
	const nav = useNavigation();
	const isFocused = useIsFocused();

	useEffect(() => {
		nav?.getParent()?.setOptions({ title: 'Explore' });
	}, [isFocused]);
	const testUsers: Dog[] = [
		{
			id: '1',
			firstName: 'Sky',
			profilePic: 'https://images.unsplash.com/photo-1552053831-71594a27632d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=662&q=80',
			location: 'Bredene',
			shelter: 'Kortrijk',
			isFavorite: true,
		},
		{
			id: '2',
			firstName: 'Aram',
			profilePic: 'https://images.unsplash.com/photo-1588943211346-0908a1fb0b01?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80',
			location: 'Bredene',
			shelter: 'Kortrijk',
			isFavorite: true,
		},
		{
			id: '3',
			firstName: 'ram',
			profilePic: 'https://images.unsplash.com/photo-1588943211346-0908a1fb0b01?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80',
			location: 'Bredene',
			shelter: 'Kortrijk',
			isFavorite: false,
		},
		{
			id: '4',
			firstName: 'Ara',
			profilePic: 'https://images.unsplash.com/photo-1588943211346-0908a1fb0b01?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80',
			location: 'Bredene',
			shelter: 'Kortrijk',
			isFavorite: false,
		},
	];
	const renderDog = ({ item }: { item: Dog }) => <Card dog={item} key={item.id} navigation={navigation} />;
	const renderDogSmall = ({ item }: { item: Dog }) => <SmallCard dog={item} key={item.id} navigation={navigation} />;
	return (
		<SafeAreaView>
			<SearchBar />
			<ScrollView>
				<ScrollView horizontal={true}>
					<FlatList horizontal nestedScrollEnabled data={testUsers} renderItem={renderDogSmall} />
				</ScrollView>
				<FlatList nestedScrollEnabled data={testUsers} renderItem={renderDog} keyExtractor={(item) => item.id} />
			</ScrollView>
		</SafeAreaView>
	);
};
