import { 
  Text,
  StyleSheet,
  View,
} from 'react-native';
import Recieve from "./7_ExpertObjectProps_Child"
const Name = () => {
  const Datas={
    Data1:{
      color:"red",
      text:"Data-1"
    },
    Data2:{
      color:"green",
      text:"Data-2"
    },
    Data3:{
      color:"black",
      text:"Data-3"
    },
    Data4:{
      color:"purple",
      text:"Data-4"
    }
  }
  return (
    <View style={styles.container}>
      <Recieve SendedDatas = {Datas} />
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