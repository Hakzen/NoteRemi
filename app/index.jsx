import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { ScrollView, Text, View, Image, StyleSheet } from 'react-native';
import { Redirect, router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from '../constants';
import CustomButton from '../components/CustomButton';

export default function Index() {
  const [shouldRedirect, setShouldRedirect] = useState(false);

  // Example condition for redirect (simulating a redirect after 3 seconds)
  useEffect(() => {
    const timer = setTimeout(() => {
      setShouldRedirect(true);  // Set this condition based on your app's logic
    }, 3000); // Redirect after 3 seconds for demo

    return () => clearTimeout(timer);
  }, []);

  // Conditional Redirect to /notes
  if (shouldRedirect) {
    return <Redirect href="/(tab)/notes" />; 
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.container}>
          <Image
            source={images.logo}
            style={styles.logo}
            resizeMode="contain"
          />
          <Image
            source={images.portfolio}
            style={styles.portfolioImage}
            resizeMode="contain"
          />
          <View style={styles.textContainer}>
            <Text style={styles.mainText}>
              A Display of Student Innovative Portfolio with Audience-Driven Recognition
            </Text>
          </View>
          <Text style={styles.subText}>
            Join us, Let's create One Portfolio at a time!
          </Text>
          <CustomButton
            title="Continue with Email"
            handlePress={() => router.push('/sign-in')}
            containerStyles={styles.customButton}
          />
        </View>
      </ScrollView>
      <StatusBar backgroundColor='#161622' style="light" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: '#1e1e2d', // Dark indigo background for the entire screen
    flex: 1,
  },
  scrollViewContent: {
    flexGrow: 1, // Ensures content scrolls if it's too tall
  },
  container: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '85vh', // Adjust this if needed for different screen sizes
    paddingHorizontal: 16, // Horizontal padding
  },
  logo: {
    width: 300,
    height: 84,
    paddingTop: 20,
  },
  portfolioImage: {
    width: 200,
    height: 200,
  },
  textContainer: {
    marginTop: 20,
  },
  mainText: {
    fontSize: 24,
    color: 'white',
    fontFamily: 'Poppins-Bold', // Make sure this font is loaded in your app
    textAlign: 'center',
  },
  subText: {
    fontSize: 14,
    fontFamily: 'Poppins-Bold', // Ensure the font is available
    color: '#BDBDBD', // Light gray color
    marginTop: 20,
    textAlign: 'center',
  },
  customButton: {
    width: '100%',
    marginTop: 30, // Spacing from previous elements
  },
});
