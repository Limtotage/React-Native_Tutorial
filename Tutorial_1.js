import { Text, View, StyleSheet } from 'react-native';

// You can import supported modules from npm
import { Card } from 'react-native-paper';

// or any files within the Snack
import AssetExample from './components/AssetExample';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
        Change code in the editor and watch it change on your phone! Save to get a shareable url.
      </Text>
      <View style={styles.subcontainer}>
        <Text style={styles.textstyle}> Test Text</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems:"center",
    backgroundColor: '#fff',
    padding: 8,
  },
  subcontainer: {
    alignItems:"center",
    justifyContent: 'center',
    width:"60%",
    height:200,
    borderRadius:50,
    borderWidth:5,
    borderColor:"blue",
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  textstyle:{
    color:"red",
    fontSize: 35,
    fontWeight:"bold",
  },
});
