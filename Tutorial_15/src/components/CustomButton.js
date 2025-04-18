import { Text, StyleSheet, View, Pressable } from 'react-native';
const CustomButton = (props) => {
  return (
    <Pressable
      onPress={() => props.handleOnPress()}
      style={({ pressed }) => [
        {
          backgroundColor: pressed ? props.pressedColor : props.nonPressedColor,
          width: props.setWidth,
        },
        styles.buttonStyle,
      ]}>
      <Text style={styles.buttonTextStyle}> {props.buttonText} </Text>
    </Pressable>
  );
};

export default CustomButton;
const styles = StyleSheet.create({
  buttonStyle: {
    marginBottom: 10,
    height: 50,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonTextStyle: {
    fontWeigth: 'bold',
    color: 'white',
  },
});
