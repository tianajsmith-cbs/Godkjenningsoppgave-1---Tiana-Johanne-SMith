import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import CountrySelectScreen from './screens/CountrySelectScreen';
import CityListScreen from './screens/CityListScreen';

import FetchListScreen from './screens/FetchListScreen';


const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
      <Tab.Screen name="Country" component={CountrySelectScreen} />
        <Tab.Screen name="City" component={CityListScreen} />
        <Tab.Screen name="Map" component={FetchListScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});