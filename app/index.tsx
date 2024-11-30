import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useFonts } from 'expo-font';
import BottomNavigation from '../navigation/bottom-navigation';
import AirtimeScreen from './screens/services/airtime/AirtimeScreen';
import Services from './screens/services/Services';
import DataScreen from './screens/services/DataScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import PinScreen from './screens/pin/PinScreen';

const Stack = createStackNavigator();

export default function Index() {
  const { width } = Dimensions.get('window');

  const [fontsLoaded] = useFonts({
    BricolageGrotesque: require('../assets/fonts/Bricolage_Grotesque/static/BricolageGrotesque_24pt_Condensed-Regular.ttf'),
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  const [isReady, setIsReady] = useState(false);
  const [initialState, setInitialState] = useState<any>(undefined);

  useEffect(() => {
    const restoreState = async () => {
      const savedState = await AsyncStorage.getItem('NAVIGATION_STATE');
      if (savedState) {
        setInitialState(JSON.parse(savedState));
      }
      setIsReady(true);
    };
    restoreState();
  }, []);

  const onStateChange = async (state: any) => {
    await AsyncStorage.setItem('NAVIGATION_STATE', JSON.stringify(state));
  };

  if (!fontsLoaded || !isReady) {
    return <Text>Loading... hrerererere</Text>; 
  }

  return (
    <NavigationContainer
      initialState={initialState}
      onStateChange={onStateChange}
    >
      <View style={[styles.container, { paddingHorizontal: width * 0.0 }]}>
        <Stack.Navigator initialRouteName="BottomNavigation" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="BottomNavigation" component={BottomNavigation} />
          <Stack.Screen name="AirtimeScreen" component={AirtimeScreen} />
          <Stack.Screen name="DataScreen" component={DataScreen} />
          <Stack.Screen name="PinScreen" component={PinScreen} />
        </Stack.Navigator>
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F40D3',
  },
});
