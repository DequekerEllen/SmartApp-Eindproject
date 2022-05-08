import { LinearGradient } from 'expo-linear-gradient';
import { ImageBackground, Text, TouchableOpacity } from 'react-native';
import Shelter from '../interfaces/Shelter';
import card from '../styles/card';

export default ({ shelter, navigation }: { shelter: Shelter; navigation: any }) => {
	return (
		<TouchableOpacity style={card.smallContainer} onPress={() => navigation.navigate('ShelterDetail', { payload: shelter })}>
			<ImageBackground source={{ uri: shelter.imgUrl }} resizeMode="cover" style={card.image}>
				<LinearGradient colors={['transparent', '#000000CC']} locations={[0, 0.8]} style={card.smallLinearGradient}>
					<Text style={card.name}>{shelter.name}</Text>
					<Text style={card.info}>{shelter.location}</Text>
				</LinearGradient>
			</ImageBackground>
		</TouchableOpacity>
	);
};
