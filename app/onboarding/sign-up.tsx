import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { useRouter } from 'expo-router';


const SignUp = () => {
  const [activeTab, setActiveTab] = useState('signUp');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [referralCode, setReferralCode] = useState('');
  const router = useRouter();


  const isFormValid = firstName && lastName && phoneNumber && referralCode;

  const handleSubmit = () => {
    if (isFormValid) {
      console.log({ firstName, lastName, phoneNumber, referralCode });
      router.push('/')
    } else {
     
      console.log('Please fill all the fields');
    }
  };
  

  return (
    <View style={styles.container}>
      {/* Tab Navigation */}
      <View style={styles.tabs}>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'signUp' && styles.activeTab]}
          onPress={() => setActiveTab('signUp')}
        >
          <Text
            style={[
              styles.tabText,
              activeTab === 'signUp' && styles.activeTabText,
            ]}
          >
            Sign Up
          </Text>
          {activeTab === 'signUp' && <View style={styles.activeTabIndicator} />}
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.tab, activeTab === 'signIn' && styles.activeTab]}
          onPress={() => setActiveTab('signIn')}
        >
          <Text
            style={[
              styles.tabText,
              activeTab === 'signIn' && styles.activeTabText,
            ]}
          >
            Sign In
          </Text>
          {activeTab === 'signIn' && <View style={styles.activeTabIndicator} />}
        </TouchableOpacity>
      </View>

      
      {activeTab === 'signUp' ? (
        <View style={styles.form}>
          <Text style={styles.title}>Enter your phone number to create an account</Text>
          
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
                placeholder="801 111 1111"
                value={phoneNumber}
                onChangeText={setPhoneNumber}
                keyboardType="phone-pad"
                maxLength={10}
              />
            </View>
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Referral Code</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter referral code"
              value={referralCode}
              onChangeText={setReferralCode}
            />
          </View>

          <View style={styles.buttonContainer}>
            <Button
              title="Continue"
              onPress={handleSubmit}
              color={isFormValid ? '#0F40D3' : '#ddd'} 
            />
          </View>
          
        
          <Text style={styles.password}>Forgot password?</Text>
        </View>
      ) : (
        <View style={styles.form}>
          <Text style={styles.formText}>Sign In Form</Text>
        </View>
      )}

  
      <View style={styles.footer}>
        <Text style={styles.footerText}>Have an account already? </Text>
        <TouchableOpacity>
          <Text style={styles.loginText}>Log in</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0F40D3',
  },
  title: {
    fontSize: 16,
    fontWeight: '500',
    color: '#464A4F',
    marginBottom: 20,
  },
  tabs: {
    flexDirection: 'row',
    borderBottomWidth: 2,
    width: '100%',
    backgroundColor: '#FFF',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderColor: '#ddd',
    position: 'relative',
  },
  tab: {
    flex: 1,
    paddingVertical: 12,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 3,
    borderColor: 'transparent',
    position: 'relative',
  },
  activeTab: {
    borderBottomWidth: 3,
    // borderColor: 'red',
  },
  tabText: {
    fontSize: 24,
    color: '#000',
    fontWeight: '800',
  },
  activeTabText: {
    color: '#000',
  },
  activeTabIndicator: {
    position: 'absolute',
    bottom: -4,
    left: '25%',
    width: '40%',
    height: 3,
    backgroundColor: '#000',
  },
  form: {
    width: '100%',
    padding: 20,
    backgroundColor: '#EAEFFD',
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
  },
  formText: {
    fontSize: 18,
    color: '#333',
    textAlign: 'center',
    marginTop: 20,
  },
  inputContainer: {
    marginBottom: 15,
  },
  label: {
    fontSize: 14,
    marginBottom: 6,
    color: '#464A4F',
    fontWeight: '500',
  },
  input: {
    width: '100%',
    padding: 12,
    borderWidth: 1,
    borderColor: '#CCC',
    borderRadius: 8,
    fontWeight: 300,
    fontSize: 14,
    backgroundColor: '#F5F7FF',
  },
  phoneInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#CCC',
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: '#F5F7FF',
  },
  countryCode: {
    padding: 10,
    backgroundColor: '#EAEFFC',
    fontSize: 14,
    color: '#333',
  },
  phoneInput: {
    flex: 1,
    padding: 10,
    fontSize: 14,
    color: '#333',
  },
  buttonContainer: {
    marginVertical: 10,
    width: '60%',
    textAlign: 'center',
    margin: 'auto',
    borderRadius: 32,
    overflow: 'hidden',
    backgroundColor: '#E2E2E2',
  },
  password: {
    color: '#0F40D3',
    textAlign: 'center',
    marginVertical: 10,
    fontSize: 16,
    fontWeight: '500',
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  footerText: {
    color: '#f1f1f1',
    fontSize: 14,
  },
  loginText: {
    color: '#fff',
    textDecorationLine: 'underline',
    fontSize: 14,
  },
});

export default SignUp;