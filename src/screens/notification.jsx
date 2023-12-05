import React, {useState} from 'react';
import {
  View,
  Text,
  FlatList,
  Modal,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {Colors, Layout} from '../utilities/constant';
import AppHeader from '../components/appHeader';

const NotificationScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedNotification, setSelectedNotification] = useState(null);

  const notifications = [
    {id: '1', message: 'You receive a joy', desc: ''},
    {id: '2', message: 'Notification 2 content'},
    // Add more notifications as needed
  ];

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        style={styles.notificationItem}
        onPress={() => {
          setSelectedNotification(item);
          setModalVisible(true);
        }}>
        <Text>{item.message}</Text>
      </TouchableOpacity>
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
            <Text>{selectedNotification?.message}</Text>

            <TouchableOpacity
              onPress={() => {
                setModalVisible(!modalVisible);
              }}>
              <Text>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default NotificationScreen;

const styles = StyleSheet.create({
  notificationItem: {
    padding: 20,
    backgroundColor: '#DEF6FB',
    margin: '2%',
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
    // height: height * 0.4,
    // width: width * 0.8,
    // flex: 1 / 5,
    padding: '3%',
    // gap: 4,
  },
  modalText: {
    // borderBottomColor: colors.black,
    // borderBottomWidth: 1,
    width: Layout.width * 0.65,
    alignSelf: 'center',
    borderWidth: 1,
    borderRadius: 4,
    borderColor: Colors.grey,
    padding: '1%',
    // marginTop: '3%',
    color: Colors.black,
    fontFamily: 'LucidaBright',
  },
  button: {
    borderRadius: 20,
    padding: '1%',
    elevation: 2,
  },
  textStyle: {
    color: Colors.white,
    fontWeight: '600',
    textAlign: 'center',
    fontFamily: 'LucidaBright',
    fontSize: 14,
    textTransform: 'uppercase',
  },
});
