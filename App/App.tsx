import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import Favorites from './screens/Favorites';
import Home from './screens/Home';
import Nearby from './screens/Nearby';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function App() {
	const Tab = createBottomTabNavigator();

	return (
		<NavigationContainer>
			<StatusBar style="auto" />
			<Tab.Navigator
				screenOptions={({ route }) => ({
					tabBarIcon: ({ focused, color, size }) => {
						let iconName;

						if (route.name === 'Explore') {
							iconName = focused ? 'search' : 'search';
						} else if (route.name === 'Favorites') {
							iconName = focused ? 'heart' : 'heart';
						} else if (route.name === 'Nearby') {
							iconName = focused ? 'md-compass' : 'md-compass';
						}

						return <Ionicons name={iconName} size={size} color={color} />;
					},
					tabBarActiveTintColor: 'tomato',
					tabBarInactiveTintColor: 'gray',
				})}
			>
				<Tab.Screen name="Explore" component={Home} />
				<Tab.Screen name="Favorites" component={Favorites} />
				<Tab.Screen name="Nearby" component={Nearby} />
			</Tab.Navigator>
		</NavigationContainer>
	);
}
