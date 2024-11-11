import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';

const User = () => {
  const [name, setName] = useState('UENO SEIJIRO');
  const [email, setEmail] = useState('uenoseijiro@gmail.com');
  const [bio, setBio] = useState('LF CUTIE PIE');
  const [isEditing, setIsEditing] = useState(false);

  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.avatar}
        source={{ uri: 'https://www.w3schools.com/howto/img_avatar.png' }}
      />
      {isEditing ? (
        <>
          <TextInput
            style={styles.input}
            value={name}
            onChangeText={setName}
            placeholder="Enter your name"
          />
          <TextInput
            style={styles.input}
            value={email}
            onChangeText={setEmail}
            placeholder="Enter your email"
            keyboardType="email-address"
          />
          <TextInput
            style={[styles.input, styles.bioInput]}
            value={bio}
            onChangeText={setBio}
            placeholder="Enter your bio"
            multiline={true}
          />
        </>
      ) : (
        <>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.email}>{email}</Text>
          <Text style={styles.bio}>{bio}</Text>
        </>
      )}
      <TouchableOpacity style={styles.button} onPress={toggleEdit}>
        <Text style={styles.buttonText}>{isEditing ? 'Save Profile' : 'Edit Profile'}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#D3D3D3',
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20,
  },
  input: {
    width: '80%',
    borderColor: '#D1D1D1',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    fontSize: 18,
  },
  bioInput: {
    height: 80,
    textAlignVertical: 'top',
  },
  name: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  email: {
    fontSize: 18,
    color: '#666',
  },
  bio: {
    fontSize: 16,
    color: '#888',
  },
  button: {
    backgroundColor: '#FF6347', // Tomato color
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default User;
