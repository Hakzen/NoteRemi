import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { Link } from 'expo-router';

export default function App() {
  return (
    <View style={styles.container}>
      
      {/* Circle Logo */}
      <Image
        source={require('../assets/images/notepad.png')} // Replace with the path to your logo image
        style={styles.logo}
      />
      
      <Text style={styles.title}>Note Remi</Text>
      
      {/* Sign Up Button */}
      <TouchableOpacity style={styles.button}>
        <Link href="/auth/sign-up" style={styles.buttonText}>
          Sign Up
        </Link>
      </TouchableOpacity>

      {/* Log In Button */}
      <TouchableOpacity style={styles.button}>
        <Link href="/auth/login" style={styles.buttonText}>
          Log In
        </Link>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
}

// Stylesheet
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#808080', // Changed background color to gray
    padding: 20,
  },
  logo: {
    width: 100, // Set the width of the logo
    height: 100, // Set the height of the logo
    borderRadius: 50, // This makes the image circular
    marginBottom: 20, // Space between the logo and title
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#4A4A4A',
    marginBottom: 40,
  },
  button: {
    backgroundColor: '#FF0000', // Changed button color to red
    borderRadius: 25,
    paddingVertical: 15,
    paddingHorizontal: 30,
    elevation: 3, // Shadow effect for Android
    shadowColor: '#000', // Shadow effect for iOS
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3.84,
    marginBottom: 20, // Adds space between buttons
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
  },
});
