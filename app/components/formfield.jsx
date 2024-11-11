import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from "react-native";
import { icons } from "../constants";

const FormField = ({
  title,
  value,
  placeholder,
  handleChangeText,
  otherStyles,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View style={[styles.container, otherStyles]}>
      <Text style={styles.label}>{title}</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={value}
          placeholder={placeholder}
          placeholderTextColor="#7B7B8B"
          onChangeText={handleChangeText}
          secureTextEntry={title === "Password" && !showPassword}
          {...props}
        />
        {title === "Password" && (
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Image
              source={!showPassword ? icons.eye : icons.eyeHide}
              style={styles.icon}
              resizeMode="contain"
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    color: "#F5F5F5", // equivalent to text-gray-100
    fontFamily: "Poppins-Regular", // Change this to your preferred font
  },
  inputContainer: {
    width: "100%",
    height: 64, // equivalent to h-16
    paddingHorizontal: 16, // equivalent to px-4
    backgroundColor: "#FFFFFF", // equivalent to bg-white-500
    borderRadius: 24, // equivalent to rounded-2xl
    borderWidth: 2,
    borderColor: "#D1D1D6", // equivalent to border-gray-300
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: "#333333", // Set text color
    fontFamily: "OpenSans-Regular", // Change this to your preferred font
  },
  icon: {
    width: 24,
    height: 24,
  },
});

export default FormField;
