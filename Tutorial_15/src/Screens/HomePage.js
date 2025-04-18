import {
  Text,
  StyleSheet,
  View,
  TextInput,
  Pressable,
  FlatList,
  SafeAreaView,
} from 'react-native';
import { db } from '../../firebaseConfig';
import { logout } from '../redux/userSlice';
import { CustomButton } from '../components/index.js';
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Animated,{BounceIn,FlipInYRight,PinwheelIn} from "react-native-reanimated";

const HomePage = () => {
  const [data, setData] = useState([]);
  const [isChanged, setIsChanged] = useState(false);
  const [updateTheData, setUpdateTheData] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    getData();
  }, [isChanged]);

  const sendData = async () => {
    try {
      const docRef = await db.collection('ReactNativeTestApp').add({
        title: 'Zero to Hero',
        content: 'React Native tutorial for beginner',
        lesson: 95,
      });
      console.log('Document Written with ID : ', docRef.id);
    } catch (e) {
      console.error('Error adding document: ', e);
    }
  };
  const getData = async () => {
    const allData = [];
    try {
      const querySnapshot = await db.collection('ReactNativeTestApp').get();
      querySnapshot.forEach((doc) => {
        allData.push({ ...doc.data(), id: doc.id });
      });
      setData(allData);
      console.log('Data Get Successfully.');
    } catch (error) {
      console.error('Data Cant Get: ', error);
    }
  };
  const deleteData = async (value) => {
    try {
      await db.collection('ReactNativeTestApp').doc(value).delete();
      console.log('Data Deleted Successfully.');
    } catch (error) {
      console.error('Data Cant Deleted: ', error);
    }
  };
  const updateData = async (value) => {
    try {
      await db.collection('ReactNativeTestApp').doc(value).update({
        content: updateTheData,
      });
      console.log('Data Updated Successfully.');
    } catch (error) {
      console.error('Data Cant Updated: ', error);
    }
  };
  const hadleLogout = () => {
    dispatch(logout());
  };
  const renderItem = ({ item ,index}) => {
    return (
      <Animated.View 
      entering = {FlipInYRight.delay(150*(index+1))}//BounceIn.duration(400) Animasyonları react native reanimated sitesinden görebilirsin
      style={styles.flatlistContainer}>
        <Pressable>
          <Text>{item?.id}</Text>
          <Text>{item.title}</Text>
          <Text>{item.content}</Text>
          <Text>{item.lesson}</Text>
        </Pressable>
      </Animated.View>
    );
  };
  //onPress={() => [deleteData(item.id), setIsChanged(!isChanged)]}//deleteişlemi tıklayarak
  // onPress={() => [updateData(item.id), setIsChanged(!isChanged)]}//deleteişlemi tıklayarak
  // key={index}>
  // <Text>{index}</Text>
  return (
    <SafeAreaView style={styles.container}>
      value={updateTheData}
      <TextInput
        placeholder="enter your  data"
        onChangeText={setUpdateTheData}
        style={{
          borderWidth: 2,
          width: '50%',
          paddingVertical: 10,
          textAlign: 'center',
          marginBottom: 30,
        }}
      />
      <Animated.FlatList
        entering={PinwheelIn}
        style={styles.flatlist}
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={renderItem} //isim genelde aynı kullanılır zorunluluk yok
      />
      <CustomButton
        buttonText="Save Data"
        setWidth="40%"
        handleOnPress={() => {
          sendData(), setIsChanged(!isChanged);
        }}
        pressedColor="lightgray"
        nonPressedColor="blue"
      />
      <CustomButton
        buttonText="Read Data"
        setWidth="40%"
        handleOnPress={() => getData()}
        pressedColor="lightgray"
        nonPressedColor="purple"
      />
      <CustomButton
        buttonText="Delete Data"
        setWidth="40%"
        handleOnPress={() => {
          deleteData(), setIsChanged(!isChanged);
        }}
        pressedColor="lightgray"
        nonPressedColor="gray"
      />
      <CustomButton
        buttonText="Update Data"
        setWidth="40%"
        handleOnPress={() => {
          updateData(), setIsChanged(!isChanged);
        }}
        pressedColor="lightgray"
        nonPressedColor="green"
      />
      <CustomButton
        buttonText="Logout"
        setWidth="40%"
        handleOnPress={hadleLogout}
        pressedColor="lightgray"
        nonPressedColor="red"
      />
    </SafeAreaView>
  );
};
export default HomePage;
const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'lightblue',
  },
  flatlistContainer:{
    borderWidth:1,
    marginVertical:5,
    flex:1,
    alignItems:"center",
    justifyContent:"center"
  },
  flatlist:{
    width:"90%",
    backgroundColor:"white",
    padding:10
  }
});
