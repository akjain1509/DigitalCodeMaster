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

const NotificationScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedNotification, setSelectedNotification] = useState(null);

  const notifications = [
    {
      id: '1',
      message: 'You receive a joy',
      image: require('../assets/modal.png'),
    },
    {
      id: '2',
      message: 'You receive a joy',
      image: require('../assets/modal.png'),
    },
  ];

  const renderItem = ({item}) => {
    return (
      <View style={styles.notificationItem}>
        <Text>{item.message}</Text>
        <TouchableOpacity
          style={{
            backgroundColor: '#ff7f11',
            paddingVertical: '2%',
            paddingHorizontal: '3%',
            borderRadius: 10,
          }}
          onPress={() => {
            setSelectedNotification(item);
            setModalVisible(true);
          }}>
          <Text style={{color: Colors.white}}>View</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={{backgroundColor: Colors.white, flex: 1}}>
      <AppHeader title={'Notification'} />

      <FlatList
        data={notifications}
        keyExtractor={item => item.id}
        renderItem={renderItem}
      />

      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <TouchableOpacity
              style={{alignItems: 'flex-end'}}
              onPress={() => {
                setModalVisible(!modalVisible);
              }}>
              <Text
                style={{fontSize: 20, color: Colors.black, fontWeight: 'bold'}}>
                X
              </Text>
            </TouchableOpacity>
            <Image
              source={selectedNotification?.image}
              style={{
                height: Layout.height * 0.8,
                width: Layout.width * 0.9,
                borderRadius: 5,
              }}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default NotificationScreen;

const styles = StyleSheet.create({
  notificationItem: {
    padding: '4%',
    backgroundColor: '#DEF6FB',
    margin: '2%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalView: {
    backgroundColor: Colors.white,
    borderRadius: 10,
    shadowColor: Colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    padding: '3%',
  },
});
