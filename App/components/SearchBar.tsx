import { StyleSheet, TextInput } from 'react-native';

export default () => {
	return <TextInput style={styles.textSearch} placeholder={'Search'} placeholderTextColor={'white'} />;
};

export const styles = StyleSheet.create({
	textSearch: {
		backgroundColor: 'grey',
		color: 'grey',
		marginHorizontal: 10,
		marginBottom: 8,
		paddingVertical: 8,
		paddingHorizontal: 15,
		borderRadius: 8,
	},
});
