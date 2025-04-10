import { 
  Text,
  StyleSheet,
  View,
  Button,
} from 'react-native';
const Recieve = (props) => {
  const SendedData = "Data From Child"
  return (
    <View style={styles.container}>
      <Button title="Send Data" onPress={()=>props.DataPropsName(SendedData)}/>
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