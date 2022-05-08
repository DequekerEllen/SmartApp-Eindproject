import { StyleSheet, Text, View } from 'react-native';

export default ({ text }: { text: string }) => {
	return (
		<View style={styles.container}>
			<Text style={styles.interTitle}>{text}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		width: '95%',
		height: 200,
		overflow: 'hidden',
	},
	interTitle: {
		color: '#8a8a8a',
		fontSize: 12,
		paddingLeft: 20,
		lineHeight: 16,
	},
});
