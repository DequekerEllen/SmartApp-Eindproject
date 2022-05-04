import { StyleSheet, View } from 'react-native';
import Dog from '../interfaces/Dog';

export default ({ info }: { info: string }) => {
	return <View></View>;
};

const styles = StyleSheet.create({
	container: {
		width: 125,
		height: 175,
		borderRadius: 20,
		overflow: 'hidden',
		margin: 10,
	},
});
