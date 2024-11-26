
import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider, DarkTheme, DefaultTheme } from '@react-navigation/native';
import { useColorScheme } from '@/hooks/useColorScheme'; 
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import HomeScreen from './HomeScreen'; 

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme(); 
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  const [isReady, setIsReady] = useState(false);

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
      <HomeScreen />
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
