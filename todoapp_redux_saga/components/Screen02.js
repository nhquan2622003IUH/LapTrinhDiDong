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
import { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import react from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Item = ({ element, user }) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const handleDeleteTodo = (id) => {
    dispatch({ type: 'DELETE_DATA_REQUEST', payload: id });
  };

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
        <Pressable
          style={styles.action}
          onPress={() => handleDeleteTodo(element.id)}>
          Delete
        </Pressable>
        <Pressable
          style={styles.action}
          onPress={() =>
            navigation.navigate('Screen03', {
              user,
              title: 'EDIT YOUR JOB',
              jobID: element,
            })
          }>
          Modify
        </Pressable>
      </View>
    </View>
  );
};

export default function App({ route }) {
  const { user } = route.params;
  const navigation = useNavigation();

  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.todos);

  useEffect(() => {
    dispatch({ type: 'GET_DATA_REQUEST' });
  }, [dispatch]);

  const [textSearch, setTextSearch] = react.useState('');
  const filteredData =
    textSearch.trim() === ''
      ? data
      : data.filter((item) =>
          item.content.toLowerCase().includes(textSearch.toLowerCase())
        );
  return (
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
          <TextInput
            style={styles.inputSearch}
            onChangeText={(text) => setTextSearch(text)}
            placeholder="Search"
          />
        </View>
        <View style={styles.flatlistContainer}>
          {loading && <Text>Loading...</Text>}
          {error && <Text>Error: {error}</Text>}
          <FlatList
            data={filteredData}
            renderItem={({ item }) => <Item element={item} user={user} />}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
          />
        </View>

        <View style={styles.addItemButtonContainer}>
          <Pressable
            style={styles.addItemButton}
            onPress={() =>
              navigation.navigate('Screen03', { user, title: 'ADD YOUR JOB' })
            }>
            <Image source={require('../assets/add.png')} />
          </Pressable>
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
    backgroundColor: '#eee',
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
    backgroundColor: 'white'
  },
  inputSearchContainer: {
    justifyContent: 'center',
  },
  flatlistContainer: {
    flex: 1,
  },
  addItemButtonContainer: {
    alignItems: 'center',
    paddingTop: 10
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
