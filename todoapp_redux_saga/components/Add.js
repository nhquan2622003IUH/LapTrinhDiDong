import {
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  View,
  TextInput,
  Pressable,
} from 'react-native';
import { useState } from 'react';
import axios from 'axios';

const addJob = async (job) => {
  try {
    const res = await axios.post(
      'https://66fc8f65c3a184a84d174ff9.mockapi.io/myjob',
      job
    );
  } catch (error) {
    console.log(error);
  }
};

export default function App() {
  const [job, setJob] = useState();
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.avatarContainer}>
          <Image
            style={styles.avatarImage}
            source={require('../assets/avatar.png')}
          />
          <View>
            <Text style={{ textAlign: 'center', fontWeight: 'bold' }}>
              Hi HongQuan
            </Text>
            <Text style={{ color: '#171A1F' }}>Have a grate day a head</Text>
          </View>
        </View>

        <View style={styles.center}>
          <Text style={styles.textAddYourJob}>ADD YOUR JOB</Text>

          <View style={styles.inputContainer}>
            <Image
              style={{ position: 'absolute', marginLeft: '10%' }}
              source={require('../assets/item.png')}
            />
            <TextInput
              style={styles.inputJob}
              placeholder="Input your job"
              onChangeText={(newText) => setJob({ title: newText })}
              defaultValue={job}
            />
          </View>
          <Pressable
            style={styles.button}
            onPress={() => {
              addJob(job);
            }}>
            <Text style={{ color: '#ffffff' }}>FINISH</Text>
          </Pressable>
          <View style={styles.imageContainer}>
            <Image source={require('../assets/note.png')} />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
  },
  avatarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginBottom: 20,
  },
  avatarImage: {
    borderWidth: 1,
    borderRadius: 50,
    marginRight: 10,
  },
  center: {
    flex: 1,
    alignItems: 'center',
  },
  button: {
    width: '60%',
    padding: 10,
    backgroundColor: '#00BDD6',
    alignItems: 'center',
    borderRadius: 10,
  },
  inputContainer: {
    width: '100%',
    marginVertical: 66,
    justifyContent: 'center',
  },
  inputJob: {
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    paddingLeft: '12%',
    width: '85%',
    alignSelf: 'center',
  },
  textAddYourJob: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
