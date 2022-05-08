import { StyleSheet, Dimensions } from 'react-native';
import { colors } from './colors';

export default StyleSheet.create({
	container: {
		width: '95%',
		height: 200,
		borderRadius: 20,
		overflow: 'hidden',
		margin: 10,
	},
	smallCardsContainer: {
		marginBottom: 20,
	},
	heart: {
		width: 75,
		height: 75,
	},
	image: {
		flex: 1,
		justifyContent: 'flex-end',
	},
	imageText: {
		textAlign: 'left',
	},
	name: {
		color: 'white',
		fontSize: 16,
		lineHeight: 16,
	},
	info: {
		color: 'white',
		fontSize: 11,
	},
	linearGradient: {
		justifyContent: 'flex-end',
		height: 100,
		paddingLeft: 20,
		paddingBottom: 15,
	},
	heartContainer: {
		flex: 1,
		alignItems: 'flex-end',
	},

	// SmallCard
	smallContainer: {
		width: 125,
		height: 175,
		borderRadius: 20,
		overflow: 'hidden',
		margin: 10,
	},
	smallLinearGradient: {
		justifyContent: 'flex-end',
		height: 100,
		paddingLeft: 20,
		paddingBottom: 15,
	},
});
