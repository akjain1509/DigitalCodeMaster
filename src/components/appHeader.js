import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {Colors, Icons, Layout} from '../utilities/constant';
import {useNavigation} from '@react-navigation/native';

const AppHeader = ({title}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.header}>
      <TouchableOpacity
        style={{padding: '1%'}}
        onPress={() => navigation.goBack()}>
        <Image source={Icons.back} style={styles.img} resizeMode="contain" />
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default AppHeader;

const styles = StyleSheet.create({
  header: {
    height: 60,
    backgroundColor: Colors.white,
    paddingHorizontal: '4%',
    alignItems: 'center',
    flexDirection: 'row',
    width: Layout.width,
  },
  title: {
    color: Colors.black,
    fontSize: 18,
    fontWeight: 'bold',
    paddingHorizontal: '2%',
  },
  img: {height: Layout.height * 0.05, width: Layout.height * 0.05},
});
