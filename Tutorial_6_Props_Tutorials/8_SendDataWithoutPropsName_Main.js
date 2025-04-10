
import { 
  Text,
  StyleSheet,
  View,
} from 'react-native';
import Recieve from "./8_SendDataWithoutPropsName_Child.js"
const Name = () => {
  const DatabyObjectClass={Data1:"Data-1",Data2:"Data-2"};
  return (
    <View style={styles.container}>
      <Recieve {...DatabyObjectClass} />
    </View>
  );
}
export default Name
const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems:"center",
    justifyContent:"center",
    backgroundColor:"#fff",
  }
});