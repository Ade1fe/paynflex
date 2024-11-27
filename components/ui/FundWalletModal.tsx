import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Modal } from 'react-native';
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
          <TouchableOpacity style={styles.optionButton}>
            <Text style={styles.optionText}>Paystack</Text>
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
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    alignItems: 'center',
  },
  closeButton: { alignSelf: 'flex-end' },
  modalTitle: { fontSize: 18, fontWeight: '600', marginBottom: 10, color: '#333' },
  modalDescription: { fontSize: 14, color: '#666', marginBottom: 20 },
  optionButton: {
    backgroundColor: '#0F40D3',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 8,
    marginTop: 10,
  },
  optionText: { fontSize: 14, color: '#fff', fontWeight: '600' },
});
