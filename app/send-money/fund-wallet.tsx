
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, Modal, Platform, Dimensions } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { Ionicons, MaterialIcons, AntDesign } from '@expo/vector-icons';
import { BlurView } from 'expo-blur';

const { width, height } = Dimensions.get('window');

const SendFundsScreen: React.FC = () => {
  const [bank, setBank] = useState('');
  const [accountNumber, setAccountNumber] = useState('');
  const [accountName, setAccountName] = useState('');
  const [amount, setAmount] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false);

  const isFormValid =
    bank.trim() &&
    accountNumber.trim().length === 10 && 
    accountName.trim() &&
    amount.trim() &&
    !isNaN(parseFloat(amount));

  const handleSubmit = () => {
    if (!isFormValid) {
      Alert.alert('Error', 'Please fill in all the fields correctly.');
      return;
    }
    setIsModalVisible(true); 
  };

  return (
    <View style={styles.wrapper}>
      <TouchableOpacity style={styles.backIcon}>
        <Ionicons name="arrow-back" size={24} color="#fff" />
      </TouchableOpacity>

      <View style={styles.headerSection}>
        <Text style={styles.header}>Send Funds</Text>
        <Text style={styles.subHeader}>Enter account details to send money</Text>
      </View>

      <View style={styles.container}>
        <Text style={styles.label}>Bank Name</Text>
        <View style={styles.pickerWrapper}>
          <Picker
            selectedValue={bank}
            onValueChange={(value) => setBank(value)}
            style={styles.picker}
          >
            <Picker.Item label="Select bank" value="" />
            <Picker.Item label="Bank A" value="Bank A" />
            <Picker.Item label="Bank B" value="Bank B" />
            <Picker.Item label="Bank C" value="Bank C" />
          </Picker>
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Account Number</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter account number"
            keyboardType="numeric"
            value={accountNumber}
            onChangeText={(text) => setAccountNumber(text)}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Account Name</Text>
          <TextInput
            style={[styles.input, { backgroundColor: '#DBE4F5' }]}
            placeholder="Enter account name"
            value={accountName}
            onChangeText={(text) => setAccountName(text)}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Amount</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter amount"
            keyboardType="numeric"
            value={amount}
            onChangeText={(text) => setAmount(text)}
          />
        </View>

        <TouchableOpacity
          style={[styles.button, { backgroundColor: isFormValid ? '#0F40D3' : '#ccc' }]}
          onPress={handleSubmit}
          disabled={!isFormValid}
        >
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>
      </View>

      <Modal
        visible={isModalVisible}
        transparent
        animationType="fade"
        onRequestClose={() => setIsModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <BlurView intensity={80} tint="dark" style={StyleSheet.absoluteFill}>
            <View style={styles.modalCenteredView}>
              <View style={styles.modalContainer}>
                <Text style={styles.modalTitle}>TRANSFER SUCCESSFUL</Text>
                <Text style={styles.modalAmount}>{`₦${parseFloat(amount).toLocaleString()}`}</Text>
                <Text style={styles.modalText}>SENT TO</Text>
                <Text style={styles.modalRecipient}>{accountName}</Text>

                <TouchableOpacity
                  style={styles.cancelButton}
                  onPress={() => setIsModalVisible(false)}
                >
                  <Ionicons name="close" size={16} color="#000" />
                </TouchableOpacity>

                <View style={styles.modalButtonContainer}>
                  <TouchableOpacity
                    style={styles.modalButton}
                    onPress={() => {
                      setIsModalVisible(false);
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
                      setIsModalVisible(false);
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
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
    width: '90%',
    backgroundColor: '#0F40D3',
  },
  backIcon: {
    marginBottom: 50,
    marginLeft: 20,
  },
  headerSection: {
    paddingHorizontal: 20,
    marginBottom: 50,
    fontFamily: 'BricolageGrotesque',
  },
  header: {
    fontSize: 24,
    fontFamily: 'BricolageGrotesque',
    color: '#fff',
    marginBottom: 5,
    textAlign: 'left',
  },
  subHeader: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '400',
    textAlign: 'left',
  },
  container: {
    padding: 20,
    backgroundColor: '#F5F7FF',
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 5,
    marginHorizontal: 10,
  },
  inputContainer: {
    marginBottom: 15,
  },
  label: {
    fontSize: 14,
    color: '#464A4F',
    marginBottom: 5,
    marginTop: 10,
    fontWeight: '500',  
  },
  pickerWrapper: {
    height: 50,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  picker: {
    height: '100%',
    width: '100%',
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    fontSize: 16,
  },
  button: {
    marginTop: 20,
    paddingVertical: 15,
    borderRadius: 50,
    alignItems: 'center', 
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600', 
  },
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
    width: width * 0.8,
    padding: 20,
    backgroundColor: Platform.OS === 'ios' ? 'rgba(255, 255, 255, 0.7)' : 'white',
    borderRadius: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
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

export default SendFundsScreen;

