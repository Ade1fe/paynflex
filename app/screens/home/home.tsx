import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, Dimensions, ActivityIndicator } from 'react-native';
import Balance from '@/components/ui/Balance';
import FundWalletModal from '@/components/ui/FundWalletModal';
import Greeting from '@/components/ui/Greeting';
import Services from '@/app/screens/services/Services';
import { MaterialIcons } from '@expo/vector-icons';
import { useRecentTransactions } from '@/hooks/useRecentTransactions';
import { createStackNavigator } from '@react-navigation/stack';
import AirtimeScreen from '../services/airtime/AirtimeScreen';

const { width } = Dimensions.get('window');

const Stack = createStackNavigator();

// const FundMyWalletNavigator: React.FC = () => (
//   <Stack.Navigator initialRouteName="Services">
//     <Stack.Screen name="Services" component={Services} />
//     <Stack.Screen name="AirtimeScreen" component={AirtimeScreen} />
//   </Stack.Navigator>
// );

const HomeScreen: React.FC = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const { recentTransactions, isLoading } = useRecentTransactions();

  const handleFundWallet = () => {
    setIsModalVisible(true);
  };

  const closeModal = () => {
    setIsModalVisible(false);
  };

  const renderRecentTransactionItem = ({ item }: { item: any }) => (
    <View style={styles.recentTransactionItem}>
      <Image source={{ uri: item.image }} style={styles.itemImage} />
      <View style={styles.transactionDetails}>
        <Text style={styles.transactionTitle}>{item.title}</Text>
        <Text style={styles.transactionType}>{item.type}</Text>
      </View>
      <Text style={styles.transactionAmount}>{item.amount}</Text>
    </View>
  );

  return (
    <FlatList
      data={recentTransactions}
      keyExtractor={(item) => item.id}
      renderItem={renderRecentTransactionItem}
      contentContainerStyle={styles.container}
      ListHeaderComponent={
        <View>
          <Greeting name="Chike" />
          <Balance totalBalance="343,850.00" onFundWallet={handleFundWallet} />
          <Services />
          <View style={styles.recentTransactionsContainer}>
            <View style={styles.transactionsHeader}>
              <Text style={styles.sectionTitle}>Recents Transactions</Text>
              <TouchableOpacity>
                <View style={styles.greetingLeft}>
                  <Text style={styles.showMoreText}>Show More</Text>
                  <MaterialIcons name="keyboard-arrow-down" size={24} color="#000" />
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      }
      ListEmptyComponent={
        isLoading ? (
          <ActivityIndicator size="large" color="#000" />
        ) : (
          <Text style={styles.noTransactionsText}>No recent transactions to display</Text>
        )
      }
      ListFooterComponent={<FundWalletModal visible={isModalVisible} onClose={closeModal} />}
    />
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5F5F5',
    padding: 10,
    width: width * 0.99,
    alignSelf: 'center',
  },
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
  recentTransactionsContainer: {
    marginVertical: 20,
  },
  recentTransactionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 10,
    marginBottom: 10,
    width: '100%',
  },
  itemImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  transactionDetails: {
    flex: 1,
    marginRight: 10,
  },
  transactionTitle: {
    fontSize: 14,
    color: '#555',
  },
  transactionType: {
    fontSize: 12,
    color: '#777',
  },
  transactionAmount: {
    fontSize: 14,
    color: '#000000',
    fontWeight: 'bold',
  },
  noTransactionsText: {
    textAlign: 'center',
    fontSize: 16,
    color: '#777',
    marginTop: 20,
  },
});
