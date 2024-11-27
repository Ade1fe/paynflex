import React from 'react';
import { FlatList, View, Text, StyleSheet } from 'react-native';

// Define the type for each transaction
interface Transaction {
    id: string;
    title: string;
    amount: string;
    date: string;
  }
  
  // Define the props for the TransactionsList component
  interface TransactionsListProps {
    transactions: Transaction[];
  }

  
// Use the Transaction type to define the prop type for TransactionsList
const TransactionsList: React.FC<TransactionsListProps> = ({ transactions }) => {
  return (
    <FlatList
      data={transactions}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <View style={styles.transactionItem}>
          <Text>{item.title}</Text>
          <Text>{item.amount}</Text>
          <Text>{item.date}</Text>
        </View>
      )}
      nestedScrollEnabled={true}
      contentContainerStyle={styles.listContainer}
    />
  );
};

const styles = StyleSheet.create({
  transactionItem: {
    padding: 10,
    marginVertical: 5,
    backgroundColor: '#fff',
    borderRadius: 5,
  },
  listContainer: {
    padding: 10,
  },
});

export default TransactionsList;
