import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home';
import CurrencyPage from './screens/CurrencyPage';
import LoginPage from './screens/LoginPage';
import SettingsPage from './screens/SettingsPage';
import AddCurrencyPage from './screens/AddCurrencyPage';
import CurrencyList from './screens/CurrencyList';
import Feedback from './screens/Feedback';
import WithdrawalPage from './screens/WithdrawalPage';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    
    <NavigationContainer>
    <Stack.Navigator  initialRouteName="Home">
    <Stack.Screen name='Home' component={Home} options={{
      headerShown: false
    }}></Stack.Screen>
    <Stack.Screen name='currencyPage' component={CurrencyPage} options={{
      headerShown: false,
      headerTitle: 'Convert Here!',
      headerTransparent: 'systemMaterial',
    }}></Stack.Screen>

    <Stack.Screen name='LoginPage' component={LoginPage} options={{
      headerTitle: 'Login Here!',
      headerTransparent: 'systemMaterial',
      headerTitleAlign: 'center',
    }}></Stack.Screen>

    <Stack.Screen name='SettingsPage' component={SettingsPage} options={{
      headerTitle: 'Settings'
    }}>
    </Stack.Screen>

    <Stack.Screen name='AddCurrencyPage' component={AddCurrencyPage} options={{
      headerTitle: 'Add Currency'
    }}>
    </Stack.Screen>

    <Stack.Screen name='CurrencyList' component={CurrencyList} options={{
      headerTitle: 'Currency List'
    }}>
    </Stack.Screen>

    <Stack.Screen name='Feedback' component={Feedback} options={{
      headerShown: false
    }}>
    </Stack.Screen>

    <Stack.Screen name='WithdrawalPage' component={WithdrawalPage} options={{
      headerTitle: 'Money Transfer',
    }}>
    </Stack.Screen>
    </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  
});
