import { useIsFocused, useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';
import { Text, View } from 'react-native';

export default (/*{ route, navigation }: { route: any; navigation: any }*/) => {
	// const { payload } = route.params;
	const nav = useNavigation();
	const isFocused = useIsFocused();

	useEffect(() => {
		nav?.getParent()?.setOptions({ title: 'Detail' });
	}, [isFocused]);
	return (
		<View>
			<Text>{''}</Text>
			<Text>{'skipper'}</Text>
			<Text>{'yess'}</Text>
			<Text>{'⭐'}</Text>
		</View>
	);
};
