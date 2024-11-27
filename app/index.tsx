import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import SendFundsScreen from './send-money/fund-wallet';
import { useFonts } from 'expo-font';
import Homepage from './fund-my-wallet';

export default function HomeScreen() {
  const router = useRouter();


  const [fontsLoaded] = useFonts({
    'BricolageGrotesque': require('../assets/fonts/Bricolage_Grotesque/static/BricolageGrotesque_24pt_Condensed-Regular.ttf'),
    'SpaceMono': require('../assets/fonts/SpaceMono-Regular.ttf'),
  });


  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }

  return (
    <View style={styles.container}>
      <Homepage />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // padding: 16,
    backgroundColor: '#0F40D3',
  },
  title: {
    fontFamily: 'BricolageGrotesque',
    fontSize: 24,
    color: '#fff',
    marginBottom: 20,
  },
});
