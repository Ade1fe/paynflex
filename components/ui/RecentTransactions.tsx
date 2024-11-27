import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList, ScrollView } from 'react-native';

interface Transaction {
  id: string;
  title: string;
  amount: string;
  type: string; // 'Subscription' or 'Purchase'
}

const RecentTransactions: React.FC = () => {
  const transactions: Transaction[] = [
    { id: '1', title: 'Netflix', amount: '₦4,400', type: 'Subscription' },
    { id: '2', title: 'Amazon', amount: '₦120,000', type: 'Subscription' },
    { id: '3', title: 'Udemy', amount: '₦25,650', type: 'Purchase' },
    { id: '4', title: 'Facebook', amount: '₦34,231', type: 'Purchase' },
    { id: '5', title: 'Google', amount: '₦1,349', type: 'Purchase' },
    { id: '6', title: 'Apple', amount: '₦20,000', type: 'Subscription' },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.greeting}>Hello Chike</Text>
        <Text style={styles.greeting}>Good Morning</Text>
        <View style={styles.balanceContainer}>
          <Text style={styles.balance}>Total Balance</Text>
          <Text style={styles.balanceAmount}>₦343,850.00</Text>
          <TouchableOpacity style={styles.fundButton}>
            <Text style={styles.fundButtonText}>Fund Wallet</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Popular Transactions</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.popularTransactions}>
            {['Airtime', 'Data', 'DSTV', 'Internet', 'SME'].map((item) => (
              <View key={item} style={styles.popularItem}>
                <Text style={styles.popularItemText}>{item}</Text>
              </View>
            ))}
          </View>
        </ScrollView>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Recent Transactions</Text>
        <FlatList
          data={transactions}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.transactionItem}>
              <Image
                source={{ uri: 'https://www.example.com/path-to-avatar.jpg' }} // Replace with actual image URL
                style={styles.transactionImage}
              />
              <View style={styles.transactionInfo}>
                <Text style={styles.transactionTitle}>{item.title}</Text>
                <Text style={styles.transactionAmount}>{item.amount}</Text>
              </View>
              <Text style={styles.transactionType}>{item.type}</Text>
            </View>
          )}
        />
      </View>

      <TouchableOpacity style={styles.addMoreButton}>
        <Text style={styles.addMoreText}>+ Add More User</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  header: {
    marginBottom: 20,
  },
  greeting: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  balanceContainer: {
    marginTop: 10,
  },
  balance: {
    fontSize: 14,
    color: '#555',
  },
  balanceAmount: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#0F40D3',
  },
  fundButton: {
    marginTop: 10,
    backgroundColor: '#0F40D3',
    paddingVertical: 10,
    borderRadius: 5,
  },
  fundButtonText: {
    color: 'white',
    textAlign: 'center',
  },
  section: {
    marginVertical: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  popularTransactions: {
    flexDirection: 'row',
    marginTop: 10,
  },
  popularItem: {
    backgroundColor: '#0F40D3',
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 10,
  },
  popularItemText: {
    color: 'white',
    fontSize: 14,
  },
  transactionItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
  },
  transactionImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  transactionInfo: {
    flex: 1,
    marginLeft: 10,
  },
  transactionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  transactionAmount: {
    fontSize: 14,
    color: '#555',
  },
  transactionType: {
    fontSize: 12,
    color: '#0F40D3',
  },
  addMoreButton: {
    backgroundColor: '#0F40D3',
    paddingVertical: 12,
    borderRadius: 5,
    marginTop: 20,
  },
  addMoreText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 14,
  },
});

export default RecentTransactions;
