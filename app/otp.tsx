import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert } from 'react-native';

export default function OtpScreen() {
  const [otp, setOtp] = useState(['', '', '', '']);

  const handleInputChange = (value: string, index: number) => {
    if (isNaN(Number(value))) return; 
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 3) {
      const nextInput = `input-${index + 1}`;
      const nextField = document.getElementById(nextInput) as HTMLInputElement | null;
      nextField?.focus();
    }
  };

  const handleSubmit = () => {
    const otpString = otp.join('');
    if (otpString.length !== 4 || otpString.includes('')) {
      Alert.alert('Error', 'Please fill all 4 OTP boxes.');
    } else {
      Alert.alert('Success', `OTP verified: ${otpString}`);
      console.log('OTP submitted:', otpString);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Confirm Your Phone Number</Text>
      </View>
      <View style={styles.form}>
        <Text> Back</Text>
        <Text style={styles.title}>Enter the OTP sent to your phone</Text>
        <View style={styles.otpContainer}>
          {otp.map((digit, index) => (
            <TextInput
              key={index}
              id={`input-${index}`}
              style={styles.otpInput}
              keyboardType="numeric"
              maxLength={1}
              value={digit}
              onChangeText={(value) => handleInputChange(value, index)}
            />
          ))}
        </View>
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F40D3',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  header: {
    marginBottom: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
  form: {
    width: '100%',
    backgroundColor: '#EAEFFD',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: '500',
    marginBottom: 20,
    color: '#333',
    textAlign: 'center',
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  otpInput: {
    width: 50,
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    textAlign: 'center',
    fontSize: 18,
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: '#0F40D3',
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
