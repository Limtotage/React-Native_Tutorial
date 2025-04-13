import { Text, Image, StyleSheet, View } from 'react-native';
import { Loading, CustomTextInput, CustomButton } from '../components/index.js'; //Kod import etmek
import {useSelector,useDispatch} from "react-redux";
import {setEmail,setIsLoading,setPassword,setLogin} from "../redux/userSlice"

const LoginPage = ({ navigation }) => {
//userSlice içerisindeki verilerin okunması
const {email,password,isLoading} = useSelector((state) => state.user) //tüm yapılar fakat tekbir yapı için alttaki
//const testmail = useSelector((state)=>state.user.email)

//console.log("E-mail: ", email, " Password: ",password , " Is Loading: ",isLoading)

//userSlice içerisindeki reducer yapılarını kullanma veya veri gönderme
const dispatch=useDispatch()//isim sektör standartı olduğu için dispatch


  return (
    <View style={styles.container}>
      <Text style={styles.welcome}> Welcome </Text>
      <Image
        source={require('../../assets/Images/loginicon.png')} //dosya konumdan yükleme
        style={styles.image}
      />
      <CustomTextInput
        handletitle="E-mail"
        handleisSecureText={false}
        handleonChangeText={(text)=>dispatch(setEmail(text))} 
        handlevalue={email}
        handleplaceholder="Enter Your E-mail"
      />
      <CustomTextInput
        handletitle="Password"
        handleisSecureText={true}
        handleonChangeText={(password)=>dispatch(setPassword(password))}
        handlevalue={password}
        handleplaceholder="Enter Your Password"
      />
      <CustomButton
        buttonText="Login"
        setWidth="70%"
        handleOnPress={() => dispatch(setLogin())}
        pressedColor="lightgray"
        nonPressedColor="blue"
      />
      <CustomButton
        buttonText="Sign Up"
        setWidth="30%"
        handleOnPress={() => navigation.navigate('Signup')}
        pressedColor="gray"
        nonPressedColor="lightgray"
      />

      {isLoading ? (
        <Loading changeIsLoading={() => dispatch(setIsLoading(false))} />
      ) : null}
    </View>
  );
};

export default LoginPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
    paddingTop: 50,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },

  image: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  welcome: {
    fontWeight: 'bold',
    fontSize: 30,
    marginBottom: 30,
  },
});
