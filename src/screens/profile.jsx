import {View, Text} from 'react-native';
import React from 'react';
import {Colors} from '../utilities/constant';
import AppHeader from '../components/appHeader';
const ProfileScreen = () => {
  return (
    <View style={{backgroundColor: Colors.white, flex: 1}}>
      <AppHeader title={'Profile'} />
      <Text>ProfileScreen</Text>
    </View>
  );
};

export default ProfileScreen;
