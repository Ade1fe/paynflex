import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons, Octicons, MaterialCommunityIcons, Feather, FontAwesome6, MaterialIcons } from '@expo/vector-icons';

export default function Services() {
  const services = [
    { id: 1, name: 'Airtime', icon: <Ionicons name="phone-portrait-outline" size={24} color="#0F40D3" /> },
    { id: 2, name: 'Data', icon: <Octicons name="arrow-switch" size={24} color="#0F40D3" style={{ transform: [{ rotate: '90deg' }] }} /> },
    { id: 3, name: 'DSTV', icon: <MaterialCommunityIcons name="television-play" size={24} color="#0F40D3" /> },
    { id: 4, name: 'Internet', icon: <Feather name="wifi" size={24} color="#0F40D3" /> },
    { id: 5, name: 'SME', icon: <FontAwesome6 name="building-columns" size={24} color="#0F40D3" /> },
  ];

  return (

<View >

<View style={styles.transactionsHeader}>
<Text style={styles.sectionTitle}>Popular Transactions</Text>
  <TouchableOpacity>
  <Text style={styles.showMoreText}>Show More</Text>
  </TouchableOpacity>
     </View>
  
    <View style={styles.servicesContainer}>
      {services.map((service) => (
        <View key={service.id} style={styles.serviceItem}>
          <View style={styles.serviceItemIcon}>{service.icon}</View>
          <Text style={styles.serviceText}>{service.name}</Text>
        </View>
      ))}
    </View>
</View>
  );
}

const styles = StyleSheet.create({
    greetingLeft: {
        marginTop: 5,
        flexDirection: 'row',
        alignItems: 'center',
      },
    transactionsHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
      },
      sectionTitle: {
        fontSize: 16,
        fontWeight: '600',
        color: '#000000',
      },
      showMoreText: {
        fontSize: 14,
        color: '#4B4D52',
        fontWeight: '400',
      },
  servicesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
  },
  serviceItemIcon: {
    backgroundColor: '#EDF5F9',
    width: 50,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5, 
  },
  serviceItem: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  serviceText: { 
    fontSize: 12, 
    color: '#333', 
    textAlign: 'center' 
  },
});
