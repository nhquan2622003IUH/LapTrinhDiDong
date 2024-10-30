import {
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  View,
  TextInput,
  Pressable,
  FlatList,
  CheckBox,
} from 'react-native';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import react from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDataRequest } from './actions';

const Item = ({ element, onDelete, onUp, contentUpDate }) => {
  const [isSelected, SetSelected] = react.useState(false);
  return (
    <View style={styles.itemContainer}>
      <CheckBox
        style={styles.checkbox}
        value={isSelected}
        onValueChange={SetSelected}
      />
      <Text numberOfLines={3} ellipsizeMode="tail">
        {element.content}
      </Text>
      <View
        style={{ marginTop: 5, alignItems: 'center', flexDirection: 'row' }}>
        <Pressable style={styles.action} onPress={() => onDelete(element.id)}>
          Delete
        </Pressable>
        <Pressable
          style={styles.action}
          onPress={() => onUp(element.id, contentUpDate)}>
          Modify
        </Pressable>
      </View>
    </View>
  );
};

export default function App({ route }) {
  const { user } = route.params;
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const data = useSelector((state) => state.data);
  const loading = useSelector((state) => state.loading);
  const error = useSelector((state) => state.error);
  useEffect(() => {
    dispatch(fetchDataRequest());
  }, [dispatch]);

  const deleteItem = (id) => {
    dispatch(deleteItemRequest(id));
  };
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
              {user}
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
          {loading && <Text>Loading...</Text>}
          {error && <Text>Error: {error}</Text>}
          <FlatList
            data={data}
            renderItem={({ item }) => <Item element={item} onDelete={deleteItem}/>}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
          />
        </View>

        <View style={styles.addItemButtonContainer}>
          <Pressable
            style={styles.addItemButton}
            onPress={() => navigation.navigate('Add')}>
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
  flatlistContainer: {
    flex: 1,
    padding: 20,
  },
  addItemButtonContainer: {
    alignItems: 'center',
    padding: 20,
  },
  addItemButton: {
    height: 69,
    width: 69,
    backgroundColor: '#00BDD6',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
  },
  itemContainer: {
    backgroundColor: 'white',
    marginVertical: 5,
    borderRadius: 5,
    padding: 10,
    marginHorizontal: 10,
    height: 'auto',
    borderWidth: 1,
    borderColor: '#ccc',
  },
  action: {
    backgroundColor: 'red',
    borderRadius: 50,
    paddingHorizontal: 12,
    paddingVertical: 8,
    margin: 2,
    color: 'white',
    textAlign: 'center',
  },
  checkbox: {
    marginLeft: 'auto',
  },
});
