import Shelter from '../interfaces/Shelter';
import { Text, View } from 'react-native';
import generic from '../styles/generic';

export default ({ shelter }: { shelter: Shelter }) => {
	const shelterLocation = {
		latitude: shelter.latitude,
		longitude: shelter.longitude,
		latitudeDelta: 0.01,
		longitudeDelta: 0.01,
	};
	return (
		<View style={{ marginTop: 20 }}>
			<Text style={generic.interTitle}>Visiting Hours</Text>
			<View style={{ marginHorizontal: 20, marginTop: 10, marginBottom: 30 }}>
				<View style={{ display: 'flex', flexDirection: 'row' }}>
					<Text style={{ width: 150, fontSize: 16 }}>Monday</Text>
					<Text style={{ width: 150, fontSize: 16 }}>{shelter.visitingHours.monday}</Text>
				</View>
				<View style={{ display: 'flex', flexDirection: 'row' }}>
					<Text style={{ width: 150, fontSize: 16 }}>Tuesday</Text>
					<Text style={{ fontSize: 16 }}>{shelter.visitingHours.tuesday}</Text>
				</View>
				<View style={{ display: 'flex', flexDirection: 'row' }}>
					<Text style={{ width: 150, fontSize: 16 }}>Wednesday</Text>
					<Text style={{ fontSize: 16 }}>{shelter.visitingHours.wednesday}</Text>
				</View>
				<View style={{ display: 'flex', flexDirection: 'row' }}>
					<Text style={{ width: 150, fontSize: 16 }}>Thursday</Text>
					<Text style={{ fontSize: 16 }}>{shelter.visitingHours.thursday}</Text>
				</View>
				<View style={{ display: 'flex', flexDirection: 'row' }}>
					<Text style={{ width: 150, fontSize: 16 }}>Friday</Text>
					<Text style={{ fontSize: 16 }}>{shelter.visitingHours.friday}</Text>
				</View>
				<View style={{ display: 'flex', flexDirection: 'row' }}>
					<Text style={{ width: 150, fontSize: 16 }}>Saturday</Text>
					<Text style={{ fontSize: 16 }}>{shelter.visitingHours.saturday}</Text>
				</View>
				<View style={{ display: 'flex', flexDirection: 'row' }}>
					<Text style={{ width: 150, fontSize: 16 }}>Sunday</Text>
					<Text style={{ fontSize: 16 }}>{shelter.visitingHours.sunday}</Text>
				</View>
			</View>
		</View>
	);
};
