import { BottomTabNavigationOptions, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';
import { ParamListBase, RouteProp } from '@react-navigation/native';
import React, { ComponentProps } from 'react';
import Favorites from '../Favorites';
import HomeIndex from '../home';
import Locations from '../Locations';

const Tab = createBottomTabNavigator();

const screenOptions = ({ route }: { route: RouteProp<ParamListBase> }): BottomTabNavigationOptions => ({
	tabBarIcon: ({ focused, color, size }: { focused: boolean; color: string; size: number }) => {
		let icon: ComponentProps<typeof Ionicons>['name'] = 'help';

		if (route.name === 'Explore') icon = 'home';
		if (route.name === 'Favorites') icon = 'heart';
		if (route.name === 'Locations') icon = 'md-compass';

		if (focused) {
			color = '#AC7D88';
		}
		if (!focused) {
			color = '#DEB6AB';
		}
		return <Ionicons color={color} name={icon} size={size} />;
	},

	tabBarLabel: () => {
		return null;
	},
	tabBarStyle: {
		backgroundColor: '#F8ECD1',
	},
	headerStyle: {
		backgroundColor: '#F8ECD1',
	},
	headerTitleStyle: {
		fontSize: 16,
		color: '#AC7D88',
	},
});

export default () => {
	return (
		<Tab.Navigator screenOptions={screenOptions}>
			<Tab.Screen
				name="Explore"
				component={HomeIndex}
				options={({ navigation }) => ({
					headerShown: false,
				})}
			/>
			<Tab.Screen name="Favorites" component={Favorites} />
			<Tab.Screen name="Locations" component={Locations} />
		</Tab.Navigator>
	);
};
