import React from 'react';
import {
  Text,
  View,
  Image,
  Pressable,
  TextInput,
  StyleSheet,
} from 'react-native';
import Fontisto from '@expo/vector-icons/Fontisto';
import { LinearGradient } from 'expo-linear-gradient';

const ManHinh3 = () => {
  return (
    <LinearGradient
      colors={['#C7F4F7', '#D1F4F6', '#E5F4F5', '#00CCF9']}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={styles.container}>
        <View
          style={{
            flex: 1,
            justifyContent: 'space-around',
            alignItems: 'center',
          }}>
          <Image source={require('./assets/lock-1528791.png')} />
          <Text
            style={{ fontSize: 25, fontWeight: 'bold', textAlign: 'center' }}>
            FORGET{'\n'}PASSWORD
          </Text>
          <Text
            style={{ fontSize: 15, fontWeight: 'bold', textAlign: 'center' }}>
            Provide your account's email for which you want to reset your
            password
          </Text>
          <View style={{ backgroundColor: 'yellow' }}>
            <Fontisto
              name="email"
              size={24}
              color="black"
              style={{ position: 'absolute', marginTop: 10, marginLeft: 8 }}
            />
            <TextInput
              placeholder="Email"
              style={{
                width: 305,
                height: 45,
                borderWidth: 1,
                paddingLeft: 40,
                backgroundColor: '#C4C4C4',
              }}
            />
          </View>

          <Pressable style={styles.button}>
            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>NEXT</Text>
          </Pressable>
        </View>
    </LinearGradient>
  );
};

export default ManHinh3;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 8,
  },

  button: {
    backgroundColor: '#E3C000',
    padding: 8,
    width: 305,
    alignItems: 'center',
  },
});
