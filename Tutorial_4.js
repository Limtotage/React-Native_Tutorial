import React from 'react';
import LoginPage from './src/Screens/LoginPage';
import SignupPage from './src/Screens/SignupPage';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        
        <Stack.Screen
        name="Login"
        component={LoginPage}
        />
        <Stack.Screen
        name="Signup"
        component={SignupPage}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
