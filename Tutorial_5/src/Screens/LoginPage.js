import {
  Text,
  Image,
  StyleSheet,
  TextInput,
  Pressable,
  View,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import Loading from '../components/Loading.js'; //Kod import etmek

const LoginPage = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    console.log(isLoading);
  }, [isLoading]);

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/Images/loginicon.png')} //dosya konumdan yükleme
        style={styles.image}
      />
      <Text style={styles.welcome}> Welcome </Text>
      <Text> User Email </Text>
      <TextInput
        inputMode="email"
        placeholder="Enter Your Email"
        style={styles.textInputstyle}
        onChangeText={setEmail}
        value={email}
      />
      <Text> Password </Text>
      <TextInput
        secureTextEntry={true}
        placeholder="Enter Your Password"
        style={styles.textInputstyle}
        onChangeText={setPassword}
        value={password}
      />
      <Pressable
        onPress={() => setIsLoading(true)}
        style={({ pressed }) => [
          {
            backgroundColor: pressed ? 'lightblue' : 'blue',
          },
          styles.buttonStyle,
        ]}>
        <Text style={styles.buttonTextStyle}> Save </Text>
      </Pressable>
      <Pressable
        onPress={() => navigation.navigate('Signup')}
        style={({ pressed }) => [
          {
            backgroundColor: pressed ? 'gray' : 'lightgray',
            marginTop: 10,
          },
          styles.signUpButton,
        ]}>
        <Text style={styles.buttonTextStyle}> Sign Up </Text>
      </Pressable>
      {isLoading ? (
        <Loading changeIsLoading={() => setIsLoading(false)} />
      ) : null}
    </View>
  );
};

export default LoginPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInputstyle: {
    borderWidth: 1,
    width: '80%',
    height: 50,
    borderRadius: 10,
    marginVertical: 10,
    textAlign: 'center',
    color: 'gray',
    fontWeigth: 'bold',
  },

  buttonStyle: {
    width: '80%',
    height: 50,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonTextStyle: {
    fontWeigth: 'bold',
    color: 'white',
  },
  image: {
    width: 150,
    height: 150,
  },
  welcome: {
    fontWeigth: 'bold',
    fontSize: 26,
  },
  signUpButton: {
    width: '30%',
    height: 50,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
