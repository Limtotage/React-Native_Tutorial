import { 
  Text,
  StyleSheet,
  View,
} from 'react-native';
import {React,useState} from "react"
import Recieve from "./6_RunFunctionFromChild_Child"
const Name = () => {
  const [TextSample,SetTextSample] = useState("Istanbul")
  const RunnedFunction=()=>{
    SetTextSample("Ankara")
  }
  return (
    <View style={styles.container}>
      <Text>{TextSample}</Text>
      <Recieve NameofRunnedFunction = {RunnedFunction} />
    </View>
  );
}
export default Name
const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems:"center",
    justifyContent:"center",
    backgroundColor:"orange",
  }
});