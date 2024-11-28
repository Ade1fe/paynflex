// /app/createStackNavigator.tsx
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Services from '@/app/Services'; // Adjust path if necessary
import AirtimeScreen from '../AirtimeScreen';
import DataScreen from '../DataScreen';
import DstvScreen from '../DstvScreen';
import InternetScreen from '../InternetScreen';
import SmeScreen from '../SmeScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Services">
        <Stack.Screen name="Services" component={Services} />
        <Stack.Screen name="AirtimeScreen" component={AirtimeScreen} />
        <Stack.Screen name="DataScreen" component={DataScreen} />
        <Stack.Screen name="DstvScreen" component={DstvScreen} />
        <Stack.Screen name="InternetScreen" component={InternetScreen} />
        <Stack.Screen name="SmeScreen" component={SmeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
