import React, {useState} from 'react';
import {
  View,
  Text,
  FlatList,
  Modal,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import {Colors, Layout} from '../utilities/constant';
import AppHeader from '../components/appHeader';

const HomeScreen = () => {
  const notifications = [
    {
      id: '1',
      message: 'want to I love you to my wife and kids',
      type: 'Relationship',
    },
    {
      id: '2',
      message:
        'Every day I should call my mom this week and talk to ger for 15mins at least month',
      type: 'Finance',
    },
    {
      id: '3',
      message: 'I want to save 10% of my earnings starting this month.',
      type: 'Finance',
    },
  ];

  const renderItem = ({item}) => {
    return (
      <View style={styles.notificationItem}>
        <View style={{alignItems: 'flex-end'}}>
          <Text style={styles.type}>{item.type}</Text>
        </View>
        <Text style={styles.msg}>{item.message}</Text>
      </View>
    );
  };

  return (
    <View style={{backgroundColor: Colors.white, flex: 1}}>
      <AppHeader title={'Suggestions'} />
      <FlatList
        data={notifications}
        keyExtractor={item => item.id}
        renderItem={renderItem}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  notificationItem: {
    backgroundColor: '#DEF6FB',
    margin: '2%',
    justifyContent: 'space-between',
  },
  type: {
    justifyContent: 'flex-end',
    backgroundColor: '#00D3FF',
    paddingHorizontal: '3%',
    paddingVertical: '1%',
    color: Colors.black,
    fontSize: 14,
    fontWeight: 'bold',
  },
  msg: {
    color: Colors.black,
    fontSize: 16,
    fontWeight: 'bold',
    padding: '4%',
  },
});
