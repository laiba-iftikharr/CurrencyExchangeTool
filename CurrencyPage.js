import React,{useState} from 'react';
import { View, Text, TextInput,Modal, StatusBar, StyleSheet, TouchableOpacity} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Container from '../components/Container';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';

const CurrencyPage = () => {
    const navigation = useNavigation();

  const goToLoginPage = () => {
    navigation.navigate('LoginPage');
  };

  const goToSettingsPage = () => {
    navigation.navigate('SettingsPage');
  };

  const [amount, setAmount] = useState('');
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('EUR');
  const [convertedAmount, setConvertedAmount] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [showEmptyError, setShowEmptyError] = useState(false);
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
  'HKD',]);

  const convertCurrency = async () => {
    const API_KEY = 'd7c58eeb85e656039f6faf5c'; 
    if (!isNaN(amount) && amount !== '') {
        const response = await fetch(
          `https://api.exchangerate-api.com/v4/latest/${fromCurrency}`
        );
    const data = await response.json();
    const rate = data.rates[toCurrency];
    console.log(rate);
    const convertedValue = amount * rate;
     // Set the converted amount after conversion
    setConvertedAmount(convertedValue.toFixed(2));
    setAmount('');
    // Reset the currencies to their initial values
    setFromCurrency('USD');
    setToCurrency('EUR');
    setShowModal(true);
    setShowEmptyError(false);
  }else{
    setShowEmptyError(true);
  }
};

  return (
    <View style = {{flex:1, backgroundColor:'#78866B',  paddingTop: 25}}>

    <StatusBar barStyle="light-content" backgroundColor="#000" />
    <View style={{ backgroundColor:'#fff',flexDirection: 'row', alignItems: 'center', paddingVertical: 15, marginTop: -25, marginBottom: 45}}>
    <Text style={styles.title}>Convert Here! </Text>
      <TouchableOpacity onPress={goToSettingsPage}>
          <MaterialIcons name="settings" size={28} color="#78866B" />
        </TouchableOpacity>
    </View>

      <Text 
      style = {styles.text}>Enter Amount you want to convert</Text>
      <View style = {styles.inputWrapper}>
      <TextInput
        style={[styles.input, { outline: 'none' }, {height: 50}]}
        value={amount}
        onChangeText={(text) => {
            setAmount(text);
            setShowEmptyError(false); // Hide the error message
          }}
        keyboardType="numeric"
        placeholder="Type a numeric value"
        placeholderTextColor="#596275"
      />
      </View>
      {showEmptyError && <Text style={styles.emptyErrorText}>Invalid Input! Please enter a valid value</Text>}

      <View style={styles.column}>
        <Text style={styles.select}>Select your Currency: </Text>
        <Picker
          style={styles.picker}
          selectedValue={fromCurrency}
          onValueChange={(value) => setFromCurrency(value)}
        >
        {currencies.map((currency) => (
            <Picker.Item key={currency} label={currency} value={currency} />
          ))}
        </Picker>
      </View>

      <View style={styles.column}>
        <Text style={styles.select}>Convert into: </Text>
        <Picker
          style={styles.picker}
          selectedValue={toCurrency}
          onValueChange={(value) => setToCurrency(value)}
        >
        {currencies.map((currency) => (
            <Picker.Item key={currency} label={currency} value={currency} />
          ))}
        </Picker>
      </View>


      <View style={styles.buttonView}>
      <TouchableOpacity
      style = {styles.convertButton}
      onPress={convertCurrency}>
      <Text style={styles.buttonText}>Convert</Text>
      </TouchableOpacity>
      </View>

       {/* Conditionally render the converted value */}

       <Modal visible={showModal} animationType="slide" transparent>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            {/* Render the converted text and value */}
            <Text style={styles.convertedText}>Final Rate</Text>
            <Text style={styles.convertedValue}>{convertedAmount}</Text>

            <TouchableOpacity onPress={() => setShowModal(false)}>
              <Text style={styles.closeButton}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

    <View style={styles.proceedBtn}>
      <TouchableOpacity onPress={goToLoginPage} style={{ flexDirection: 'row', alignItems: 'center'}}>
      <Text style={{ marginLeft: 5, marginRight: 3 , color: '#000', fontSize:16}}>Continue to transaction</Text>
      <MaterialIcons name="keyboard-arrow-right" size={24} color="#000" />
    </TouchableOpacity>
    </View>
    </View>
  )
};

const styles = StyleSheet.create({
    title: {
      fontSize: 28,
      fontWeight: 'bold',
      paddingLeft: 32,
      paddingRight: 150,
      
    },
    text:{
      fontSize: 18,
      fontWeight: '400',
      marginBottom: 20,
      color: '#d0d9cd', 
      paddingLeft: 30    
    },
    input: {
      width: '75%',
      height: 50,
      paddingHorizontal: 15,
      marginBottom: 26,
      borderRadius: 20,
      backgroundColor: '#b2beb5',
      borderWidth: 0, 
      borderColor: 'transparent', 
      marginLeft: 45 
    },

    inputWrapper:{
        height: 80
    },

    emptyErrorText: {
        color: '#FFC312',
        fontSize: 14,
        marginBottom: 16,
        marginTop: -25,
        textAlign: 'center'
      },

    select:{
      fontSize: 18,
      fontWeight: '400',
      marginBottom: 20,
      color: '#d0d9cd', 
      paddingLeft: 10
    },
    column: {
      flexDirection: 'column',
      marginBottom: 50,
      paddingLeft: 20,
      paddingRight: 20,
    },
    picker: {
      flex: 1,
      width: '80%',
      height: 80,
      marginBottom: 0,
      paddingHorizontal: 15,
      paddingVertical: 15,
      borderWidth: .5,
      borderColor: '#b2beb5',
      backgroundColor: 'transparent',
      marginLeft: 30,
      borderRadius: 10,
      paddingRight: 20
    },
    convertedText: {
        fontSize: 25,
        fontWeight: '800',
        marginBottom: 16,
        alignItems: 'center'
    },
    convertedValue: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 16,
        borderWidth: 1,
        paddingLeft:20,
        paddingRight:20,
        paddingTop:10,
        paddingBottom:10,
        borderRadius: 10,
        borderColor: '#78866B',
        backgroundColor: '#78866B',
        color: '#fff',
        marginBottom: 30
    },

    convertButton: {
      backgroundColor: '#d0d9cd', 
      width: '50%',
      height: 60,
      color: '78866B', 
      borderRadius: 8, 
      padding: 10, 
      marginVertical: 20,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 50
    },
    buttonText:{
        color: '#000',
        fontSize: 22, // Set font size
        fontWeight: '800',
        letterSpacing: 2,
        textTransform: 'uppercase'
    },
    buttonView:{
        alignItems: 'center',
        justifyContent: 'center'
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
        borderRadius: 10,
        width: 250,
        height: 200,
        alignItems: 'center',
        justifyContent: 'center'
      },
      closeButton:{
        fontSize: 14,
        color: '#78866B'
      },
      proceedBtn:{
        backgroundColor: '#d0d9cd',
        padding: 10,
        width: 180,
        borderRadius: 10,
        textAlign: 'center',
        marginLeft: 185,
        marginTop: 80
      }
  });

export default CurrencyPage;