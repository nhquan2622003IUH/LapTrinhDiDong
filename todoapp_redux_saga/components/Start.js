import {
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  View,
  TextInput,
  Pressable,
} from 'react-native';
import React from 'react';
import Fontisto from '@expo/vector-icons/Fontisto';
import { useNavigation } from '@react-navigation/native';

export default function App() {
  const navigation = useNavigation();
  const [username, setUserName] = React.useState('');
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Image source={require('../assets/note.png')} />
        <Text style={styles.manageYourTask}>MANAGE YOUR{'\n'}TASK</Text>
        <View style={styles.inputContainer}>
          <Fontisto
            style={{ position: 'absolute', marginLeft: '10%' }}
            name="email"
            size={24}
            color="black"
          />
          <TextInput
            style={styles.inputEmail}
            placeholder="Enter your name"
            onChangeText={(text) => setUserName(text)}
          />
        </View>
        <Pressable
          style={styles.button}
          onPress={() => {
            navigation.navigate('Task', {user: username});
          }}>
          <Text style={{ color: '#ffffff' }}>GET STARTED</Text>
        </Pressable>
        <View style={styles.space}></View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
    alignItems: 'center',
    backgroundColor: '#ffffff',
    justifyContent: 'flex-end',
  },
  button: {
    width: '60%',
    padding: 10,
    backgroundColor: '#00BDD6',
    alignItems: 'center',
    borderRadius: 10,
  },
  manageYourTask: {
    color: '#8353E2',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  inputContainer: {
    width: '100%',
    marginVertical: 66,
    justifyContent: 'center',
  },
  inputEmail: {
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    paddingLeft: '12%',
    width: '85%',
    alignSelf: 'center',
  },
  space: {
    height: '15%',
  },
});
