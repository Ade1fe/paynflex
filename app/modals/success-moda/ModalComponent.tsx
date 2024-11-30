import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Modal, Platform } from 'react-native';
import { Ionicons, MaterialIcons, AntDesign } from '@expo/vector-icons';
import { BlurView } from 'expo-blur';

interface ModalComponentProps {
  isVisible: boolean;
  amount: string;
  accountName: string;
  onClose: () => void;
}

const ModalComponent: React.FC<ModalComponentProps> = ({ isVisible, amount, accountName, onClose }) => {
  return (
    <Modal visible={isVisible} transparent animationType="fade" onRequestClose={onClose}>
      <View style={styles.modalOverlay}>
        <BlurView intensity={80} tint="dark" style={StyleSheet.absoluteFill}>
          <View style={styles.modalCenteredView}>
            <View style={styles.modalContainer}>
              <Text style={styles.modalTitle}>TRANSFER SUCCESSFUL</Text>
              <Text style={styles.modalAmount}>{`₦${parseFloat(amount).toLocaleString()}`}</Text>
              <Text style={styles.modalText}>SENT TO</Text>
              <Text style={styles.modalRecipient}>{accountName}</Text>

              <TouchableOpacity style={styles.cancelButton} onPress={onClose}>
                <Ionicons name="close" size={16} color="#000" />
              </TouchableOpacity>

              <View style={styles.modalButtonContainer}>
                <TouchableOpacity
                  style={styles.modalButton}
                  onPress={() => {
                    onClose();
                    alert('Receipt downloaded!');
                  }}
                >
                  <View style={styles.buttonContent}>
                    <MaterialIcons name="download" size={24} color="#000" />
                    <Text style={styles.modalButtonText}>Download Receipt</Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity
                  style={[styles.modalButton, styles.shareButton]}
                  onPress={() => {
                    onClose();
                    alert('Receipt shared!');
                  }}
                >
                  <View style={styles.buttonContent}>
                    <AntDesign name="sharealt" size={24} color="#0F40D3BF" />
                    <Text style={[styles.modalButtonText, { color: '#0F40D3' }]}>Share Receipt</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </BlurView>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalCenteredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    padding: 20,
    backgroundColor: Platform.OS === 'ios' ? 'rgba(255, 255, 255, 0.7)' : 'white',
    borderRadius: 10,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 50,
    textAlign: 'center',
  },
  modalAmount: {
    fontSize: 28,
    fontWeight: '600',
    color: '#000',
  },
  modalText: {
    fontSize: 14,
    fontWeight: '500',
  },
  modalRecipient: {
    fontSize: 16,
    fontWeight: '400',
    marginBottom: 10,
  },
  modalButtonContainer: {
    width: '100%',
    marginTop: 15,
  },
  modalButton: {
    backgroundColor: '#F1F2F4',
    paddingVertical: 12,
    borderRadius: 10,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  modalButtonText: {
    fontSize: 16,
    fontWeight: '500',
    marginLeft: 10,
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cancelButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    padding: 5,
    borderRadius: 50,
    backgroundColor: '#ddd',
  },
  shareButton: {
    backgroundColor: '#fff',
    borderColor: '#0F40D3BF',
    borderWidth: 1,
  },
});

export default ModalComponent;
