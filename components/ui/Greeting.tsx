import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface GreetingProps {
  name: string;
}

const Greeting: React.FC<GreetingProps> = ({ name }) => {
  return (
    <View style={styles.greetingContainer}>
      <View>
        <Text style={styles.greetingText}>Hello {name},</Text>
        <View style={styles.greetingLeft}>
          <Text style={styles.greetingSubText}>Good Morning</Text>
          <Ionicons name="sunny" size={24} color="#FFD700" />
        </View>
      </View>
      <Image
        source={require('../../assets/images/adaptive-icon.png')}
        style={styles.peopleIcon}
      />
    </View>
  );
};

export default Greeting;

const styles = StyleSheet.create({
  greetingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
    paddingTop: 30,
  },
  greetingLeft: {
    marginTop: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  peopleIcon: { width: 40, height: 40, marginRight: 10 },
  greetingText: { fontSize: 18, fontWeight: '600', color: '#333' },
  greetingSubText: { fontSize: 14, color: '#666', marginRight: 10 },
});
