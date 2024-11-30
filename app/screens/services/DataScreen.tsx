import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Picker } from '@react-native-picker/picker'; 
import { StackNavigationProp } from '@react-navigation/stack'; // For navigation

// Define the Provider type
type Provider = 'mtn' | 'airtel' | 'glo' | '9mobile';

export default function DataScreen() {
  const navigation = useNavigation<StackNavigationProp<any>>();

  // States for the input fields
  const [phoneNumber, setPhoneNumber] = useState('');
  const [amount, setAmount] = useState('');
  const [provider, setProvider] = useState<Provider | null>(null); // Type the provider state
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isSuccess, setIsSuccess] = useState(true);
  const [selectedBundle, setSelectedBundle] = useState<string>(""); // Default to an empty string


  const bundles = [
    { label: '500MB - ₦500', value: '500' },
    { label: '1GB - ₦1000', value: '1000' },
    { label: '2GB - ₦2000', value: '2000' },
    { label: '5GB - ₦5000', value: '5000' },
  ];

  const providerImages: Record<Provider, any> = {
    mtn: require('../../../assets/images/image 29.png'),
    airtel: require('../../../assets/images/image 27.png'),
    glo: require('../../../assets/images/image 28.png'),
    '9mobile': require('../../../assets/images/Frame 1340 (1).png'),
  };


  // Check if all fields are filled
  const isButtonEnabled = phoneNumber.length === 10 && selectedBundle !== "" && provider;


  const handleContinue = () => {
    navigation.navigate('PinScreen', { phoneNumber, amount: selectedBundle, provider, source: 'Data'  });
  };


  
  return (
    <View style={styles.screen}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          accessible
          accessibilityLabel="Go Back"
        >
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.screenText}>Buy data</Text>
        <Text style={styles.subHeaderText}>
        Buy data for yourself or others
        </Text>
      </View>

      {/* Content */}
      <View style={styles.container}>
        {/* Providers Section */}
        <View style={styles.imgContainer}>
          <Text>Select a provider</Text>
          <View style={styles.providerContainer}>
            {['9mobile', 'airtel', 'glo', 'mtn'].map((currentProvider) => (
              <TouchableOpacity
                key={currentProvider}
                onPress={() => setProvider(currentProvider as Provider)} // Cast to Provider type
                style={[
                  styles.providerImageContainer,
                  currentProvider === provider ? styles.selectedProvider : null,
                ]}
              >
                <Image
                  source={providerImages[currentProvider as Provider]} // Cast to Provider type
                  style={styles.providerImage}
                  accessibilityLabel={`${currentProvider} logo`}
                />
                <Text style={styles.texts}>{currentProvider}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Input Section */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Phone Number</Text>
          <View style={styles.phoneInputContainer}>
            <Text style={styles.countryCode}>+234</Text>
            <TextInput
              style={styles.phoneInput}
              placeholder="801 111 1111"
              keyboardType="phone-pad"
              maxLength={10}
              value={phoneNumber}
              onChangeText={setPhoneNumber}
            />
          </View>

          <Text style={[styles.label, { marginTop: 20 }]}>Data Bundle</Text>
          <View style={styles.dropdownContainer}>
          <Picker
  selectedValue={selectedBundle}
  onValueChange={(itemValue) => setSelectedBundle(itemValue)}
  style={styles.picker}
>
  <Picker.Item label="Select a bundle" value="" /> {/* Use empty string as default */}
  {bundles.map((bundle) => (
    <Picker.Item key={bundle.value} label={bundle.label} value={bundle.value} />
  ))}
</Picker>

          </View>
         

          {/* Continue Button */}
          <TouchableOpacity
            style={[
              styles.continueButton,
              isButtonEnabled ? styles.enabledButton : styles.disabledButton,
            ]}
            disabled={!isButtonEnabled}
            onPress={handleContinue}
          >
            <Text style={styles.continueButtonText}>Continue</Text>
          </TouchableOpacity>
        </View>
      </View>

     
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: '#0F40D3',
    height: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  header: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: '#0F40D3',
    width: '100%',
    padding: 20,
    marginTop: 40,
  },
  screenText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 20,
  },
  subHeaderText: {
    fontSize: 16,
    color: '#fff',
    marginVertical: 10,
    textAlign: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#0F40D3',
    width: '100%',
    alignItems: 'center',
  },
  imgContainer: {
    width: '100%',
    backgroundColor: '#fff',
    padding: 20,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  providerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
   
  },
  texts:{
    textAlign: "center",
    textTransform: "capitalize",
    marginTop: 5,
    fontWeight: 500,
    fontSize: 12,
  },
  providerImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  selectedProvider: {
    borderColor: '#0F40D3',
    borderWidth: 3,
  },
  providerImageContainer: {
    margin: 5,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'transparent',
  },
  inputContainer: {
    backgroundColor: '#EAEFFD',
    width: '100%',
    flex: 1,
    padding: 20,
    paddingBottom: 0,
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
  label: {
    fontSize: 16,
    color: '#333',
    marginBottom: 8,
  },
  input: {
    width: '100%',
    height: 45,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
    marginBottom: 20,
    backgroundColor: '#fff',
  },
  dropdownContainer: {
    borderWidth: 1,
    borderColor: '#CCC',
    borderRadius: 8,
    backgroundColor: '#F5F7FF',
    marginBottom: 20,
  },
  picker: {
    height: 50,
    width: '100%',
    color: '#333',
  },
  numContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },

  continueButton: {
    backgroundColor: '#0F40D3',
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    marginTop: 70,
  },
  enabledButton: {
    backgroundColor: '#0F40D3',
  },
  disabledButton: {
    backgroundColor: '#B3C1E0',
  },
  continueButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },
});
