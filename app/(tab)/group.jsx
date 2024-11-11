import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, StyleSheet, TouchableOpacity, Alert } from 'react-native';

const Group = () => {
  const [participants, setParticipants] = useState([]);
  const [newParticipant, setNewParticipant] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [groups, setGroups] = useState([
    { id: '1', name: 'Study Group' },
    { id: '2', name: 'Workout Buddies' },
    { id: '3', name: 'Book Club' },
    { id: '4', name: 'Travel Enthusiasts' },
  ]);
  const [newGroupName, setNewGroupName] = useState('');

  const addParticipant = () => {
    if (newParticipant.trim()) {
      setParticipants([...participants, { key: Math.random().toString(), name: newParticipant }]);
      setNewParticipant('');
    }
  };

  const createNewGroup = () => {
    if (newGroupName.trim()) {
      setGroups([...groups, { id: Math.random().toString(), name: newGroupName }]);
      setNewGroupName('');
    }
  };

  const filteredParticipants = participants.filter((participant) =>
    participant.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const leaveGroup = (id) => {
    Alert.alert('Leave Group', 'Are you sure you want to leave this group?', [
      { text: 'Cancel', style: 'cancel' },
      { text: 'OK', onPress: () => handleLeave(id) },
    ]);
  };

  const handleLeave = (id) => {
    setGroups((prevGroups) => prevGroups.filter((group) => group.id !== id));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Group Participants</Text>

      {/* Search Bar */}
      <TextInput
        style={styles.searchBar}
        placeholder="Search participants..."
        value={searchQuery}
        onChangeText={(text) => setSearchQuery(text)}
      />

      {/* Add Participant Input */}
      <TextInput
        style={styles.input}
        placeholder="Add new participant"
        value={newParticipant}
        onChangeText={(text) => setNewParticipant(text)}
      />
      <TouchableOpacity style={styles.button} onPress={addParticipant}>
        <Text style={styles.buttonText}>Add Participant</Text>
      </TouchableOpacity>

      {/* Create New Group */}
      <TextInput
        style={styles.input}
        placeholder="Enter new group name"
        value={newGroupName}
        onChangeText={(text) => setNewGroupName(text)}
      />
      <TouchableOpacity style={styles.button} onPress={createNewGroup}>
        <Text style={styles.buttonText}>Create New Group</Text>
      </TouchableOpacity>

      {/* Existing Groups List */}
      <FlatList
        data={groups}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.groupItem}>
            <Text style={styles.groupText}>{item.name}</Text>
            <TouchableOpacity onPress={() => leaveGroup(item.id)}>
              <Text style={styles.leaveButton}>Leave Group</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#D3D3D3', 
  },
  header: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  searchBar: {
    borderColor: '#ddd',
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    fontSize: 18,
  },
  input: {
    borderColor: '#ddd',
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    fontSize: 18,
  },
  button: {
    backgroundColor: '#FF6F61',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  groupItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  groupText: {
    fontSize: 18,
  },
  leaveButton: {
    color: '#D32F2F', // Red color for leave
  },
});

export default Group;
