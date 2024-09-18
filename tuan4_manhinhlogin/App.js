import {
  Text,
  SafeAreaView,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import {useState} from 'react'
import { LinearGradient } from 'expo-linear-gradient';

import FontAwesome from '@expo/vector-icons/FontAwesome';
import Fontisto from '@expo/vector-icons/Fontisto';

export default function App() {

const [login, setLogin] = useState('Forgot Your Password?');

  return (
    <LinearGradient
      colors={['#FBCB00', '#BF9A00']}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={styles.container}>
    <SafeAreaView style={styles.container}>
      <View style={{ flex: 1, marginRight: 230, justifyContent: 'center' }}>
        <Text style={{ fontSize: 30, fontWeight: 'bold' }}>LOGIN</Text>
      </View>

      <View style={{ flex: 1 }}>
        <View>
          <FontAwesome
            style={{ position: 'absolute', marginTop: 25, marginLeft: 8 }}
            name="user"
            size={24}
            color="black"
          />
          <TextInput style={styles.textInput} placeholder="Name" />
        </View>

        <View>
          <Fontisto
            style={{ position: 'absolute', marginTop: 25, marginLeft: 8 }}
            name="locked"
            size={24}
            color="black"
          />
          <Fontisto
            style={{
              position: 'absolute',
              marginRight: 8,
              alignSelf: 'flex-end',
              marginTop: 25,
            }}
            name="eye"
            size={24}
            color="black"
          />
          <TextInput
            style={styles.textInput}
            placeholder="Password"
            secureTextEntry={true}
          />
        </View>
      </View>

      <View style={{ flex: 1 }}>
        <TouchableOpacity onPress={()=>{
          setLogin('Logining')
        }} style={styles.button}>LOGIN</TouchableOpacity>
        <Text style={{ fontSize: 20, fontWeight: 'bold', marginTop: 25, alignSelf: 'center' }}>
          {login}
        </Text>
      </View>
    </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 8,
    alignItems: 'center'
  },
  button: {
    height: 45,
    width: 330,
    backgroundColor: '#060000',
    color: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
  textInput: {
    height: 54,
    width: 330,
    fontWeight: 'bold',
    fontSize: 18,
    backgroundColor: '#C4C4C44D',
    borderWidth: 1,
    borderColor: '#FFFFFF',
    marginVertical: 12,
    paddingHorizontal: 48,
    paddingVertical: 8,
  },
});
