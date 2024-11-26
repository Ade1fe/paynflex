import React, { useState, useEffect } from 'react';
import { StatusBar, View, Text, Button, StyleSheet, ScrollView } from 'react-native';
import { ThemeProvider, DarkTheme, DefaultTheme } from '@react-navigation/native';
import { useColorScheme } from '@/hooks/useColorScheme'; // Custom hook for color scheme
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import SignUp from './sign-up';

SplashScreen.preventAutoHideAsync();

export default function HomeScreen() {
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  const [isReady, setIsReady] = useState(false);
  const [showSignup, setShowSignup] = useState(false); // State to toggle Signup form visibility

  const colorScheme = useColorScheme(); // Get current theme (dark or light)

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
      setIsReady(true); // Set the layout as ready
    }
  }, [loaded]);

  if (!isReady) {
    return null; // Don't render until fonts are loaded
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <ScrollView contentContainerStyle={styles.container}>
        {showSignup ? (
          <SignUp />
        ) : (
          <View style={styles.content}>
            <Text style={styles.heading}>Welcome to payNflex</Text>
            <Button title="Sign Up" onPress={() => setShowSignup(true)} color="#6200ea" />
          </View>
        )}
      </ScrollView>
      <StatusBar  />
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  content: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    fontSize: 24,
    fontFamily: 'SpaceMono',
    fontWeight: 'bold',
    marginBottom: 20,
  },
});
