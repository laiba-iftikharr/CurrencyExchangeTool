import React, { useEffect, useState } from "react";
import { View, Text, FlatList , StyleSheet} from 'react-native';

const CurrencyList = () => {
  const [currencies, setCurrencies] = useState([]);

  useEffect(() => {
    // Fetch the currency data from the API
    fetch('https://api.exchangerate-api.com/v4/latest/USD')
      .then(response => response.json())
      .then(data => {
        // Extract the currencies from the response
        const currencyList = Object.keys(data.rates);
        setCurrencies(currencyList);
      })
      .catch(error => {
        console.log('Error fetching currency data:', error);
      });
  }, []);

  return (
    <View style={{backgroundColor: '#78866B'}}>
      
      <FlatList
        style={styles.currenciesList}
        data={currencies}
        renderItem={({ item }) => (
          <Text style={styles.item}>{item}</Text>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({

    currenciesList:{
        paddingTop: 20,
        paddingLeft: 20,
        paddingRight: 20
    },
    item:{
        paddingBottom: 10,
        paddingTop: 10,
        fontSize: 17,
        color: '#000',
        borderBottomWidth: .5,
        borderBottomColor: '#d0d9cd'
    }
});

export default CurrencyList;
