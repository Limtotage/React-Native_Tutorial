import { 
  Text,
  StyleSheet,
  View,
  Button,
} from 'react-native';
const Recieve = (props) => {
  return (
    <View style={styles.container}>
      <Text style={{color:props.SendedDatas.Data1.color}}>{props.SendedDatas.Data1.text} </Text>
      <Text style={{color:props.SendedDatas.Data2.color}}>{props.SendedDatas.Data2.text} </Text>
      <Text style={{color:props.SendedDatas.Data3.color}}>{props.SendedDatas.Data3.text} </Text>
      <Text style={{color:props.SendedDatas.Data4.color}}>{props.SendedDatas.Data4.text} </Text>
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