import React from 'react';
import { Text, View, StyleSheet, TextInput, Pressable } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const ManHinh4 = () => {
  return (
    <LinearGradient
      colors={['#C7F4F7', '#D1F4F6', '#E5F4F5', '#00CCF9']}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={styles.container}>
      <View style={{flex: 2, justifyContent: 'space-around', alignItems: 'center'}}>
        <Text style={{fontSize: 60, fontWeight: 'bold'}}>CODE</Text>
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>VERIFICATION</Text>
      </View>
      <View style={{flex: 1, justifyContent: 'space-between'}}>
        <Text style={{fontSize: 15, fontWeight: 'bold', textAlign: 'center'}}>Enter ontime password sent on ++849092605798</Text>
        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
          <TextInput style={styles.textInput}/>
          <TextInput style={styles.textInput}/>
          <TextInput style={styles.textInput}/>
          <TextInput style={styles.textInput}/>
          <TextInput style={styles.textInput}/>
          <TextInput style={styles.textInput}/>
        </View>
      </View>
      <View style={{flex: 1.5, marginTop: 30}}>
        <Pressable style={styles.button}>
        <Text style={{fontSize: 18, fontWeight: 'bold'}}>NEXT</Text>
        </Pressable>
      </View>
    </LinearGradient>
  );
};

export default ManHinh4;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 8,
  },

  button: {
    backgroundColor: '#E3C000',
    padding: 8,
    justifyContent: 'center',
    alignItems: 'center'
  },
  
  textInput: {
    borderWidth: 1,
    width: 50,
    height: 50
  }
});
