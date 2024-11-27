// /Users/damilolaadisa/Documents/paynflex/app/fund-my-wallet/Homepage.tsx
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const transactions = [
  { id: '1', title: 'Grocery Shopping', amount: '-₦5,000', date: 'Nov 26, 2024' },
  { id: '2', title: 'Salary', amount: '+₦150,000', date: 'Nov 25, 2024' },
  { id: '3', title: 'Transfer to Alex', amount: '-₦10,000', date: 'Nov 24, 2024' },
];

export default function Homepage() {
  const name = "Damilola";

  return (
    <View style={styles.container}>
   
      <View style={styles.greetingContainer}>
        <View >
        <Text style={styles.greetingText}>Hello {name},</Text>
          <View style={styles.greetingLeft}>
         
            <Text style={styles.greetingSubText}>Good Morning</Text>
            <Ionicons name="sunny-outline" size={24} color="#FFD700" />
          </View>
          
        </View>
        <Image
            source={require('../../assets/images/adaptive-icon.png')} 
            style={styles.peopleIcon}
          />
      
      </View>

     
      <View style={styles.balanceContainer}>
        <Text style={styles.balanceTitle}>Total Balance</Text>
        <Text style={styles.balanceAmount}>₦366,728.82</Text>
      </View>

     
      <View style={styles.transactionsHeader}>
        <Text style={styles.sectionTitle}>Popular Transactions</Text>
        <TouchableOpacity>
          <Text style={styles.showMoreText}>Show More</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={transactions}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.transactionItem}>
            <Text style={styles.transactionTitle}>{item.title}</Text>
            <View style={styles.transactionDetails}>
              <Text style={styles.transactionAmount}>{item.amount}</Text>
              <Text style={styles.transactionDate}>{item.date}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    paddingTop: 40,
    width: "100%",
    backgroundColor: '#F5F7FF',
  },
  greetingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  greetingLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  peopleIcon: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  greetingText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },
  greetingSubText: {
    fontSize: 14,
    color: '#666',
  },
  balanceContainer: {
    backgroundColor: '#0F40D3',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
  },
  balanceTitle: {
    fontSize: 16,
    color: '#fff',
    marginBottom: 5,
  },
  balanceAmount: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
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
    color: '#333',
  },
  showMoreText: {
    fontSize: 14,
    color: '#0F40D3',
    fontWeight: '500',
  },
  transactionItem: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  transactionTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
  },
  transactionDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
  },
  transactionAmount: {
    fontSize: 14,
    fontWeight: '600',
    color: '#0F40D3',
  },
  transactionDate: {
    fontSize: 12,
    color: '#999',
  },
});
