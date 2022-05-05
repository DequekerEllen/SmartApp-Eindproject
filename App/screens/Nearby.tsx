import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

export default () => {
	const tokyoRegion = {
		latitude: 50.8517181,
		longitude: 3.3425546,
		latitudeDelta: 0.01,
		longitudeDelta: 0.01,
	};
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
				<Marker coordinate={tokyoRegion} />
			</MapView>
		</View>
	);
};
// 50.852082, 3.345621

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
});
