import { Text, StyleSheet, View, FlatList } from 'react-native';
import { db } from '../../firebaseConfig';
import { CustomButton } from '../components/index.js';
import React, { useState, useEffect } from 'react';

const HomePage = () => {
  const [data, setData] = useState([]);
  const [isChanged, setIsChanged] = useState(false);

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
        allData.push(doc.data());
      });
      setData(allData);
      console.log('Data Get Successfully.');
    } catch (error) {
      console.error('Data Cant Get: ', error);
    }
  };
  const deleteData = async () => {
    try {
      await db
        .collection('ReactNativeTestApp')
        .doc('lkA6i7SP0GviTW7zZwcq')
        .delete();
      console.log('Data Deleted Successfully.');
    } catch (error) {
      console.error('Data Cant Deleted: ', error);
    }
  };
  const updateData = async () => {
    try {
      await db
        .collection('ReactNativeTestApp')
        .doc('0RobqyyQuYndqI6JkEhd')
        .update({
          lesson: 90, 
        });
      console.log('Data Updated Successfully.');
    } catch (error) {
      console.error('Data Cant Updated: ', error);
    }
  };
  return (
    <View style={styles.container}>
      {data.map((value, index) => {
        return (
          <View key={index}>
            <Text>{index}</Text>
            <Text>{value.title}</Text>
            <Text>{value.content}</Text>
            <Text>{value.lesson}</Text>
          </View>
        );
      })}
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
        handleOnPress={() => {deleteData(),setIsChanged(!isChanged)}}
        pressedColor="lightgray"
        nonPressedColor="red"
      />
      <CustomButton
        buttonText="Update Data"
        setWidth="40%"
        handleOnPress={() => {updateData(),setIsChanged(!isChanged)}}
        pressedColor="lightgray"
        nonPressedColor="green"
      />
    </View>
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
});
