import { LoginPage, SignupPage } from '../Screens/index';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator 
    initialRouteName ="Login"
    screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={LoginPage} />
      <Stack.Screen name="Signup" component={SignupPage} />
    </Stack.Navigator>
  );
};
export default AuthStack;
