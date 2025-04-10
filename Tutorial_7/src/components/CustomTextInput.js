import { 
  Text,
  StyleSheet,
  View,
  TextInput,
} from 'react-native';
const CustomTextInput = (props) => {
  return (
    <View style={styles.inputContainer}>
        <Text style={styles.inputBoxText}> {props.handletitle} </Text>
        <TextInput
          secureTextEntry={props.handleisSecureText}
          placeholder={props.handleplaceholder}
          style={styles.textInputstyle}
          onChangeText={props.handleonChangeText}
          value={props.handlevalue}
        />
      </View>
  );
}
export default CustomTextInput
const styles = StyleSheet.create({
  textInputstyle: {
    borderBottomWidth: 0.5,
    width: '80%',
    height: 50,
    borderRadius: 10,
    marginVertical: 10,
    textAlign: 'center',
    color: 'gray',
    fontWeight: 'bold',
    alignSelf: 'center', // eklenebilir
  },
  inputBoxText: {
    fontWeight: 'bold',
    alignSelf:"flex-start"
  },
  inputContainer:{
    alignSelf: "center",
    width:"80%",
  },
});