import {
  Text,
  SafeAreaView,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import { useState } from 'react';
import { Card } from 'react-native-paper';

export default function App() {
  const [soLuong, setSoLuong] = useState(1);
  const [price, setPrice] = useState(141.8);
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flex: 0.4, backgroundColor: '#FFFFFF' }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
          <Image source={require('./assets/book.png')} />
          <View style={{ justifyContent: 'space-around' }}>
            <Text style={{ fontSize: 12, fontWeight: 'bold' }}>
              Nguyên hàm tích phân và ứng dụng
            </Text>
            <Text style={{ fontSize: 12, fontWeight: 'bold' }}>
              Cung cấp bởi Tiki Trading
            </Text>
            <Text
              style={{ fontSize: 18, fontWeight: 'bold', color: '#EE0D0D' }}>
              141.800 đ
            </Text>
            <Text
              style={{
                fontSize: 12,
                color: '#808080',
                fontWeight: 'bold',
                textDecorationLine: 'line-through',
              }}>
              141.000 đ
            </Text>
            <View
              style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity
                  style={styles.buttonAsc_Dec}
                  onPress={() => {
                    if (soLuong > 0) {
                      setSoLuong(soLuong - 1);
                      setPrice(price - 141.8);
                    }
                  }}>
                  -
                </TouchableOpacity>
                <Text
                  style={{
                    fontSize: 15,
                    fontWeight: 'bold',
                    marginHorizontal: 10,
                  }}>
                  {soLuong}
                </Text>
                <TouchableOpacity
                  style={styles.buttonAsc_Dec}
                  onPress={() => {
                    setSoLuong(soLuong + 1);
                    setPrice(price + 141.8);
                  }}>
                  +
                </TouchableOpacity>
              </View>
              <Text
                style={{ fontWeight: 'bold', fontSize: 12, color: '#134FEC' }}>
                Mua sau
              </Text>
            </View>
          </View>
        </View>

        <View style={{ marginVertical: 12 }}>
          <View style={{ flexDirection: 'row' }}>
            <Text
              style={{
                fontSize: 12,
                fontWeight: 'bold',
                marginRight: 10,
                marginLeft: 8,
              }}>
              Mã giảm giá đã lưu
            </Text>
            <Text
              style={{ fontSize: 12, fontWeight: 'bold', color: '#134FEC' }}>
              Xem tại đây
            </Text>
          </View>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <View
            style={{
              flexDirection: 'row',
              borderWidth: 1,
              justifyContent: 'space-around',
              alignItems: 'center',
              height: 45,
              width: 208,
              marginLeft: 8,
            }}>
            <View
              style={{
                height: 16,
                width: 32,
                backgroundColor: '#F2DD1B',
              }}></View>
            <Text style={{ fontWeight: 'bold', fontSize: 18 }}>
              Mã giảm giá
            </Text>
          </View>
          <View
            style={{
              flex: 'auto',
              alignItems: 'flex-end',
              justifyContent: 'center',
            }}>
            <TouchableOpacity
              style={{
                backgroundColor: '#0A5EB7',
                height: 45,
                width: 99,
                justifyContent: 'center',
                alignItems: 'center',
                marginRight: 8,
              }}>
              <Text
                style={{ fontSize: 20, color: '#FFFFFF', fontWeight: 'bold' }}>
                Áp dụng
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={{ flex: 0.6 }}>
        <View
          style={{ flex: 0.4, justifyContent: 'space-between', marginTop: 16 }}>
          <View
            style={{
              backgroundColor: '#FFFFFF',
              flexDirection: 'row',
              justifyContent: 'space-around',
              paddingVertical: 16,
              paddingHorizontal: 8,
            }}>
            <Text style={{ fontSize: 12, fontWeight: 'bold' }}>
              Bạn có phiếu quà tặng Tiki/Got it/ Urbox?
            </Text>
            <Text
              style={{ fontSize: 12, fontWeight: 'bold', color: '#134FEC' }}>
              Nhập tại đây?
            </Text>
          </View>
          <View
            style={{
              backgroundColor: '#FFFFFF',
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingHorizontal: 8,
              paddingVertical: 16,
            }}>
            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Tạm tính</Text>
            <Text
              style={{ fontSize: 18, fontWeight: 'bold', color: '#EE0D0D' }}>
              {price.toFixed(3)} đ
            </Text>
          </View>
        </View>

        <View style={{ flex: 0.7, justifyContent: 'flex-end' }}>
          <View style={{ backgroundColor: '#FFFFFF', padding: 12 }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginHorizontal: 8,
              }}>
              <Text
                style={{ fontWeight: 'bold', fontSize: 18, color: '#808080' }}>
                Thành tiền
              </Text>
              <Text
                style={{ fontWeight: 'bold', fontSize: 18, color: '#EE0D0D' }}>
                {price.toFixed(3)} đ
              </Text>
            </View>
            <View style={{ alignSelf: 'center', marginVertical: 8 }}>
              <TouchableOpacity
                style={{
                  backgroundColor: '#E53935',
                  width: 331,
                  height: 45,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    fontWeight: 'bold',
                    fontSize: 20,
                    color: '#FFFFFF',
                  }}>
                  TIẾN HÀNH ĐẶT HÀNG
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#C4C4C4',
    padding: 8,
  },

  buttonAsc_Dec: {
    height: 16,
    width: 16,
    backgroundColor: '#808080',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
