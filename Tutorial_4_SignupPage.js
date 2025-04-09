import { Text, StyleSheet, View } from 'react-native';
const SignupPage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.closeButtonText}> Welcome Sign up Page </Text>
    </View>
  );
};
export default SignupPage;
const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
