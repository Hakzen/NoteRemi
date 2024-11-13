import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from '../../constants';
import FormField from '../../components/FormField';
import CustomButton from '../../components/CustomButton';
import { Link } from 'expo-router';

const SignUp = () => {
  const [form, setForm] = useState({
    username: '',
    email: '',
    password: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const submit = () => {};

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.container}>
          <Image 
            source={images.logo}
            resizeMode='contain'
            style={styles.logo}
          />
          <Text style={styles.titleText}>NoteRemi</Text>
          
          <FormField
            title="Username"
            value={form.username}
            handleChangeText={(e) => setForm({ ...form, username: e })}
            otherStyles={styles.formField}
          />
          <FormField
            title="Email"
            value={form.email}
            handleChangeText={(e) => setForm({ ...form, email: e })}
            otherStyles={styles.formField}
            keyboardType="email-address"
          />
          <FormField
            title="Password"
            value={form.password}
            handleChangeText={(e) => setForm({ ...form, password: e })}
            otherStyles={styles.formField}
          />
          
          <CustomButton
            title="Sign In"
            handlePress={submit}
            containerStyles={styles.signInButton}
            isLoading={isSubmitting}
          />
          
          <View style={styles.signUpLinkContainer}>
            <Text style={styles.signUpText}>Don't have an account?</Text>
            <Link href="/sign-up" style={styles.signUpLink}>Signup</Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: '#003366',
    flex: 1,
  },
  scrollViewContent: {
    flexGrow: 1,
  },
  container: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    paddingHorizontal: 16,
    paddingVertical: 4,
  },
  logo: {
    width: 200,
    height: 30,
  },
  titleText: {
    fontSize: 24,
    color: '#FFFFFF',
    marginTop: 20,
    fontFamily: 'Poppins-Regular', // Adjust based on your font setup
  },
  formField: {
    marginTop: 20,
  },
  signInButton: {
    width: '100%',
    marginTop: 28,
  },
  signUpLinkContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 20,
    gap: 8, // This can be replaced with marginRight on the Text element if gap is unavailable
  },
  signUpText: {
    fontSize: 18,
    color: '#E0E0E0',
    fontFamily: 'Poppins-Regular',
  },
  signUpLink: {
    fontSize: 18,
    color: '#FFA500',
    fontFamily: 'Poppins-Bold',
  },
});
