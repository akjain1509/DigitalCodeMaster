import {View, Text} from 'react-native';
import React from 'react';
import {Colors} from '../utilities/constant';
import AppHeader from '../components/appHeader';
const GameScreen = () => {
  return (
    <View style={{backgroundColor: Colors.white, flex: 1}}>
      <AppHeader title={'Game'} />
      <Text>GameScreen</Text>
    </View>
  );
};

export default GameScreen;
