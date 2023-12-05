import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import AppHeader from '../components/appHeader';
import {Colors} from '../utilities/constant';

const ProfileScreen = () => {
  const [name, setName] = useState('John Doe');
  const [email, setEmail] = useState('john.doe@example.com');
  const [mobileNumber, setMobileNumber] = useState('123-456-7890');
  const [isEditing, setIsEditing] = useState(false);

  const handleEditSave = () => {
    setIsEditing(!isEditing);
  };

  return (
    <View style={{backgroundColor: Colors.white, flex: 1}}>
      <AppHeader title={'Profile'} />

      <View style={styles.profileContainer}>
        <Text style={styles.label}>Name:</Text>
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={text => setName(text)}
          editable={isEditing}
        />

        <Text style={styles.label}>Email:</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={text => setEmail(text)}
          editable={isEditing}
        />

        <Text style={styles.label}>Mobile Number:</Text>
        <TextInput
          style={styles.input}
          value={mobileNumber}
          onChangeText={text => setMobileNumber(text)}
          editable={isEditing}
        />

        <TouchableOpacity style={styles.editButton} onPress={handleEditSave}>
          <Text style={styles.editButtonText}>
            {isEditing ? 'Save' : 'Edit'}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  profileContainer: {
    padding: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderColor: Colors.lightGray,
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 15,
    paddingHorizontal: 10,
  },
  editButton: {
    backgroundColor: Colors.primary,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
    alignSelf: 'flex-end',
  },
  editButtonText: {
    color: Colors.white,
    fontWeight: 'bold',
  },
});

export default ProfileScreen;
