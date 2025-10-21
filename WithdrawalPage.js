import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Dimensions, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Picker } from '@react-native-picker/picker';

const WithdrawalPage = () => {
  const navigation = useNavigation();

  const [selectedSenderBank, setSelectedSenderBank] = useState('');
  const [selectedReceiverBank, setSelectedReceiverBank] = useState('');
  const [senderAccountNo, setSenderAccountNo] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvcNumber, setCvcNumber] = useState('');
  const [amount, setAmount] = useState('');

  const handleSend = () => {
    if (!selectedSenderBank || !selectedReceiverBank || !senderAccountNo || !expiryDate || !cvcNumber || !amount) {
        Alert.alert('Error', 'Please fill in all the fields');
      } else {
        alert('You have successfully transferred your money');
      }

    // Reset form fields
    setSelectedSenderBank('');
    setSelectedReceiverBank('');
    setSenderAccountNo('');
    setExpiryDate('');
    setCvcNumber('');
    setAmount('');
  };

  const handleBack = () => {
    navigation.goBack(); // Navigate back to the previous screen
  };

  return (
    <View style={styles.container}>
      <View style={styles.senderDetailContainer}>
        <Text style={styles.sectionTitle}>Sender's Detail</Text>
        <Picker
          style={styles.dropdown}
          selectedValue={selectedSenderBank}
          onValueChange={(itemValue) => setSelectedSenderBank(itemValue)}
        >
          <Picker.Item label="Choose Bank" value="" />
          <Picker.Item label="Bank Alfalah" value="Bank Alfalah" />
          <Picker.Item label="Easypaisa" value="Easypaisa" />
          {/* Add more bank options */}
        </Picker>
        {/* More inputs and components */}
        <TextInput
          style={styles.input}
          value={senderAccountNo}
          onChangeText={setSenderAccountNo}
          placeholder="Account No"
        />
        <View style={styles.cardDetailsContainer}>
          {/* Input fields for expiry date and CVC */}
          {/* Example: */}
          <TextInput
            style={[styles.input, styles.smallInput]}
            value={expiryDate}
            onChangeText={setExpiryDate}
            placeholder="Expiry Date"
          />
          <TextInput
            style={[styles.input, styles.smallInput]}
            value={cvcNumber}
            onChangeText={setCvcNumber}
            placeholder="CVC"
          />
        </View>
        {/* Input field for amount */}
        {/* Example: */}
        <TextInput
          style={styles.input}
          value={amount}
          onChangeText={setAmount}
          placeholder="Amount"
        />
      </View>

      <View style={styles.receiverDetailContainer}>
        <Text style={styles.sectionTitle}>Receiver's Detail</Text>
        <Picker
          style={[styles.dropdown, {borderRadius: 10}]}
          selectedValue={selectedReceiverBank}
          onValueChange={(itemValue) => setSelectedReceiverBank(itemValue)}
        >
          <Picker.Item label="Choose Bank" value="" />
          <Picker.Item label="Bank Alfalah" value="Bank 1" />
          <Picker.Item label="Easypaisa" value="Bank 2" />
          {/* Add more bank options */}
        </Picker>
        {/* More inputs and components */}
        <TextInput
          style={styles.input}
          value={senderAccountNo}
          onChangeText={setSenderAccountNo}
          placeholder="Account No"
        />
        </View>

        {/* Send and Back buttons */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.sendButton} onPress={handleSend}>
            <Text style={styles.sendButtonText}>Send</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.backButton} onPress={handleBack}>
            <Text style={styles.backButtonText}>Back</Text>
          </TouchableOpacity>
        </View>
    </View>
  );
};

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 20
  },
  senderDetailContainer: {
    backgroundColor: '#78866B',
    padding: 20,
    borderRadius: 10
  },
  receiverDetailContainer: {
    backgroundColor: '#78866B',
    marginTop: 16,
    padding: 20,
    borderRadius: 10,
    height: 280
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#ffffff',
  },
  dropdown: {
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 18,
    backgroundColor: '#ffffff',
    borderRadius: 10
  },
  input: {
    borderWidth: 1,
    borderColor: 'black',
    padding: 10,
    marginBottom: 18,
    backgroundColor: '#ffffff',
    borderRadius: 10
  },
  smallInput: {
    width: 150
  },
  cardDetailsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 16,
  },
  sendButton: {
    backgroundColor: '#5C6C51',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
    paddingLeft: 20,
    paddingRight: 20
  },
  sendButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    
  },
  backButton: {
    backgroundColor: '#d0d9cd',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 20,
    paddingRight: 20
  },
  backButtonText: {
    color: '#000000',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default WithdrawalPage;