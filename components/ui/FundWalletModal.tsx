import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Modal, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface FundWalletModalProps {
  visible: boolean;
  onClose: () => void;
}

const FundWalletModal: React.FC<FundWalletModalProps> = ({ visible, onClose }) => {
  return (
    <Modal animationType="slide" transparent={true} visible={visible} onRequestClose={onClose}>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <Ionicons name="close-circle-outline" size={24} color="#333" />
          </TouchableOpacity>
          <Text style={styles.modalTitle}>Fund Wallet</Text>
          <Text style={styles.modalDescription}>Select an option to fund your wallet</Text>

          {/* Paystack Option */}
          <TouchableOpacity style={styles.optionButton}>
            <View style={styles.payStack}>
              <Image
                source={{ uri: 'https://via.placeholder.com/50' }} 
                style={styles.itemImage}
              />
              <View style={styles.transactionDetails}>
                <Text style={styles.transactionTitle}>Paystack</Text>
                <Text style={styles.transactionType}>Fund your wallet using Paystack.</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default FundWalletModal;

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: "center",
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    marginBottom: 20,
    borderRadius: 20,
    width: '90%',
    
  },
  closeButton: {
    alignSelf: 'flex-end',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10,
    color: '#333',
  },
  modalDescription: {
    fontSize: 14,
    color: '#666',
    marginBottom: 20,
  },
  optionButton: {
    // backgroundColor: '#0F40D3',
    // paddingVertical: 12,
    // paddingHorizontal: 25,
    borderRadius: 8,
    // marginTop: 10,
  },
  payStack: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 8,
  },
  itemImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  transactionTitle: {
    fontSize: 16,
    color: '#000',
    fontWeight: 600,
  },
  transactionType: {
    fontSize: 14,
    color: '#777',
  },
  transactionDetails: {
    flex: 1,
  },
});
