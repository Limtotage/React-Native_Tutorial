import { 
  Text,
  StyleSheet,
  View,
  Button,
} from 'react-native';
const Recieve = (props) => {
  return (
    <View style={styles.container}>
      <Text>{props.SendingData[0]} </Text>
      <Text>{props.SendingData[1]} </Text>
      <Text>{props.SendingData[2]} </Text>
      <Text>{props.SendingData[3]} </Text>
    </View>
  );
}
export default Recieve
const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems:"center",
    justifyContent:"center",
    backgroundColor:"white",
  }
});