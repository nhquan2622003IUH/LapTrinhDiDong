import { Text, SafeAreaView, StyleSheet } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Cart from './components/Cart'
import Details from './components/Details';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Cart'>
        <Stack.Screen name='Cart' component={Cart} options={{headerShown: false}}></Stack.Screen>
        <Stack.Screen name='Details' component={Details} options={{headerShown: true}}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

