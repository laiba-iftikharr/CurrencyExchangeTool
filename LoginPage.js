import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Dimensions, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const LoginPage = () => {
  const navigation = useNavigation();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (!username || !password) {
      Alert.alert('Error', 'Please fill in all the fields');

    } else {
      navigation.navigate('WithdrawalPage');
    }
  };

  const validateUsername = () => {
    const regex = /^[a-zA-Z0-9_]+$/; // Regular expression for allowed characters
    if (!username.match(regex)) {
      Alert.alert('Invalid Username', 'Username should only contain letters, numbers, and underscore (_).', [{ text: 'OK', onPress: clearUsername }]);
    } else if (username.includes(' ')) {
      Alert.alert('Invalid Username', 'Username should not contain spaces.', [{ text: 'OK', onPress: clearUsername }]);
    } else {
      navigation.navigate('WithdrawalPage');
    }
  };
  
  const clearUsername = () => {
    setUsername('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login Page</Text>
      <TextInput
        style={styles.input}
        value={username}
        onChangeText={setUsername}
        placeholder="Username"
        onBlur={validateUsername}
      />
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        placeholder="Password"
        secureTextEntry
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
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
    backgroundColor: '#78866B',
    paddingTop: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#fff',
  },
  input: {
    borderWidth: 1,
    borderColor: 'black',
    padding: 10,
    marginBottom: 10,
    width: windowWidth * 0.8,
    backgroundColor: '#fff',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: windowWidth * 0.8,
  },
  button: {
    backgroundColor: '#d0d9cd',
    width: '40%',
    height: 60,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#000',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default LoginPage;