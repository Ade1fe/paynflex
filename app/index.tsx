// // /Users/damilolaadisa/Documents/paynflex/app/index.tsx
import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { useRouter } from 'expo-router';
import { useFonts } from 'expo-font';
import BottomNavigation from './(tabs)/bottom-navigation';

export default function HomeScreen() {
  const router = useRouter();
  const { width, height } = Dimensions.get('window');

  const [fontsLoaded] = useFonts({
    'BricolageGrotesque': require('../assets/fonts/Bricolage_Grotesque/static/BricolageGrotesque_24pt_Condensed-Regular.ttf'),
    'SpaceMono': require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return <Text>Loading... fonts</Text>;
  }

  return (
    <View style={[styles.container, { paddingHorizontal: width * 0.0 }]}>
      <BottomNavigation />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F40D3',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontFamily: 'BricolageGrotesque',
    fontSize: Dimensions.get('window').width * 0.06, 
    color: '#fff',
    marginBottom: 20,
    textAlign: 'center',
  },
  description: {
    fontFamily: 'SpaceMono',
    fontSize: Dimensions.get('window').width * 0.04, 
    color: '#fff',
    textAlign: 'center',
  },
});
