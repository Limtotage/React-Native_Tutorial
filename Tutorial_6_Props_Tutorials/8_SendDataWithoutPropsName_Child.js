import { 
  Text,
  StyleSheet,
  View,
  Button,
} from 'react-native';
const Recieve = (props) => {
  return (
    <View style={styles.container}>
      <Text>{props.Data2} </Text>
      <Text>{props.Data1} </Text>
    </View>
  );
}
export default Recieve
const styles = StyleSheet.create({
  container: {
    alignItems:"center",
    justifyContent:"center",
    backgroundColor:"#fff",
  }
});