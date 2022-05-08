import { StyleSheet } from 'react-native';
import { colors } from './colors';

export default StyleSheet.create({
	interTitle: {
		color: '#AC7D88',
		opacity: 0.7,
		fontSize: 12,
		paddingLeft: 20,
		lineHeight: 16,
	},
	headerContainer: {
		height: 400,
	},
	infoBar: {
		marginHorizontal: 20,
		marginBottom: 30,
	},
	infoIconContainer: {
		marginBottom: -10,
		width: '20%',
	},
	infoTextContainer: {
		marginBottom: -10,
		width: '75%',
	},
	actionsContainer: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-evenly',
		alignItems: 'center',
		height: 100,
		backgroundColor: '#F8ECD1',
		//shadow
		shadowColor: '#555',
		shadowRadius: 10,
		elevation: 6,
		//
		borderRadius: 50,
		marginTop: -50,
		marginBottom: 35,
	},
	interTitleContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginRight: 20,
		alignItems: 'center',
		marginBottom: 15,
		marginTop: 10,
	},
	container: {
		overflow: 'hidden',
		backgroundColor: colors.background,
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
	actionGroup: {
		alignItems: 'center',
	},
	text: {
		color: 'white',
		fontSize: 16,
		paddingLeft: 20,
		lineHeight: 16,
	},
	textBlock: {
		color: 'black',
		marginHorizontal: 20,
		lineHeight: 24,
		marginBottom: 5,
		marginTop: 5,
	},
	videoContainer: {
		height: 200,
		marginVertical: 10,
	},

	

	// Map & Marker
	mapContainer: {
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
