import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

interface BalanceProps {
  totalBalance: string;
  onFundWallet: () => void;
}

const Balance: React.FC<BalanceProps> = ({ totalBalance, onFundWallet }) => {
  return (
    <View style={styles.balanceContainer}>
      <Text style={styles.balanceTitle}>Total Balance</Text>
      <Text style={styles.balanceAmount}>₦{totalBalance}</Text>
      <TouchableOpacity style={styles.addFundsButton} onPress={onFundWallet}>
        <Text style={styles.addFundsText}>+ Fund wallet</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Balance;

const styles = StyleSheet.create({
  balanceContainer: {
    backgroundColor: '#0F40D3',
    paddingVertical: 30,
    paddingHorizontal: 20,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
  },
  balanceTitle: { fontSize: 14, fontWeight: 400, color: '#fff', marginBottom: 5 },
  balanceAmount: { fontSize: 28, fontWeight: 'bold', color: '#fff' },
  addFundsButton: {
    marginTop: 20,
    backgroundColor: '#0F70f4',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  addFundsText: { fontSize: 14, color: '#fff', fontWeight: '600' },
});
