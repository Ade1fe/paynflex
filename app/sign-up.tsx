
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet,TouchableOpacity } from 'react-native';

const SignUp = () => {
  const [activeTab, setActiveTab] = useState('signUp'); // Default active tab

  // Sign Up form fields
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [referralCode, setReferralCode] = useState('');

  // Handle form submission
  const handleSubmit = () => {
    console.log({ firstName, lastName, phoneNumber, referralCode });
  };

  return (
    <View style={styles.container}>
      {/* Tab Navigation */}
      <View style={styles.tabs}>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'signUp' && styles.activeTab]}
          onPress={() => setActiveTab('signUp')}
        >
          <Text style={[styles.tabText, activeTab === 'signUp' && styles.activeTabText]}>Sign Up</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.tab, activeTab === 'signIn' && styles.activeTab]}
          onPress={() => setActiveTab('signIn')}
        >
          <Text style={[styles.tabText, activeTab === 'signIn' && styles.activeTabText]}>Sign In</Text>
        </TouchableOpacity>
      </View>

      {/* Form based on active tab */}
      {activeTab === 'signUp' ? (
        <View style={styles.form}>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>First Name</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your first name"
              value={firstName}
              onChangeText={setFirstName}
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Last Name</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your last name"
              value={lastName}
              onChangeText={setLastName}
            />
          </View>

          <View style={styles.inputContainer}>
  <Text style={styles.label}>Phone Number</Text>
  <View style={styles.phoneInputContainer}>
    <Text style={styles.countryCode}>+234</Text>
    <TextInput
      style={styles.phoneInput}
      placeholder="Enter your phone number"
      value={phoneNumber}
      onChangeText={setPhoneNumber}
      keyboardType="phone-pad"
      maxLength={10}  // Optional: Limit input length for local number
    />
  </View>
</View>


          <View style={styles.inputContainer}>
            <Text style={styles.label}>Referral Code </Text>
            <TextInput
              style={styles.input}
              placeholder="Enter referral code"
              value={referralCode}
              onChangeText={setReferralCode}
            />
          </View>

          <View style={styles.buttonContainer}>
            <Button title="Continue" onPress={handleSubmit} color="#ddd" />
          </View>
          <Text style={styles.password}>Forgot password?</Text>
        </View>
      ) : (
        // Sign In form
        <View style={styles.form}>
          <Text style={styles.formText}>Sign In Form</Text>
        </View>
      )}
      <View>
          <Text style={{color: "#ddd"}}>Have an account already ? </Text> <Text>Login in</Text>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: 'blue',
  },
  tabs: {
    flexDirection: 'row',
    borderBottomWidth: 2,
    width: '100%',
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderColor: '#fff',
  },
  tab: {
    flex: 1,
    paddingVertical: 12,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 3,
    borderColor: 'transparent',
  },
  activeTab: {
    borderBottomWidth: 3,
    marginBottom: -3,
    borderColor: '#000',
  },
  tabText: {
    fontSize: 16,
    color: '#333',
    fontWeight: '500',
  },
  activeTabText: {
    color: '#000', // Active tab text color
  },
  form: {
    width: '100%',
    padding: 20,
    borderWidth: 1,
    borderColor: '#f1f1f1',
    backgroundColor: '#edf6f9',
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
  },
  inputContainer: {
    marginBottom: 15,
  },
  label: {
    fontSize: 14,
    marginBottom: 6,
    color: '#333',
    fontWeight: '500',
  },
  input: {
    width: '100%',
    padding: 12,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    fontSize: 12,
    fontWeight: '300',
    backgroundColor: '#fff',
  },
  phoneInputContainer: {
    flexDirection: 'row', 
    alignItems: 'center', // Ensures country code and input align vertically
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    overflow: "hidden", // Prevents overflow for child elements
  },
  countryCode: {
    fontSize: 12,
    color: '#333',
    fontWeight: '500',
    paddingVertical: 10,
    paddingHorizontal: 12,
    textAlign: 'center',
    backgroundColor: '#ddd',
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
  },
  phoneInput: {
    flex: 1, // Fills remaining space within the container
    fontSize: 12,
    color: '#333',
    padding: 10,
    backgroundColor: '#fff', // Ensures the white background
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
    fontWeight: '300',
  },
  
  password: {
    color: 'blue',
    textAlign: 'center',
    padding: 10,
    fontSize: 16,

  },
  buttonContainer: {
    marginVertical: 10,
    width: '100%',
    borderRadius: 20,
    overflow: 'hidden',
  },
  formText: {
    fontSize: 20,
    color: '#333',
    marginTop: 20,
  },
});

export default SignUp;
