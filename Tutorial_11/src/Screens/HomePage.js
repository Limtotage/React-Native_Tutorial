import { Text, StyleSheet, View, FlatList } from 'react-native';
import { db } from '../../firebaseConfig'; // normalde firebase/firestore eklenir fakat exposnackte hata veriyor.
import { CustomButton } from '../components/index.js';
import React, { useState } from 'react';

const HomePage = () => {
  const [data, setData] = useState([]);
  console.log('data: ', data[1]?.title);
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
    const querySnapshot = await db.collection('ReactNativeTestApp').get();
    querySnapshot.forEach((doc) => {
      //setData(doc.data());//tek bi veri alacaktır.
      setData([...data, doc.data()]); // verilerin sonuna ekle mansaına gelir
    });
    /*const fetchedData = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setData(fetchedData);*/
  };
  const deleteData = async () => {
    try {
      await db
        .collection('ReactNativeTestApp')
        .doc('PbmyLKEPm3puYi7casU4')
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
        .doc('0RobqyyQuYndqI6JkEhd').update({
        lesson: 25, // örnek olarak yeni değeri 100 yaptık
      });
      console.log('Data Updated Successfully.');
    } catch (error) {
      console.error('Data Cant Updated: ', error);
    }
  };
  return (
    <View style={styles.container}>
      <CustomButton
        buttonText="Save Data"
        setWidth="40%"
        handleOnPress={() => sendData()}
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
        handleOnPress={() => deleteData()}
        pressedColor="lightgray"
        nonPressedColor="red"
      />
      <CustomButton
        buttonText="Update Data"
        setWidth="40%"
        handleOnPress={() => updateData()}
        pressedColor="lightgray"
        nonPressedColor="green"
      />
      <Text>Title: {data[0]?.title}</Text>
      <Text>Content: {data[0]?.content}</Text>
      <Text>Lesson: {data[0]?.lesson}</Text>
      
    </View>
  );
};
/*
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Text style={styles.itemText}>Title: {item.title}</Text>
            <Text style={styles.itemText}>Content: {item.content}</Text>
            <Text style={styles.itemText}>Lesson: {item.lesson}</Text>
          </View>
        )}
      />
      */
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
