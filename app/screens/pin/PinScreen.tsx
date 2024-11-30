import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  FlatList,
  Alert,
} from 'react-native';
import { Feather, Ionicons } from '@expo/vector-icons';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import StatusModal from '@/app/modals/success-moda/StatusModal';

type RootStackParamList = {
  AirtimeScreen: undefined;
  PinScreen: {
    phoneNumber: string;
    amount: string;
    provider: string;
  };
};

type PinScreenRouteProp = RouteProp<RootStackParamList, 'PinScreen'>;

export default function PinScreen() {
  const navigation = useNavigation();
  const route = useRoute<PinScreenRouteProp>();
  const { phoneNumber, amount } = route.params;

  const [pin, setPin] = useState(['', '', '', '']);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isSuccess, setIsSuccess] = useState(true);

  const handlePinInput = (value: string, index: number) => {
    const newPin = [...pin];
    newPin[index] = value;
    setPin(newPin);
  };

  const handleNumberButtonPress = (number: string) => {
    const emptyIndex = pin.findIndex((digit) => digit === '');
    if (emptyIndex !== -1) {
      handlePinInput(number, emptyIndex);
    }
  };

  const handleDeleteButtonPress = () => {
    const newPin = [...pin];
    for (let i = pin.length - 1; i >= 0; i--) {
      if (pin[i] !== '') {
        newPin[i] = ''; // Clear the last filled digit
        break;
      }
    }
    setPin(newPin);
  };

  const handleDotButtonPress = () => {
    const emptyIndex = pin.findIndex((digit) => digit === '');
    if (emptyIndex !== -1) {
      handlePinInput('.', emptyIndex); // Add a dot to the first empty field
    }
  };

  const handleSubmit = () => {
    const pinString = pin.join('');
    if (pinString.length !== 4 || pin.includes('')) {
      Alert.alert('Error', 'Please fill all PIN fields with valid digits.');
    } else {
      setIsSuccess(Math.random() > 0.5); // Simulate success or failure
      setIsModalVisible(true); // Show the modal after validation
    }
  };

  const buttonData = [
    ...['1', '2', '3', '4', '5', '6', '7', '8', '9', '.', '0', 'DEL'], // Numeric buttons
  ];

  const renderButton = ({ item }: { item: string }) => {
    if (item === 'DEL') {
      return (
        <TouchableOpacity style={styles.numberButton} onPress={handleDeleteButtonPress}>
          <Text style={styles.numberText}>
            <Feather name="delete" size={24} color="#000" />
          </Text>
        </TouchableOpacity>
      );
    }

    if (item === '.') {
      return (
        <TouchableOpacity style={styles.numberButton} onPress={handleDotButtonPress}>
          <Text style={styles.numberText}>.</Text>
        </TouchableOpacity>
      );
    }

    return (
      <TouchableOpacity
        style={styles.numberButton}
        onPress={() => handleNumberButtonPress(item)}
      >
        <Text style={styles.numberText}>{item}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <FlatList
      data={[1]} // Dummy data to make FlatList work as outer container
      renderItem={() => (
        <View style={styles.screen}>
          {/* Header */}
          <View style={styles.header}>
            <Text style={styles.screenText}>Enter Your PIN</Text>
          </View>

          {/* Form */}
          <View style={styles.form}>
            <View style={styles.goback}>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Ionicons name="arrow-back" size={24} color="#000" />
              </TouchableOpacity>
            </View>
            <Text style={styles.subHeaderText}>Enter your PIN to complete the transaction</Text>

            {/* PIN Inputs */}
            <View style={styles.pinContainer}>
              {pin.map((digit, index) => (
                <TextInput
                  key={index}
                  style={styles.pinInput}
                  keyboardType="numeric"
                  maxLength={1}
                  value={digit}
                  onChangeText={(value) => handlePinInput(value, index)}
                />
              ))}
            </View>

            {/* Combined Number and Special Buttons */}
            <FlatList
              data={buttonData}
              keyExtractor={(item) => item}
              renderItem={renderButton}
              numColumns={3}
              contentContainerStyle={styles.flatListContainer}
            />

            {/* Continue Button */}
            <TouchableOpacity
              style={[
                styles.button,
                pin.every((digit) => digit !== '') ? styles.enabledButton : styles.disabledButton,
              ]}
              onPress={handleSubmit}
            >
              <Text style={styles.buttonText}>Continue</Text>
            </TouchableOpacity>
          </View>

          {/* Status Modal */}
          <StatusModal
            visible={isModalVisible}
            isSuccess={isSuccess}
            onClose={() => setIsModalVisible(false)}
            phonenumber={phoneNumber}
            amount={amount}
          />
        </View>
      )}
      keyExtractor={(item, index) => index.toString()}
      scrollEnabled={false} // Prevent scrolling on outer container
    />
  );
}

const styles = StyleSheet.create({
  screen: {
    flexGrow: 1,
    backgroundColor: '#0F40D3',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  goback: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    width: '100%',
    paddingHorizontal: 20,
  },
  header: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: '#0F40D3',
    width: '100%',
    padding: 20,
    marginTop: 50,
    marginBottom: 20,
  },
  screenText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 20,
  },
  subHeaderText: {
    fontSize: 16,
    color: '#000',
    marginVertical: 10,
    textAlign: 'left',
    width: '100%',
    paddingHorizontal: 20,
  },
  form: {
    backgroundColor: '#EAEFFD',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    width: '100%',
    paddingTop: 20,
    paddingBottom: 20,
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  pinContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '100%',
    marginTop: 20,
    paddingHorizontal: 20,
  },
  pinInput: {
    width: 50,
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    textAlign: 'center',
    fontSize: 18,
    margin: 5,
    backgroundColor: '#E5EBFE',
  },
  flatListContainer: {
    marginTop: 'auto',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
  },
  numberButton: {
    paddingVertical: 20,
    paddingHorizontal: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    margin: 10,
  },
  numberText: {
    fontSize: 28,
    fontWeight: '600',
    color: '#333',
  },
  button: {
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
    width: '80%',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  enabledButton: {
    backgroundColor: '#0F40D3',
  },
  disabledButton: {
    backgroundColor: '#ccc',
  },
});
