import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Pressable,
  Image,
} from 'react-native';
import Fontisto from '@expo/vector-icons/Fontisto';

const ManHinh5 = () => {
  return (
    <View style={styles.container}>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ fontWeight: 'bold', fontSize: 25 }}>LOGIN</Text>
      </View>
      <View style={{ flex: 1.8, justifyContent: 'space-between' }}>
        <TextInput placeholder="Email" style={styles.textInput} />
        <View>
        <Fontisto
          style={{ position: 'absolute', alignSelf: 'flex-end', marginTop: 15, marginRight: 10}}
          name="eye"
          size={24}
          color="black"
        />
        <TextInput placeholder="Password" style={styles.textInput} />
        </View>
      </View>
      <View style={{ flex: 2, justifyContent: 'center' }}>
        <Pressable style={styles.button}>
          <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#FFFFFF' }}>
            LOGIN
          </Text>
        </Pressable>
        <View
          style={{
            flex: 0.7,
            justifyContent: 'space-around',
            alignItems: 'center',
          }}>
          <Text>When you agree to terms and conditions</Text>
          <Text style={{ color: '#5D25FA' }}>Forgot your password?</Text>
          <Text>Or login with</Text>
        </View>
      </View>
      <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>
        <View
          style={{
            width: 110,
            height: 45,
            backgroundColor: '#25479B',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 2,
            borderWidth: 0.5,
            borderColor: '#25479B',
          }}>
          <Image source={require('./assets/icofacebook-19245101.png')} />
        </View>
        <View
          style={{
            width: 110,
            height: 45,
            backgroundColor: '#0F8EE0',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 2,
            borderWidth: 0.5,
            borderColor: '#25479B',
          }}>
          <Image source={require('./assets/icozalo.png')} />
        </View>
        <View
          style={{
            width: 110,
            height: 45,
            backgroundColor: '',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 2,
            borderWidth: 0.5,
            borderColor: '#25479B',
          }}>
          <Image source={require('./assets/icogoogle1.png')} />
        </View>
      </View>
    </View>
  );
};

export default ManHinh5;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 8,
    backgroundColor: '#31AA5230',
  },

  textInput: {
    backgroundColor: '#C4C4C44D',
    padding: 8,
    fontSize: 18,
    height: 54,
  },

  button: {
    backgroundColor: '#E53935',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,
  },
});
