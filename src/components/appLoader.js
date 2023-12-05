import React, {useEffect} from 'react';
import {View, Image, StyleSheet, TouchableOpacity, Text} from 'react-native';
import {Colors, Icons, Layout} from '../utilities/constant';

const AppLoader = ({navigation}) => {
  //   useEffect(() => {
  //     setTimeout(() => {
  //       navigation.replace('BottomTab');
  //     }, 30000);
  //   }, []);

  return (
    <View style={styles.container}>
      <Image source={Icons.loader} style={styles.logo} resizeMode="contain" />
      <Text style={styles.text}>
        Begin your fun journey with a random surprise
      </Text>
      <TouchableOpacity
        style={{
          //   height: Layout.height * 0.1,
          //   width: Layout.width * 0.5,
          backgroundColor: '#ff7f11',
          borderRadius: 25,
          alignItems: 'center',
          justifyContent: 'center',
          padding: '5%',
        }}
        onPress={() => navigation.navigate('BottomTab')}>
        <Text style={{color: Colors.white, fontWeight: 'bold', fontSize: 16}}>
          Start Here
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default AppLoader;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.white,
    // padding: '2%',
    justifyContent: 'space-evenly',
  },
  logo: {
    // width: Layout.width * 0.5,
    height: Layout.height * 0.75,
    width: Layout.width * 0.85,
  },
  text: {
    color: Colors.black,
    fontWeight: 'bold',
    fontSize: 20,
    // paddingHorizontal: '8%',
    // paddingVertical: '2%',
    textAlign: 'center',
  },
});
