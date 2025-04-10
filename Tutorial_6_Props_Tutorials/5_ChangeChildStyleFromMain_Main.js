import { 
  Text,
  StyleSheet,
  View,
} from 'react-native';
import Recieve from "./5_ChangeChildStyleFromMain_Child"
const Name = () => {
  const Color="red"
  return (
    <View style={styles.container}>
      <Recieve SendedColor = {Color} />
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