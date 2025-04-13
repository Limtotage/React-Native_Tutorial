import { HomePage, ProfilePage } from '../Screens/index';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

const UserStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}>
      <Stack.screen name="Home" component={HomePage} />
      <Stack.screen name="Profile" component={ProfilePage} />
    </Stack.Navigator>
  );
};
export default UserStack;
