import React from 'react';
import { useState } from 'react';
import {
  Text,
  SafeAreaView,
  StyleSheet,
  View,
  Image,
  Pressable,
} from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Details" component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function Home({ navigation, route }) {
  var [image, setImage] = useState(require('./assets/vs_blue.png'));
  var [price, setPrice] = useState('1.790.000 đ');
  const [cungCap, setCungCap] = useState('Tiki Tradding');
  const [color, setColor] = useState('Blue');

  React.useEffect(() => {
    if (route.params) {
      const { selectedImage, selectedColor, selectedPrice } = route.params;
      setImage(selectedImage);
      setPrice(selectedPrice);
      setColor(selectedColor);
    }
  }, [route.params]);
  return (
    <SafeAreaView style={[styles.container, { padding: 8 }]}>
      <View style={{ alignItems: 'center' }}>
        <Image source={image} />
      </View>
      <Text style={{ fontSize: 15 }}>
        Điện Thoại Vsmart Joy 3 - Hàng chính hãng
      </Text>

      <View
        style={{
          flexDirection: 'row',
        }}>
        <View style={{ flexDirection: 'row' }}>
          <Image source={require('./assets/star.png')} />
          <Image source={require('./assets/star.png')} />
          <Image source={require('./assets/star.png')} />
          <Image source={require('./assets/star.png')} />
          <Image source={require('./assets/star.png')} />
        </View>

        <Text style={{ fontSize: 15, marginLeft: 32 }}>(Xem 828 đánh giá)</Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
        }}>
        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{price}</Text>
        <Text
          style={{
            textDecorationLine: 'line-through',
            fontSize: 15,
            color: '#00000094',
            fontWeight: 'bold',
            marginLeft: 32,
          }}>
          1.790.000 đ
        </Text>
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Text style={{ fontSize: 12, color: '#FA0000', fontWeight: 'bold' }}>
          Ở ĐÂU RẺ HƠN HOÀN TIỀN
        </Text>
        <MaterialIcons name="contact-support" size={24} color="black" />
      </View>
      <View style={{ alignItems: 'center' }}>
        <Pressable
          style={[
            styles.buttonChose,
            {
              flexDirection: 'row',
              justifyContent: 'space-around',
              alignItems: 'center',
            },
          ]}
          onPress={() => {
            navigation.navigate('Details', { color, price, cungCap });
          }}>
          <Text style={{ fontSize: 15 }}>4 MÀU-CHỌN MÀU</Text>
          <Text>></Text>
        </Pressable>
        <Pressable
          style={[
            styles.buttonSubmit,
            { marginTop: 24, backgroundColor: '#EE0A0A' },
          ]}>
          <Text style={{ fontSize: 20, color: '#F9F2F2', fontWeight: 'bold' }}>
            CHỌN MUA
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

function Details({ route, navigation }) {
  const { color, cungCap, price } = route.params;
  const [newImage, setNewImage] = useState(require('./assets/vs_blue.png'));
  const [newPrice, setNewPrice] = useState(price);
  const [newCungCap, setNewCungCap] = useState(cungCap);
  const [newColor, setNewColor] = useState('Blue');

  const handleColor = (image, color, price) => {
    setNewImage(image);
    setNewColor(color);
    setNewPrice(price);
  };
  return (
    <View style={{ flex: 1, padding: 8 }}>
      <View style={{ flexDirection: 'row' }}>
        <Image
          resizeMode="contain"
          style={{ width: 112, height: 132 }}
          source={newImage}
        />
        <View style={{ justifyContent: 'space-between' }}>
          <Text>Điện Thoại Vsmart Joy 3 Hàng chính hãng</Text>
          <Text>
            Màu:{' '}
            <Text style={{ fontSize: 15, fontWeight: 'bold' }}>{newColor}</Text>
          </Text>
          <Text>
            Cung cấp bởi
            <Text style={{ fontSize: 15, fontWeight: 'bold' }}>
              {' '}
              {newCungCap}
            </Text>
          </Text>
          <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{newPrice}</Text>
        </View>
      </View>
      <View style={{ flex: 2 }}>
        <Text style={{ fontSize: 18 }}>Chọn một màu bên dưới:</Text>
        <View
          style={{
            flex: 1.8,
            alignItems: 'center',
            justifyContent: 'space-around',
          }}>
          <Pressable
            style={[styles.pickColor, { backgroundColor: '#C5F1FB' }]}
            onPress={() => {
              handleColor(
                require('./assets/vs_silver.png'),
                'Silver',
                '1.850.000 đ'
              );
            }}></Pressable>
          <Pressable
            style={[styles.pickColor, { backgroundColor: '#F30D0D' }]}
            onPress={() => {
              handleColor(require('./assets/vs_red.png'), 'Red', '1.890.000 đ');
            }}></Pressable>
          <Pressable
            style={[styles.pickColor, { backgroundColor: '#000000' }]}
            onPress={() => {
              handleColor(
                require('./assets/vs_black.png'),
                'Black',
                '1.750.000 đ'
              );
            }}></Pressable>
          <Pressable
            style={[styles.pickColor, { backgroundColor: '#234896' }]}
            onPress={() => {
              handleColor(
                require('./assets/vs_black.png'),
                'Blue',
                '1.790.000 đ'
              );
            }}></Pressable>
        </View>
      </View>
      <View>
        <Pressable
          style={[styles.buttonSubmit, { backgroundColor: '#1952E294' }]} onPress={()=>{
            navigation.navigate('Home', {
              selectedColor: newColor,
              selectedImage: newImage,
              selectedPrice: newPrice
            })
          }}>
          <Text style={{ color: '#FFFFFF', fontWeight: 'bold', fontSize: 20 }}>
            XONG
          </Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
  },
  buttonChose: {
    height: 34,
    width: '100%',
    borderWidth: 1,
    borderRadius: 10,
  },

  buttonSubmit: {
    width: '100%',
    height: 44,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },

  pickColor: {
    width: 85,
    height: 80,
  },
});
