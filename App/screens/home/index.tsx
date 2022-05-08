import React from 'react';
import { createStackNavigator, StackNavigationOptions } from '@react-navigation/stack';
import Detail from './Detail';
import 'react-native-gesture-handler';
import Home from './Home';
import { ParamListBase, RouteProp } from '@react-navigation/native';
import ShelterDetail from './ShelterDetail';

const Stack = createStackNavigator();

const screenOptions = ({ route }: { route: RouteProp<ParamListBase> }): StackNavigationOptions => ({
	headerShown: false,
	headerStyle: {
		backgroundColor: '#F8ECD1',
	},
	headerTitleStyle: {
		fontSize: 16,
		color: '#AC7D88',
	},
	headerTintColor: '#AC7D88',
});

export default function HomeIndex() {
	return (
		<Stack.Navigator initialRouteName="Home" screenOptions={screenOptions}>
			<Stack.Screen
				name="Home"
				component={Home}
				options={({ navigation }) => ({
					title: 'Explore',
					headerShown: true,
				})}
			/>
			<Stack.Screen
				name="Detail"
				component={Detail}
				options={() => ({
					title: 'Detail',
					headerShown: true,
				})}
			/>
			<Stack.Screen
				name="ShelterDetail"
				component={ShelterDetail}
				options={() => ({
					title: 'ShelterDetail',
					headerShown: true,
				})}
			/>
		</Stack.Navigator>
	);
}
