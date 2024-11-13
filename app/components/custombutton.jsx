import React from 'react';
import { ActivityIndicator, Text, TouchableOpacity, StyleSheet } from "react-native";

const CustomButton = ({
  title,
  handlePress,
  containerStyles,
  textStyles,
  isLoading,
}) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={0.7}
      style={[
        styles.buttonContainer,
        containerStyles,
        isLoading && styles.loading
      ]}
      disabled={isLoading}
    >
      <Text style={[styles.buttonText, textStyles]}>
        {title}
      </Text>

      {isLoading && (
        <ActivityIndicator
          animating={isLoading}
          color="#fff"
          size="small"
          style={styles.loadingIndicator}
        />
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: '#FFA500',
    borderRadius: 15,
    minHeight: 62,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  buttonText: {
    color: '#ffffff',
    fontFamily: 'Poppins-SemiBold', // Adjust based on your font setup
    fontSize: 18,
  },
  loading: {
    opacity: 0.5,
  },
  loadingIndicator: {
    marginLeft: 8,
  },
});

export default CustomButton;
