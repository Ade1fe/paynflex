import React, { useState, useEffect } from 'react';
import { StatusBar, ScrollView, StyleSheet, Image } from 'react-native';
import { ThemeProvider, DarkTheme, DefaultTheme } from '@react-navigation/native';
import { useColorScheme } from '@/hooks/useColorScheme';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import SignUp from './sign-up';

SplashScreen.preventAutoHideAsync();

export default function HomeScreen() {
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  const [isReady, setIsReady] = useState(false);
  const colorScheme = useColorScheme();

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
      setIsReady(true);
    }
  }, [loaded]);

  if (!isReady) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <ScrollView contentContainerStyle={styles.container}>
      <Image 
          source={require('../assets/images/paynflex-text.png')} 
          style={styles.image} 
        />
        <SignUp />
      </ScrollView>
      <StatusBar />
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#0F40D3',
  },
  image: {
    width: 150,
    height: 37, 
    marginBottom: 30,
    resizeMode: 'contain', 
  },
});















