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
    flex:1,
    alignItems:"center",
    justifyContent:"center",
  }
});