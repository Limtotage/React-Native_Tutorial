import { 
  Text,
  StyleSheet,
  View,
} from 'react-native';
import Recieve from "./3_SendingDataFromMain_Child"
const Name = () => {
  const Data="Data from Main Component"
  return (
    <View style={styles.container}>
      <Recieve PropsName = {Data} />
    </View>
  );
}
export default Name
const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems:"center",
    justifyContent:"center",
    backgroundColor:"black",
  }
});