import React from 'react';
import { View, Text , StyleSheet} from 'react-native';

export default function Transactions() {
  return (
    <View style={styles.container}>
      <Text>Transactions Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    padding: 10,
    backgroundColor: "red",
  }
})