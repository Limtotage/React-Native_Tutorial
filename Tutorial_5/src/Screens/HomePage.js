import { 
  Text,
  StyleSheet,
  View,
} from 'react-native';
const HomePage = () => {
  return (
    <View style={styles.container}>
      <Text style = {styles.closeButtonText}> Welcome </Text>
    </View>
  );
}
export default HomePage
const styles = StyleSheet.create({
  container: {
    width:"100%",
    height:"100%",
    alignItems:"center",
    justifyContent:"center",
  }
});