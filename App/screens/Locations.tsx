import { useEffect, useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import MapView, { Callout, Marker } from 'react-native-maps';
import { colors } from '../styles/colors';
import { pinColors } from '../styles/pinColors';

export default ({ navigation }: { navigation: any }) => {
	const [markers, setMarkers] = useState([]);
	useEffect(() => {
		fetch(`http://192.168.1.5:3000/shelters`, {
			method: 'GET',
			headers: {
				Accept: 'application/json',
			},
		})
			.then((response) => response.json())
			.then((json) => setMarkers(json))
			.catch((error) => {
				console.log(error);
			});
	}, []);

	return (
		<View style={styles.container}>
			<MapView
				style={styles.map}
				initialRegion={{
					latitude: 50.8517181,
					longitude: 3.3425546,
					latitudeDelta: 0.0922,
					longitudeDelta: 0.0421,
				}}
			>
				{markers &&
					markers.map((marker: any, index: number) => (
						<Marker
							key={index}
							coordinate={{
								latitude: marker.latitude,
								longitude: marker.longitude,
							}}
							pinColor={pinColors[Math.floor(Math.random() * pinColors.length)]}
							title={marker.name}
							description={marker.location}
						>
							<Callout tooltip onPress={() => navigation.navigate('ShelterDetail', { payload: marker })}>
								<Pressable style={styles.tooltip}>
									<View>
										<Text style={{ color: colors.alpha }}>{marker.name}</Text>
										<Text style={{ fontSize: 12, color: colors.dark }}>{marker.location}</Text>
									</View>
								</Pressable>
							</Callout>
						</Marker>
					))}
			</MapView>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		...StyleSheet.absoluteFillObject,
		flex: 1, //the container will fill the whole screen.
		justifyContent: 'flex-end',
		alignItems: 'center',
	},
	map: {
		...StyleSheet.absoluteFillObject,
	},
	tooltip: {
		backgroundColor: colors.background,
		padding: 10,
		borderRadius: 10,
	},
});
