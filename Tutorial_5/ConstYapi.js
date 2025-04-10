import { 
  Text,
  StyleSheet,
  View,
} from 'react-native';
const Name = () => {
  return (
    <View style={styles.container}>
      <Text style = {styles.closeButtonText}> Welcome </Text>
    </View>
  );
}
export default Name
const styles = StyleSheet.create({
  container: {
    position:"absolute",
    width:"100%",
    height:"100%",
    backgroundColor:"tomato",
    alignItems:"center",
    justifyContent:"center",
  }
});