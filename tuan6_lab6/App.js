import React from 'react';
import {
  Text,
  SafeAreaView,
  StyleSheet,
  FlatList,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';

const DATA = [
  {
    img: require('./assets/ca_nau_lau.png'),
    name: 'Ca nấu lẩu, nấu mì mini',
    shop: 'Shop Devang',
  },
  {
    img: require('./assets/ga_bo_toi.png'),
    name: '1 KG KHÔ GÀ BƠ TỎI',
    shop: 'Shop LTD Food',
  },
  {
    img: require('./assets/xa_can_cau.png'),
    name: 'Xe cần cẩu đa năng',
    shop: 'Shop TheGioiDoChoi',
  },
  {
    img: require('./assets/do_choi_dang_mo_hinh.png'),
    name: 'Đồ chơi dạng mô hình',
    shop: 'Shop TheGioiDoChoi',
  },
  {
    img: require('./assets/lanh_dao_gian_don.png'),
    name: 'Lãnh đạo giản đơn',
    shop: 'Shop Minh Long Book',
  },
  {
    img: require('./assets/hieu_long_con_tre.png'),
    name: 'Hiểu lòng con trẻ',
    shop: 'Shop Minh Long Book',
  },
  {
    img: require('./assets/trump.png'),
    name: 'Donal Trump thiên tài lãnh đạo',
    shop: 'Shop Minh Long Book',
  },
];

const Item = ({ name, img, shop }) => {
  return (
    <View style={styles.item}>
      <View>
        <Image source={img} />
      </View>
      <View style={styles.textContainer}>
        <Text>{name}</Text>
        <Text style={{color: 'red'}}>{shop}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={{ color: 'white' }}>Chat</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const Separator = () => {
  return <View style={styles.separator} />;
};

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.statusbarTop}>
          <Image
            source={require('./assets/ant-design_arrow-left-outlined.png')}
          />
          <Text style={{ color: '#ffffff' }}>Chat</Text>
          <Image source={require('./assets/bi_cart-check.png')} />
        </View>
        <View>
          <Text>
            Bạn có thắc mắc với sản phẩm vừa xem. Đừng ngại chát với Shop
          </Text>
        </View>
        <FlatList
          data={DATA}
          renderItem={({ item }) => (
            <Item img={item.img} name={item.name} shop={item.shop} />
          )}
          ItemSeparatorComponent={Separator}
        />
        <View style={styles.statusbarBottom}>
          <Image source={require('./assets/nav.png')} />
          <Image source={require('./assets/home.png')} />
          <Image source={require('./assets/arrow.png')} />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
  },
  item: {
    backgroundColor: '#ffffff',
    padding: 20,
    marginVertical: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  textContainer: {
    flex: 1,
    marginHorizontal: 8,
  },
  buttonContainer: {
    marginLeft: 'auto',
  },
  button: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 5,
  },
  statusbarTop: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#1BA9FF',
    padding: 8,
    alignItems: 'center',
  },
  statusbarBottom: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#1BA9FF',
    padding: 8,
    alignItems: 'center',
  },
  separator: {
    height: 1, // Chiều cao của separator
    backgroundColor: '#CCCCCC', // Màu của separator
  },
});
export default App;
