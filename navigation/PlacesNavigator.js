import React from 'react'
import { Platform } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import PlacesListScreen from '../screens/PlacesListScreen'
import PlaceDetailScreen from '../screens/PlaceDetailScreen'
import NewPlaceScreen from '../screens/NewPlaceScreen'
import MapScreen from '../screens/MapScreen'
import Colors from '../constants/Colors'

const defaultNavOptions = {
	headerStyle: {
		backgroundColor: Platform.OS === 'android' ? Colors.primary : '',
	},
	headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary,
}

const PlacesStackNavigator = createStackNavigator()

const PlacesNavigator = () => {
	return (
		<PlacesStackNavigator.Navigator screenOptions={defaultNavOptions}>
			<PlacesStackNavigator.Screen
				name='PlacesList'
				component={PlacesListScreen}
			/>
			<PlacesStackNavigator.Screen
				name='PlaceDetail'
				component={PlaceDetailScreen}
			/>
			<PlacesStackNavigator.Screen
				name='NewPlace'
				component={NewPlaceScreen}
			/>
			<PlacesStackNavigator.Screen name='Map' component={MapScreen} />
		</PlacesStackNavigator.Navigator>
	)
}

const AppNavigator = () => {
	return (
		<NavigationContainer>
			<PlacesNavigator />
		</NavigationContainer>
	)
}

export default AppNavigator
