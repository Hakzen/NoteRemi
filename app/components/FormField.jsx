import React from 'react';
import { ActivityIndicator, Text, TouchableOpacity, StyleSheet } from 'react-native';

const CustomButton = ({
  title,
  handlePress,
  containerStyle,
  textStyle,
  isLoading,
  disabled,
}) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={0.7}
      style={[
        styles.buttonContainer,
        containerStyle,
        (isLoading || disabled) && styles.disabledButton,
      ]}
      disabled={isLoading || disabled}
      accessibilityRole="button"
      accessibilityState={{ disabled: isLoading || disabled }}
    >
      <Text style={[styles.buttonText, textStyle]}>
        {title}
      </Text>
      {isLoading && (
        <ActivityIndicator
          animating={isLoading}
          color="#fff"
          size="small"
          style={styles.spinner}
        />
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: '#f97316', // Orange color
    borderRadius: 15,
    minHeight: 62,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 16,
  },
  disabledButton: {
    opacity: 0.5,
  },
  buttonText: {
    color: '#ffffff', // White text color
    fontWeight: '600',
    fontSize: 18,
  },
  spinner: {
    marginLeft: 8,
  },
});

export default CustomButton;
