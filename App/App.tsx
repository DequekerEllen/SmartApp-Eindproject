import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import Favorites from './screens/Favorites';
import Home from './screens/home/Home';
import Nearby from './screens/Nearby';
import TabNavigation from './screens/appNavigation/TabNavigation';

export default function App() {
	const Tab = createBottomTabNavigator();

	return (
		<NavigationContainer>
			<StatusBar style="auto" />
			<TabNavigation />
		</NavigationContainer>
	);
}
