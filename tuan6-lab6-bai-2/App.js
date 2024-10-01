import React from 'react';
import {
  Text,
  SafeAreaView,
  StyleSheet,
  View,
  Image,
  FlatList,
  TextInput,
} from 'react-native';

const DATA = [
  {
    id: 1,
    img: require('./assets/giacchuyen.png'),
    name: 'Cáp chuyển từ Cổng USB sang PS2...',
    price: 69000,
    discount: '39%',
    review: 15,
  },
  {
    id: 2,
    img: require('./assets/dauchuyendoipsps2.png'),
    name: 'Cáp chuyển từ Cổng USB sang PS2...',
    price: 69000,
    discount: '39%',
    review: 15,
  },
  {
    id: 3,
    img: require('./assets/giacchuyen.png'),
    name: 'Cáp chuyển từ Cổng USB sang PS2...',
    price: 69000,
    discount: '39%',
    review: 15,
  },
  {
    id: 4,
    img: require('./assets/daynguon.png'),
    name: 'Cáp chuyển từ Cổng USB sang PS2...',
    price: 69000,
    discount: '39%',
    review: 15,
  },
  {
    id: 5,
    img: require('./assets/daucam.png'),
    name: 'Cáp chuyển từ Cổng USB sang PS2...',
    price: 69000,
    discount: '39%',
    review: 15,
  },
  {
    id: 6,
    img: require('./assets/carbusbtops2.png'),
    name: 'Cáp chuyển từ Cổng USB sang PS2...',
    price: 69000,
    discount: '39%',
    review: 15,
  },
  {
    id: 7,
    img: require('./assets/giacchuyen.png'),
    name: 'Cáp chuyển từ Cổng USB sang PS2...',
    price: 69000,
    discount: '39%',
    review: 15,
  },
  {
    id: 8,
    img: require('./assets/giacchuyen.png'),
    name: 'Cáp chuyển từ Cổng USB sang PS2...',
    price: 69000,
    discount: '39%',
    review: 15,
  },
  {
    id: 9,
    img: require('./assets/giacchuyen.png'),
    name: 'Cáp chuyển từ Cổng USB sang PS2...',
    price: 69000,
    discount: '39%',
    review: 15,
  },
  {
    id: 10,
    img: require('./assets/giacchuyen.png'),
    name: 'Cáp chuyển từ Cổng USB sang PS2...',
    price: 69000,
    discount: '39%',
    review: 15,
  },
  {
    id: 11,
    img: require('./assets/giacchuyen.png'),
    name: 'Cáp chuyển từ Cổng USB sang PS2...',
    price: 69000,
    discount: '39%',
    review: 15,
  },
  {
    id: 12,
    img: require('./assets/giacchuyen.png'),
    name: 'Cáp chuyển từ Cổng USB sang PS2...',
    price: 69000,
    discount: '39%',
    review: 15,
  },
];

const Item = ({ img, name, price, discount, review }) => {
  return (
    <View>
      <Image source={img} />
      <Text>{name}</Text>
      <Text>{review}</Text>
      <Text style={{fontSize: 15, fontWeight:'bold'}}>{price}</Text>
      <Text style={{color: '#969DAA'}}>{discount}</Text>
    </View>
  );
};

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.statusbar}>
          <Image
            source={require('./assets/ant-design_arrow-left-outlined.png')}
          />
          <View style={styles.inputContainer}>
            <Image
              style={{ position: 'absolute', marginTop: 6, marginLeft: 4 }}
              source={require('./assets/find.png')}
            />
            <TextInput style={styles.textInput} value="Dây cáp USB" />
          </View>
          <View>
            <Image source={require('./assets/cart.png')} />
            <Image
              style={{ position: 'absolute', marginLeft: 12, marginBottom: 8 }}
              source={require('./assets/note-red.png')}
            />
          </View>
          <Image source={require('./assets/3cham.png')} />
        </View>
        <FlatList
          data={DATA}
          renderItem={({ item }) => {
            return (
              <Item
                img={item.img}
                name={item.name}
                price={item.price}
                discount={item.discount}
                review={item.review}
              />
            );
          }}
          keyExtractor={(item) => item.id}
          numColumns={2}
        />
        <View style={styles.statusbar}>
          <Image source={require('./assets/nav.png')} />
          <Image source={require('./assets/home.png')} />
          <Image source={require('./assets/arrow.png')} />
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
  statusbar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#1BA9FF',
    padding: 8,
    alignItems: 'center',
  },
  textInput: {
    flex: 1,
    padding: 8,
    paddingLeft: 34,
    backgroundColor: '#ffffff',
  },
});
