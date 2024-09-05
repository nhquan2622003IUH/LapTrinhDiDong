import React from 'react';
import { Text, View, Image, Pressable } from 'react-native';

const ManHinh2 = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#00CCF9',
      }}>
      <View
        style={{
          flex: 2,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image source={require('./assets/Ellipse8.png')} />
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{ fontSize: 25, fontWeight: 'bold' }}>GROW</Text>
        <Text style={{ fontSize: 25, fontWeight: 'bold' }}>YOUR BUSINESS</Text>
      </View>
      <View
        style={{
          flex: 2,
        }}>
        <Text style={{ fontSize: 15, fontWeight: 'bold', textAlign: 'center' }}>
          We will help you to grow your business using on server online
        </Text>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
          }}>
          <Pressable
            style={{
              backgroundColor: '#E3C000',
              padding: 10,
              borderRadius: 5,
              alignItems: 'center',
              width: 119,
            }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>LOGIN</Text>
          </Pressable>
          <Pressable
            style={{
              backgroundColor: '#E3C000',
              padding: 10,
              borderRadius: 5,
              alignItems: 'center',
              width: 119,
            }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>SIGN UP</Text>
          </Pressable>
        </View>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
          }}>
          <Text style={{ fontSize: 18, fontWeight: 'bold' }}>HOW WE WORK?</Text>
        </View>
      </View>
    </View>
  );
};

export default ManHinh2;
