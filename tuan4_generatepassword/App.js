import {
  Text,
  SafeAreaView,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';

var generatePassword = () => {
  return (
    Math.random().toString(36).slice(2) +
    Math.random().toString(36).toUpperCase().slice(2)
  );
};

export default function App() {
  const [password, setPassword] = useState('');

  return (
    <LinearGradient
      colors={['#3B3B98', '#C4C4C400']}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={styles.container}>
      <View
        style={{
          backgroundColor: '#23235B',
          height: '95%',
          borderRadius: 15,
          padding: 8,
        }}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'space-around',
          }}>
          <Text style={{ fontSize: 25, fontWeight: 'bold', color: '#FFFFFF' }}>
            PASSWORD{'\n'}GENERATOR
          </Text>
          <TextInput style={styles.textInput} value={password} />
        </View>

        <View style={{ flex: 1.5, justifyContent: 'space-around' }}>
          <View
            style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={styles.text}>Password length</Text>
            <Text
              style={{
                backgroundColor: '#FFFFFF',
                width: 118,
                height: 33,
                fontSize: 20,
                textAlign: 'right',
                padding: 2,
              }}>
              {password.length}
            </Text>
          </View>
          <View>
            <Text style={styles.text}>Include lower case letters</Text>
          </View>
          <View>
            <Text style={styles.text}>Include upcase letters</Text>
          </View>
          <View>
            <Text style={styles.text}>Include number</Text>
          </View>
          <View>
            <Text style={styles.text}>Include special symbol</Text>
          </View>
          <View style={{ alignItems: 'center', marginTop: 24 }}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                setPassword(generatePassword());
              }}>
              <Text
                style={{ fontSize: 18, fontWeight: 'bold', color: '#FFFFFF' }}>
                GENERATE PASSWORD
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 24,
  },
  textInput: {
    backgroundColor: '#151537',
    maxHeight: 54,
    height: 54,
    maxWidth: 297,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
    padding: 8,
  },
  button: {
    width: 269,
    height: 55,
    backgroundColor: '#3B3B98',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    color: '#FFFFFF',
  },
});
