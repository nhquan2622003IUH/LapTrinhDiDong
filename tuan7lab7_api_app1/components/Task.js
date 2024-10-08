import {
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  View,
  TextInput,
  Pressable,
  FlatList,
} from 'react-native';
import axios from 'axios';
import { useState, useEffect } from 'react';
import {useNavigation} from '@react-navigation/native';

const Item = ({ title }) => {
  return (
    <View style={styles.itemContainer}>
      <Image source={require('../assets/tick.png')} />
      <View style={{marginHorizontal: 15}}>
        <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{title}</Text>
      </View>
      <Image
        style={{ marginLeft: 'auto' }}
        source={require('../assets/edit.png')}
      />
    </View>
  );
};

export default function App() {
  const navigation = useNavigation();
  const [DATA, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get(
          'https://66fc8f65c3a184a84d174ff9.mockapi.io/myjob'
        );
        setData(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);
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

        <View style={styles.inputSearchContainer}>
          <Image
            source={require('../assets/search.png')}
            style={{ position: 'absolute', marginLeft: 5 }}
          />
          <TextInput style={styles.inputSearch} placeholder="Search" />
        </View>
        <View style={styles.flatlistContainer}>
          <FlatList
            data={DATA}
            renderItem={({ item }) => <Item title={item.title} />}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
          />
        </View>

        <View style={styles.addItemButtonContainer}>
          <Pressable style={styles.addItemButton} onPress={()=> navigation.navigate('Add')}>
            <Image source={require('../assets/add.png')} />
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
    backgroundColor: '#ffffff',
  },
  avatarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginBottom: 20,
  },
  avatarImage: {
    borderWidth: 1,
    borderRadius: 50,
    marginRight: 10,
  },
  inputSearch: {
    borderWidth: 1,
    padding: 10,
    paddingLeft: 32,
    borderRadius: 5,
  },
  inputSearchContainer: {
    justifyContent: 'center',
  },
  itemContainer: {
    borderRadius: 25,
    flexDirection: 'row',
    padding: 15,
    backgroundColor: '#9095A044',
    marginVertical: 10,
  },
  flatlistContainer: {
    flex: 1,
    padding: 20
  },
  addItemButtonContainer: {
    alignItems: 'center',
    padding: 20
  },
  addItemButton: {
    height: 69, width: 69,
    backgroundColor: '#00BDD6',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50
  }

});
