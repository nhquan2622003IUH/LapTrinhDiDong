import {
  Text,
  SafeAreaView,
  StyleSheet,
  View,
  TextInput,
  Pressable,
  FlatList,
  Image,
} from 'react-native';

import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

const Item = ({ name, type, price, img, url }) => {
  const navigation = useNavigation();
  const imgSrc = () => {
    if (img === 'donut_yellow') return require('../assets/donut_yellow.png');
    if (img === 'donut_red') return require('../assets/donut_red.png');
    if (img === 'donut_green') return require('../assets/donut_green.png');
    if (img === 'donut_tasty') return require('../assets/donut_tasty.png');
  };

  const handlePress = () => {
    navigation.navigate('Details', { name, type, price, img, url });
  };
  return (
    <View style={styles.itemContainer}>
      <View style={styles.item}>
        <Image source={imgSrc()} />
        <View style={styles.itemTextContainer}>
          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{name}</Text>
          <Text
            style={{ fontSize: 15, color: '#0000008A', fontWeight: 'bold' }}>
            {type}
          </Text>
          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>${price}</Text>
        </View>
        <Pressable style={styles.button_plus} onPress={handlePress}>
          <Text>
            <Image source={require('../assets/plus_button.png')} />
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default function App() {
  const [DATA, setDATA] = useState([]);
  const [query, setQuery] = useState('');
  const [selected, setSelected] = useState(null);
  useEffect(() => {
    const getData = async () => {
      try {
        const res1 = await axios.get(
          'https://66fc8f65c3a184a84d174ff9.mockapi.io/donut'
        );
        const donut = res1.data;

        const res2 = await axios.get(
          'https://66fc8f65c3a184a84d174ff9.mockapi.io/pinkdonut'
        );
        const pinkDonut = res2.data;

        setDATA([...donut, ...pinkDonut]);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  const filterData =
    query.trim() === ''
      ? DATA
      : DATA.filter((ele) => {
          return ele.name.toLowerCase().includes(query.toLocaleLowerCase());
        });

  const handleFilterPress = (filter) => {
    if (selected === filter) {
      setQuery('');
      setSelected(null);
    } else {
      setQuery(filter);
      setSelected(filter);
    }
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={{ flex: 1 }}>
          <View style={styles.textContainer}>
            <Text
              style={{ color: '#000000A6', fontSize: 16, fontWeight: 'bold' }}>
              Welcome, Jala!
            </Text>
            <Text
              style={{ color: '#000000', fontSize: 20, fontWeight: 'bold' }}>
              Choice your Best food
            </Text>
          </View>

          <View style={styles.inputSearchContainer}>
            <TextInput
              style={styles.inputSearch}
              value={query}
              placeholder="Search food"
              onChangeText={(text) => {
                setQuery(text);
              }}
            />
            <Image source={require('../assets/search.png')} />
          </View>

          <View style={styles.filterContainer}>
            <Pressable
              style={[
                styles.filter,
                selected === 'Donut' && styles.filterActive,
              ]}
              onPress={() => handleFilterPress('Donut')}>
              <Text style={selected === 'Donut' && styles.textActive}>
                Donut
              </Text>
            </Pressable>
            <Pressable
              style={[
                styles.filter,
                selected === 'Pink Donut' && styles.filterActive,
              ]}
              onPress={() => handleFilterPress('Pink Donut')}>
              <Text style={selected === 'Pink Donut' && styles.textActive}>
                Pink Donut
              </Text>
            </Pressable>
            <Pressable
              style={[
                styles.filter,
                selected === 'Floating' && styles.filterActive,
              ]}
              onPress={() => handleFilterPress('Floating')}>
              <Text style={selected === 'Floating' && styles.textActive}>
                Floating
              </Text>
            </Pressable>
          </View>

          <View style={styles.flatlistContainer}>
            <FlatList
              data={filterData}
              renderItem={({ item }) => {
                return (
                  <Item
                    type={item.type}
                    price={item.price}
                    name={item.name}
                    img={item.img}
                    // url={item.url}
                  />
                );
              }}
              showsVerticalScrollIndicator={false}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
    backgroundColor: 'white',
  },
  filterActive: {
    backgroundColor: '#F1B000',
  },
  textActive: {
    color: 'black',
    fontWeight: 'bold',
  },
  inputSearchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  inputSearch: {
    width: 266,
    height: 46,
    borderWidth: 1,
    padding: 8,
    color: '#0000004D',
    fontSize: 16,
    marginRight: 3,
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  filter: {
    // width: 100,
    // height: 35,
    padding: 10,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  flatlistContainer: {
    flex: 1,
  },
  item: {
    flexDirection: 'row',
    backgroundColor: '#F4DDDD',
    alignItems: 'center',
    marginVertical: 3,
    borderRadius: 5,
    padding: 10,
  },
  itemTextContainer: {
    justifyContent: 'space-between',
    marginLeft: 5,
  },
  button_plus: {
    marginLeft: 'auto',
    alignSelf: 'flex-end',
  },
});
