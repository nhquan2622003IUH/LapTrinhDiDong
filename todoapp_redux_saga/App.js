import { Text, SafeAreaView, StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import store from './components/store';
import { name as appName } from './app.json';

import Start from './components/Start';
import Task from './components/Task';
import Add from './components/Add';

const Stack = createNativeStackNavigator();

const Home = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Start">
        <Stack.Screen
          name="Start"
          component={Start}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Task" component={Task} />
        <Stack.Screen name="Add" component={Add} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default function App() {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
}

AppRegistry.registerComponent(appName, () => App);
