import { 
  Text,
  StyleSheet,
  View,
  Button,
} from 'react-native';
const Recieve = (props) => {
  return (
    <View style={styles.container}>
      <Text style={{color:props.SendedColor}}>Test Text</Text>
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