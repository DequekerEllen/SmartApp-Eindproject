import { BottomTabNavigationOptions, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';
import { ParamListBase, RouteProp } from '@react-navigation/native';
import React, { ComponentProps } from 'react';
import Favorites from '../Favorites';
import Nearby from '../Nearby';
import Home from '../home/Home';
import Detail from '../home/Detail';

const Tab = createBottomTabNavigator();

const screenOptions = ({ route }: { route: RouteProp<ParamListBase> }): BottomTabNavigationOptions => ({
	tabBarIcon: ({ focused, color, size }: { focused: boolean; color: string; size: number }) => {
		let icon: ComponentProps<typeof Ionicons>['name'] = 'help';

		if (route.name === 'Explore') icon = 'search';
		if (route.name === 'Favorites') icon = 'heart';
		if (route.name === 'Nearby') icon = 'md-compass';

		return <Ionicons color={color} name={icon} size={size} />;
	},
});

export default () => {
	return (
		<Tab.Navigator screenOptions={screenOptions}>
			<Tab.Screen
				name="Explore"
				component={Detail}
				options={({ navigation }) => ({
					tabBarLabel: 'Home',
				})}
			/>
			<Tab.Screen name="Favorites" component={Favorites} />
			<Tab.Screen name="Nearby" component={Nearby} />
		</Tab.Navigator>
	);
};
