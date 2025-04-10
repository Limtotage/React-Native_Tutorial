import { 
  Text,
  StyleSheet,
  View,
} from 'react-native';
import Recieve from "./1_SendingArray_Recieve"
const Name = () => {
  const Data=["Test-1","Test-2","Test-3","Test-4"]
  return (
    <View style={styles.container}>
      <Recieve SendingData={Data} />
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