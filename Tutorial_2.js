import { 
  Text,
  StyleSheet,
  TextInput,
  Pressable,
  View
} from 'react-native';
import React, {useState} from 'react';


export default function App() {

  const [name,setName] = useState("")//string değer alacak boş ise sayı köşeli parantez array
  const [lastName,setLastName]=useState("")
  const [result,setResult]=useState("")

  return (
    <View style={styles.container}>
      <Text> Welcome {result} </Text>
      <Text> Name </Text>
      <TextInput
      placeholder="Enter Your Name"
      style={styles.textInputstyle}
      //onChangeText={(value)=>setName(value)}böyle de yapılabilir
      onChangeText={setName}//böylede
      value={name}
      />
      <Text> Last Name </Text>
      <TextInput
      placeholder="Enter Your Last Name"
      style={styles.textInputstyle}
      onChangeText={setLastName}
      value={lastName}
      />
      <Pressable 
        onPress={()=>setResult(name+" "+lastName)}
        style={({pressed})=>[
          {
            backgroundColor: pressed? "lightblue":'blue',

          },styles.buttonStyle]}>

        <Text style={styles.buttonTextStyle}> Save </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({

  textInputstyle:{
    borderWidth:1,
    width:"80%",
    height:50,
    borderRadius:10,
    marginVertical:10,
    textAlign:"center",
    color:'blue',
    fontWeigth:'bold',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems:'center',
    justifyContent: 'center',
  },
  buttonStyle:{
    width:"80%",
    height:50,
    borderRadius:10,
    alignItems:'center',
    justifyContent:'center',
  },
  buttonTextStyle:{
    fontWeight:'bold',
    color:"white",
  }
});
