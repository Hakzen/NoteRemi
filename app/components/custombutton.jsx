import React from "react";
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
        styles.container,
        containerStyles,
        isLoading && styles.loadingContainer
      ]}
      disabled={isLoading}
    >
      <Text style={[styles.text, textStyles]}>{title}</Text>

      {isLoading && (
        <ActivityIndicator
          animating={isLoading}
          color="#fff"
          size="small"
          style={styles.loader}
        />
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f97316', // orange-500
    borderRadius: 24,  // equivalent to rounded-xl
    minHeight: 62,     // min-h-[62px]
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingContainer: {
    opacity: 0.5, // Add reduced opacity when loading
  },
  text: {
    color: '#fff', // text-primary (assuming white text for primary)
    fontFamily: 'Poppins-SemiBold', // font-psemibold, or use the appropriate font family
    fontSize: 18,   // text-lg (equivalent to 18px)
  },
  loader: {
    marginLeft: 8,  // ml-2
  },
});

export default CustomButton;
