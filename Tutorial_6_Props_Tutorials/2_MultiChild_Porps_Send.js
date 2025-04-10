import { 
  Text,
  StyleSheet,
  View,
} from 'react-native';
import Recieve from "./2_MultiChild_Porps_Recieve"
const Name = () => {
  const Data1="Data1"
  const Data2="Data2"
  const Data3="Data3"
  const Data4="Data4"
  return (
    <View style={styles.container}>
      <Recieve First={Data1} Second={Data2} />
      <Recieve First={Data3} Second={Data4} />
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