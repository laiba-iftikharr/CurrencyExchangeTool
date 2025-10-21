import React, { useState } from 'react';
import { View, Text, TextInput, Modal, StatusBar, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';

const AddCurrencyPage = ({ route }) => {
  const navigation = useNavigation();
  
  const [newCurrency, setNewCurrency] = useState('');
  const [showDuplicateError, setShowDuplicateError] = useState(false);
  const [showEmptyError, setShowEmptyError] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const [currencies, setCurrencies] = useState(['USD', 'EUR', 'GBP', 'JPY', 'CAD', 'AUD', 'CHF', 'CNY',
  'INR',
  'RUB',
  'NZD',
  'BRL',
  'MXN',
  'SEK',
  'NOK',
  'SGD',
  'KRW',
  'TRY',
  'ZAR',
  'HKD']);

  const isValidCurrency = async (currencyCode) => {
    const response = await fetch('https://api.exchangerate-api.com/v4/latest/USD');
    const data = await response.json();

    // Check if the currency code exists in the API response
    return data.rates.hasOwnProperty(currencyCode);
  };

  const handleAddCurrency = async () => {
    if (newCurrency.trim() === '') {
      setShowEmptyError(true);
      setShowDuplicateError(false);
    } else if (currencies.includes(newCurrency)) {
      setShowDuplicateError(true);
      setShowEmptyError(false);
    } else if (!/^[A-Z]{3}$/.test(newCurrency)) {
      setShowDuplicateError(false);
      setShowEmptyError(false);
      Alert.alert('Invalid Currency Code', 'Please enter a valid currency code (3 uppercase letters).');
    } else {
      const isValid = await isValidCurrency(newCurrency);
      if (isValid) {
        // Add the new currency to the array
        currencies.push(newCurrency);
        setShowModal(true);
        setNewCurrency('');
      } else {
        Alert.alert('Invalid Currency', 'Please enter a valid currency code.');
                setNewCurrency('');
      }
    }
  };

  const closeModal = () => {
    setShowModal(false);
    navigation.navigate('SettingsPage'); 
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#000" />

      <View style={styles.content}>
        <Text style={styles.label}>Currency Code</Text>
        <TextInput
          style={[styles.input, { outline: 'none' }]}
          value={newCurrency}
          onChangeText={(text) => {
            setNewCurrency(text.toUpperCase());
            setShowDuplicateError(false);
            setShowEmptyError(false);
          }}
          placeholder="Enter currency code"
          placeholderTextColor="#ccc"
        />
        {showDuplicateError && <Text style={styles.errorText}>Currency already exists</Text>}
        {showEmptyError && <Text style={styles.errorText}>Please enter a currency code</Text>}
        <TouchableOpacity style={styles.addButton} onPress={handleAddCurrency}>
          <Text style={styles.addButtonText}>Add Currency</Text>
        </TouchableOpacity>
      </View>

      <Modal visible={showModal} animationType="fade" transparent>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalHeading}>Currency Added</Text>
            <Text style={styles.modalText}>Currency has been added to the list.</Text>
            <TouchableOpacity style={styles.modalButton} onPress={closeModal}>
              <Text style={styles.modalButtonText}>OK</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#78866B',
    paddingTop: 25,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#78866B',
  },
  content: {
    flex: 1,
    padding: 20,
    justifyContent: 'flex-start',
  },
  label: {
    fontSize: 26,
    fontWeight: '700',
    marginBottom: 16,
    color: '#fff',
  },
  input: {
    height: 50,
    paddingHorizontal: 10,
    marginBottom: 16,
    borderRadius: 8,
    backgroundColor: '#fff',
  },
  addButton: {
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  addButtonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#78866B',
  },
  errorText: {
    color: '#FFC312',
    fontSize: 14,
    marginBottom: 16,
    marginTop: -15,
    textAlign: 'center',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 8,
    alignItems: 'center',
  },
  modalHeading: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#78866B'
  },
  modalText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  modalButton: {
    color: '#78866B',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  modalButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#78866B',
  },
});

export default AddCurrencyPage;
