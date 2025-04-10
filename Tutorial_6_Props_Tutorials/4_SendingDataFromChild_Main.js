import { 
  Text,
  StyleSheet,
  View,
} from 'react-native';
import {React,useState} from "react"
import Recieve from "./4_SendingDataFromChild_Child.js"
const Name = () => {
  const [DataFromChild,SetDataFromChild] = useState("")
  return (
    <View style={styles.container}>
      <Text>{DataFromChild}</Text>
      <Recieve DataPropsName = {SetDataFromChild} />
    </View>
  );
}
export default Name
const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems:"center",
    justifyContent:"center",
    backgroundColor:"blue",
  }
});