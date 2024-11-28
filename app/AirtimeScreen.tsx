// /app/AirtimeScreen.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Airtime = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to Airtime Screen!</Text>
    </View>
  );
};

export default Airtime;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#0F40D3',
  },
});
