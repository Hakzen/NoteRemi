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
      style={[styles.buttonContainer, containerStyles, isLoading && styles.disabledButton]}
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
          style={styles.loader}
        />
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: '#FFA500', // orange
    borderRadius: 20,
    minHeight: 62,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  buttonText: {
    color: '#fff', // primary text color
    fontSize: 18,
    fontWeight: '600',
  },
  loader: {
    marginLeft: 10,
  },
  disabledButton: {
    opacity: 0.5,
  },
});

export default CustomButton;
