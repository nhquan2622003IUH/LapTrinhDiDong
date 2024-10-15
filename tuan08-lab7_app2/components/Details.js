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
import { useState } from 'react';

export default function App({ route }) {
  const { name, type, price, img, url } = route.params;
  const [soLuong, setSoLuong] = useState(0);
  const increase = () => {
    setSoLuong(soLuong + 1);
  };

  const decrese = () => {
    if (soLuong > 0) setSoLuong(soLuong - 1);
  };
  const imgSrc = () => {
    if (img === 'donut_yellow') return require('../assets/donut_yellow.png');
    if (img === 'donut_red') return require('../assets/donut_red.png');
    if (img === 'donut_green') return require('../assets/donut_green.png');
    if (img === 'donut_tasty') return require('../assets/donut_tasty.png');
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={{ alignItems: 'center' }}>
          <Image style={styles.imgTop} source={imgSrc()} />
        </View>
        <View>
          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{name}</Text>
        </View>
        <View style={styles.priceContainer}>
          <Text
            style={{ fontSize: 15, fontWeight: 'bold', color: '#0000008A' }}>
            {type}
          </Text>
          <Text
            style={{ fontSize: 20, fontWeight: 'bold', marginLeft: 'auto' }}>
            ${price}
          </Text>
        </View>
        <View style={styles.deliveryContainer}>
          <View>
            <View>
              <Image source={require('../assets/clock.png')} />
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: 'bold',
                  color: '#0000008A',
                }}>
                Delivery in
              </Text>
            </View>
            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>30 min</Text>
          </View>
          <View style={styles.unitButtonContainer}>
            <Pressable onPress={decrese}>
              <Image source={require('../tru.png')} />
            </Pressable>
            <Text
              style={{
                fontSize: 20,
                fontWeight: 'bold',
                marginHorizontal: 24,
              }}>
              {soLuong}
            </Text>
            <Pressable onPress={increase}>
              <Image source={require('../assets/cong.png')} />
            </Pressable>
          </View>
        </View>
        <View>
          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
            Restaurants info
          </Text>
          <Text
            style={{ fontSize: 15, color: '#000000AB', fontWeight: 'bold' }}>
            Order a Large Pizza but the size is the equivalent of a medium/small
            from other places at the same price range.
          </Text>
        </View>
        <View style={styles.buttonAddToCartContainter}>
          <Pressable style={styles.buttonAddToCart}>
            <Text style={{ fontSize: 25, fontWeight: 'bold', color: 'white' }}>
              Add to cart
            </Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 8,
  },
  imgTop: {
    width: 272,
    height: 278,
    resizeMode: 'contain',
  },
  deliveryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 32,
    marginBottom: 12,
  },
  unitButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  priceContainer: {
    flexDirection: 'row',
  },
  buttonAddToCartContainter: {
    flex: 'auto',
  },
  buttonAddToCart: {
    backgroundColor: '#F1B000',
    padding: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 'auto',
  },
});
