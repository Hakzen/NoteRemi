import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Menu = () => {
  const handleNavigation = (menuItem) => {
    alert(`Navigating to ${menuItem}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Menu</Text>
      <TouchableOpacity style={styles.menuItem} onPress={() => handleNavigation('Profile')}>
        <Text style={styles.menuText}>Profile</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuItem} onPress={() => handleNavigation('Settings')}>
        <Text style={styles.menuText}>Settings</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuItem} onPress={() => handleNavigation('Group')}>
        <Text style={styles.menuText}>Group</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuItem} onPress={() => handleNavigation('About')}>
        <Text style={styles.menuText}>About</Text>
      </TouchableOpacity>
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
  menuItem: {
    backgroundColor: '#FF6347', // Tomato color
    padding: 15,
    borderRadius: 5,
    marginBottom: 10,
  },
  menuText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
  },
});

export default Menu;
