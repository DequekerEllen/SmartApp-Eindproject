import { StyleSheet } from 'react-native';
import { colors } from './colors';

export default StyleSheet.create({
	container: {
		overflow: 'hidden',
		backgroundColor: colors.background,
	},
	headerContainer: {
		height: 400,
	},
	infoBar: {
		marginHorizontal: 20,
	},
	infoIconContainer: {
		marginBottom: -10,
		width: '20%',
	},
	infoTextContainer: {
		marginBottom: -10,
		width: '75%',
	},
	infoText: {
		fontSize: 16,
		paddingLeft: 20,
	},
	infoIcon: {
		borderRadius: 50,
		overflow: 'hidden',
		width: 70,
		height: 70,
	},
	image: {
		flex: 1,
		justifyContent: 'flex-end',
	},
	linearGradient: {
		justifyContent: 'flex-end',
		height: 150,
		paddingBottom: 60,
	},
	actionsContainer: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-evenly',
		alignItems: 'center',
		height: 100,
		backgroundColor: colors.light,
		//shadow
		shadowColor: '#555',
		shadowRadius: 10,
		elevation: 6,
		//
		borderRadius: 50,
		marginTop: -50,
		marginBottom: 35,
	},
	actionGroup: {
		alignItems: 'center',
	},
	interTitle: {
		color: colors.dark,
		opacity: 0.7,
		fontSize: 12,
		paddingLeft: 20,
		lineHeight: 16,
	},
	interTitleContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginRight: 20,
		alignItems: 'center',
		marginBottom: 10,
		marginTop: 25,
	},
	text: {
		color: 'white',
		fontSize: 16,
		paddingLeft: 20,
		lineHeight: 16,
	},
	textBlock: {
		color: colors.alpha,
		marginHorizontal: 20,
		lineHeight: 24,
		marginBottom: 5,
		marginTop: 5,
	},
	videoContainer: {
		height: 200,
		marginVertical: 10,
	},
});
