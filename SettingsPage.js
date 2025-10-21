import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Switch, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';
import AddCurrencyPage from './AddCurrencyPage';
import CurrencyList from './CurrencyList';

const SettingsPage = () => {
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
  const navigation = useNavigation();
  const [darkMode, setDarkMode] = useState(false);

  const handleDarkModeToggle = (isEnabled) => {
    // Handle the dark mode toggle
    console.log('Dark Mode:', isEnabled);
    setDarkMode(isEnabled);
  };

  const settingsOptions = [
    { key: 'addCurrency', label: 'Add Currency', icon: 'add' },
    { key: 'currencyList', label: 'Currency List', icon: 'attach-money'},
    { key: 'darkMode', label: 'Dark Mode', switch: true, onValueChange: handleDarkModeToggle, icon: darkMode ? 'brightness-3' : 'brightness-7' },
    { key: 'rateApp', label: 'Rate App', icon: 'star' },
  ];

  const renderOptionItem = ({ item }) => {
    const handlePress = () => {
      if (item.key === 'addCurrency') {
        navigation.navigate('AddCurrencyPage', { currencies: currencies, setCurrencies: setCurrencies });
      } else if (item.key === 'currencyList') {
        navigation.navigate('CurrencyList');
      } else if (item.key === 'darkMode') {
        handleDarkModeToggle(!darkMode);
      } else if (item.key === 'rateApp') {
        navigation.navigate('Feedback');
      }
    };

    return (
      <TouchableOpacity style={styles.optionItem} onPress={handlePress}>
        <View style={styles.optionIcon}>
          <MaterialIcons name={item.icon} size={24} color="#000" />
        </View>
        <Text style={styles.optionLabel}>{item.label}</Text>
        {item.switch && (
          <Switch
            value={darkMode}
            onValueChange={item.onValueChange}
            trackColor={{ false: '#ccc', true: '#78866B' }}
            thumbColor={darkMode ? '#fff' : '#f4f3f4'}
          />
        )}
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={settingsOptions}
        renderItem={renderOptionItem}
        keyExtractor={(item) => item.key}
        style={styles.optionList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#78866B',
    paddingTop: 10,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  optionList: {
    marginTop: 20,
  },
  optionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  optionIcon: {
    marginRight: 10,
  },
  optionLabel: {
    fontSize: 16,
    flex: 1,
  },
});

export default SettingsPage;
