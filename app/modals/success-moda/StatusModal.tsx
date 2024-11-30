import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal, Alert } from 'react-native';
import { BlurView } from 'expo-blur';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons, AntDesign } from '@expo/vector-icons';

interface StatusModalProps {
  visible: boolean;
  isSuccess: boolean;
  phonenumber: string;
  amount: string;
  onClose: () => void;
}

const StatusModal: React.FC<StatusModalProps> = ({ visible, isSuccess, phonenumber, amount, onClose }) => {
  return (
    <Modal visible={visible} transparent animationType="fade" onRequestClose={onClose}>
      <View style={styles.modalOverlay}>
        <BlurView intensity={80} tint="dark" style={StyleSheet.absoluteFill}>
          <View style={styles.modalCenteredView}>
            <View style={styles.modalContainer}>
              <Text style={styles.modalTitle}>
                {isSuccess ? 'TRANSFER SUCCESSFUL' : 'TRANSFER FAILED'}
              </Text>
              <Text style={styles.modalAmount}>{`₦${parseFloat(amount).toLocaleString()}`}</Text>
              <Text style={styles.modalText}>SENT TO</Text>
              <Text style={styles.modalRecipient}>{phonenumber}</Text>

              <TouchableOpacity style={styles.cancelButton} onPress={onClose}>
                <Ionicons name="close" size={16} color="#000" />
              </TouchableOpacity>

              <View style={styles.modalButtonContainer}>
                <TouchableOpacity
                  style={styles.modalButton}
                  onPress={() => {
                    onClose();
                    Alert.alert('Receipt downloaded!');
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
                    Alert.alert('Receipt shared!');
                  }}
                >
                  <View style={styles.buttonContent}>
                    <AntDesign name="sharealt" size={24} color="#0F40D3BF" />
                    <Text style={[styles.modalButtonText, { color: '#0F40D3' }]}>
                      Share Receipt
                    </Text>
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
    width: '80%',
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  modalAmount: {
    fontSize: 28,
    fontWeight: '600',
    color: '#000',
    fontFamily: 'BricolageGrotesque',
  },
  modalText: {
    fontSize: 14,
    fontWeight: '500',
  },
  modalRecipient: {
    fontSize: 16,
    fontWeight: '400',
    marginBottom: 10,
    fontFamily: 'BricolageGrotesque',
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

export default StatusModal;
