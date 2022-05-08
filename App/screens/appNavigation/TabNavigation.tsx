import { BottomTabNavigationOptions, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';
import { ParamListBase, RouteProp } from '@react-navigation/native';
import React, { ComponentProps } from 'react';
import Favorites from '../Favorites';
import HomeIndex from '../home';
import Locations from '../Locations';
import { colors } from '../../styles/colors';

const Tab = createBottomTabNavigator();

const screenOptions = ({ route }: { route: RouteProp<ParamListBase> }): BottomTabNavigationOptions => ({
	tabBarIcon: ({ focused, color, size }: { focused: boolean; color: string; size: number }) => {
		let icon: ComponentProps<typeof Ionicons>['name'] = 'help';

		if (route.name === 'Explore') icon = 'home';
		if (route.name === 'Favorites') icon = 'heart';
		if (route.name === 'Locations') icon = 'md-compass';

		if (focused) {
			color = colors.dark;
		}
		if (!focused) {
			color = colors.pink;
		}
		return <Ionicons color={color} name={icon} size={size} />;
	},

	tabBarLabel: () => {
		return null;
	},
	tabBarStyle: {
		backgroundColor: colors.light,
	},
	headerStyle: {
		backgroundColor: colors.light,
	},
	headerTitleStyle: {
		fontSize: 16,
		color: colors.dark,
	},
});

export default () => {
	return (
		<Tab.Navigator screenOptions={screenOptions}>
			<Tab.Screen
				name="Explore"
				component={HomeIndex}
				options={() => ({
					headerShown: false,
				})}
			/>
			<Tab.Screen name="Favorites" component={Favorites} />
			<Tab.Screen name="Locations" component={Locations} />
		</Tab.Navigator>
	);
};
