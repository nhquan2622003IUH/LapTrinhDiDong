import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
import store from './components/store'; 

import Screen01 from './components/Screen01';
import Screen02 from './components/Screen02';
import Screen03 from './components/Screen03';

const Stack = createNativeStackNavigator();

const ToDoApp = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Start">
        <Stack.Screen
          name="Screen01"
          component={Screen01}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Screen02" component={Screen02} />
        <Stack.Screen name="Screen03" component={Screen03} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default function Root() {
  return (
    <Provider store={store}>
      <ToDoApp />
    </Provider>
  );
}

