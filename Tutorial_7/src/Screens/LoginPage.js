import { Text, Image, StyleSheet, View } from 'react-native';
import React, { useState, useEffect } from 'react';
import { Loading, CustomTextInput, CustomButton } from '../components/index.js'; //Kod import etmek

const LoginPage = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    console.log(isLoading);
  }, [isLoading]);

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
        handleonChangeText={setEmail}
        handlevalue={email}
        handleplaceholder="Enter Your E-mail"
      />
      <CustomTextInput
        handletitle="Password"
        handleisSecureText={true}
        handleonChangeText={setPassword}
        handlevalue={password}
        handleplaceholder="Enter Your Password"
      />
      <CustomButton
        buttonText="Login"
        setWidth="80%"
        handleOnPress={() => setIsLoading(true)}
        pressedColor="lightblue"
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
        <Loading changeIsLoading={() => setIsLoading(false)} />
      ) : null}
    </View>
  );
};

export default LoginPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',
  },

  image: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  welcome: {
    fontWeigth: 'bold',
    fontSize: 30,
    marginBottom: 30,
  },
});
