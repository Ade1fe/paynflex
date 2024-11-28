import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import AirtimeScreen from './AirtimeScreen';  // your Airtime screen
import { RootStackParamList } from '@/types';
import Services from './Services';


const Stack = createStackNavigator<RootStackParamList>();  // create the stack with types

export default function AppStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Services">
        <Stack.Screen name="Services" component={Services} />
        <Stack.Screen name="Airtime" component={AirtimeScreen} />
        {/* Add more screens here as needed */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
