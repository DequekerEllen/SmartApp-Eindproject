import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Detail from './Detail';
import 'react-native-gesture-handler';
import Home from './Home';

const Stack = createStackNavigator();

// const screenOptions = ({ route }: { route: RouteProp<ParamListBase> }): StackNavigationOptions => ({
// 	presentation: 'modal',
// });

export default () => {
	return (
		<Stack.Navigator initialRouteName="Home">
			<Stack.Screen
				name="Home"
				component={Home}
				options={({ navigation }) => ({
					title: 'Explore',
					headerShown: true,
					headerBackTitle: 'Back',
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
		</Stack.Navigator>
	);
};
