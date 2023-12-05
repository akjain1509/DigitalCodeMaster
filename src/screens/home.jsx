import {View, Text} from 'react-native';
import React from 'react';
import {Colors} from '../utilities/constant';
import AppHeader from '../components/appHeader';

const HomeScreen = () => {
  return (
    <View style={{backgroundColor: Colors.white, flex: 1}}>
      <AppHeader title={'Suggestion'} />
      <Text>HomeScreen</Text>
    </View>
  );
};

export default HomeScreen;
