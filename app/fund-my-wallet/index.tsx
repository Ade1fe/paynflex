import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import Balance from '@/components/ui/Balance';
import FundWalletModal from '@/components/ui/FundWalletModal';
import Greeting from '@/components/ui/Greeting';
import Services from '@/components/ui/Services';
import { MaterialIcons } from '@expo/vector-icons';

const { width } = Dimensions.get('window'); 

const Homepage: React.FC = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

 
  const recentTransactions = [
    { id: '1', image: 'https://via.placeholder.com/50', title: 'Netflix', amount: '₦4,400', type: 'Subscription' },
    { id: '2', image: 'https://via.placeholder.com/50', title: 'Amazon', amount: '₦120,000', type: 'Subscription' },
    { id: '3', image: 'https://via.placeholder.com/50', title: 'Udemy', amount: '₦25,650', type: 'Purchase' },
    { id: '4', image: 'https://via.placeholder.com/50', title: 'Facebook', amount: '₦34,231', type: 'Purchase' },
    { id: '5', image: 'https://via.placeholder.com/50', title: 'Google', amount: '₦1,349', type: 'Purchase' },
    { id: '6', image: 'https://via.placeholder.com/50', title: 'Apple', amount: '₦20,000', type: 'Subscription' },
    { id: '7', image: 'https://via.placeholder.com/50', title: 'Spotify', amount: '₦1,000', type: 'Subscription' },
  ];

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
        <Text style={styles.userName}>{item.name}</Text>
        <Text style={styles.transactionTitle}>{item.title}</Text>
        <Text style={styles.transactionType}>{item.type}</Text>
      </View>
      <Text style={styles.transactionAmount}>{item.amount}</Text>
    </View>
  );

  return (
    <ScrollView contentContainerStyle={styles.container}>
      
      <Greeting name="Chike" />
      <Balance totalBalance="₦343,850.00" onFundWallet={handleFundWallet} />
      <Services />

     
      <View style={styles.recentTransactionsContainer}>
        <View style={styles.transactionsHeader}>
          <Text style={styles.sectionTitle}>Recent Transactions</Text>
          <TouchableOpacity>
            <View style={styles.greetingLeft}>
              <Text style={styles.showMoreText}>Show More</Text>
              <MaterialIcons name="keyboard-arrow-down" size={24} color="#000" />
            </View>
          </TouchableOpacity>
        </View>

        
        <FlatList
          data={recentTransactions}
          keyExtractor={(item) => item.id}
          renderItem={renderRecentTransactionItem}
          contentContainerStyle={styles.recentTransactionList}
        />
      </View>

    
      <FundWalletModal visible={isModalVisible} onClose={closeModal} />
    </ScrollView>
  );
};

export default Homepage;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#F5F5F5',
    padding: 20,
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
  // recentTransactionsTitle: {
  //   fontSize: 18,
  //   fontWeight: 'bold',
  //   marginBottom: 10,
  // },
  recentTransactionList: {
    // paddingHorizontal: 10,
  },
  // recentTransactionItem: {
  //   flexDirection: 'row',
  //   alignItems: 'center',
  //   backgroundColor: 'red',
  //   padding: 10,
  //   marginBottom: 10,
  //   borderRadius: 8,
  //   shadowColor: '#000',
  //   shadowOpacity: 0.1,
  //   shadowOffset: { width: 0, height: 2 },
  //   shadowRadius: 5,
  //   elevation: 3,
  // },
  // itemImage: {
  //   width: 50,
  //   height: 50,
  //   borderRadius: 25,
  //   marginRight: 10,
  // },
  // transactionDetails: {
  // marginRight: 10,
  //   width: 50, 
  //   backgroundColor: "green",
  // },
  // userName: {
  //   fontSize: 16,
  //   fontWeight: 'bold',
  // },
  // transactionTitle: {
  //   fontSize: 14,
  //   color: '#555',
  // },
  // transactionAmount: {
  //   fontSize: 14,
  //   color: 'green',
  // },
  // transactionType: {
  //   fontSize: 12,
  //   color: '#777',
  // },
  recentTransactionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 10,
    marginBottom: 10,
    width: '100%',
    // borderRadius: 8,
    // shadowColor: '#000',
    // shadowOpacity: 0.1,
    // shadowOffset: { width: 0, height: 2 },
    // shadowRadius: 5,
    // elevation: 3,
  },
  itemImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  transactionDetails: {
    flex: 1, // Expands to take available space
    marginRight: 10,
    // backgroundColor: 'green', // Temporary color for testing
    // padding: 5, // Optional: Add padding for spacing
    // borderRadius: 5, // Optional: Rounded corners
  },
  userName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
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
    color: 'green',
    fontWeight: 'bold',
  },
});
