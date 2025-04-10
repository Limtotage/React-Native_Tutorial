import { 
  Text,
  StyleSheet,
  View,
  Button,
} from 'react-native';
const Recieve = (props) => {
  return (
    <View style={styles.container}>
      <Button title="Run Function" onPress={()=>props.NameofRunnedFunction()}/>
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