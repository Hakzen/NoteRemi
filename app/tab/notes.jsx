import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, FlatList, TouchableOpacity, Alert } from 'react-native';

const Notes = () => {
  const [notes, setNotes] = useState([]);
  const [newNoteTitle, setNewNoteTitle] = useState('');
  const [newNoteDescription, setNewNoteDescription] = useState('');
  const [editingNoteId, setEditingNoteId] = useState(null);
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());

  // Function to update clock every second
  useEffect(() => {
    const timerId = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);
    
    return () => clearInterval(timerId);
  }, []);

  const saveNote = () => {
    if (newNoteTitle.trim() && newNoteDescription.trim()) {
      if (editingNoteId) {
        setNotes((prevNotes) =>
          prevNotes.map((note) =>
            note.id === editingNoteId
              ? { ...note, title: newNoteTitle, description: newNoteDescription }
              : note
          )
        );
      } else {
        const newNote = {
          id: Math.random().toString(),
          title: newNoteTitle,
          description: newNoteDescription,
          date: new Date().toLocaleString(),
          color: '#BBDEFB',
        };
        setNotes((prevNotes) => [...prevNotes, newNote]);
      }
      setNewNoteTitle('');
      setNewNoteDescription('');
      setEditingNoteId(null);
    } else {
      Alert.alert('Error', 'Please enter both title and description.');
    }
  };

  const deleteNote = (id) => {
    Alert.alert('Delete Note', 'Are you sure you want to delete this note?', [
      { text: 'Cancel', style: 'cancel' },
      { text: 'OK', onPress: () => handleDelete(id) },
    ]);
  };

  const handleDelete = (id) => {
    setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
  };

  const editNote = (note) => {
    setNewNoteTitle(note.title);
    setNewNoteDescription(note.description);
    setEditingNoteId(note.id);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your daily notes that remind you</Text>
      <Text style={styles.clock}>{currentTime}</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Title"
        value={newNoteTitle}
        onChangeText={setNewNoteTitle}
      />
      <TextInput
        style={styles.input}
        placeholder="Description"
        value={newNoteDescription}
        onChangeText={setNewNoteDescription}
      />
      
      <TouchableOpacity style={styles.addButton} onPress={saveNote}>
        <Text style={styles.addButtonText}>{editingNoteId ? 'Update Note' : 'Add Note'}</Text>
      </TouchableOpacity>

      <FlatList
        data={notes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={[styles.noteCard, { backgroundColor: item.color }]}>
            <Text style={styles.noteTitle}>{item.title}</Text>
            <Text style={styles.noteDate}>{item.date}</Text>
            <Text style={styles.noteDescription}>{item.description}</Text>
            <View style={styles.buttonContainer}>
              <TouchableOpacity onPress={() => editNote(item)}>
                <Text style={styles.editButton}>Edit</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => deleteNote(item.id)}>
                <Text style={styles.deleteButton}>Delete</Text>
              </TouchableOpacity>
            </View>
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
    backgroundColor: '#D3D3D3', // Light grey background
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  clock: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    fontSize: 16,
  },
  noteCard: {
    padding: 20,
    borderRadius: 10,
    marginBottom: 15,
    elevation: 2,
  },
  noteTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  noteDate: {
    fontSize: 14,
    color: '#A2A2A2',
    marginVertical: 5,
  },
  noteDescription: {
    fontSize: 14,
  },
  addButton: {
    backgroundColor: '#FF6F61',
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    marginBottom: 20,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  editButton: {
    color: '#FF9800',
    marginTop: 10,
    fontSize: 14,
  },
  deleteButton: {
    color: '#D32F2F',
    marginTop: 10,
    fontSize: 14,
  },
});

export default Notes;
