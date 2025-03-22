// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAytG3_O1O7bVWrUSTIK4sbk-RspAbEEI8",
  authDomain: "meu-primeiro-firebase-df50c.firebaseapp.com",
  projectId: "meu-primeiro-firebase-df50c",
  storageBucket: "meu-primeiro-firebase-df50c.firebasestorage.app",
  messagingSenderId: "547302080103",
  appId: "1:547302080103:web:689b8f694a77ce0d415ec2"
};

firebase.initializeApp(firebaseConfig);

import React, {useEffect, useState} from 'react';
import {View, Text, FlatList} from 'react-native';

export default function App() {
  const [nomes, setNomes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const nomesCollection = firebase.firestore().collection('Nomes');
      const snapshot = await nomesCollection.get();

      const data = [];
      snapshot.forEach((doc) => {
        data.push({ id: doc.id, ...doc.data() });
      });

      setNomes(data);
    };

    fetchData();
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: 'center',
    aligntItems: 'center'}}>
        <Text>Lista de Nomes:</Text>
        <FlatList
          data={nomes}
          keyExtractor={(item) => item.id}
          renderItem={({ item}) => (
            <View>
              <text>{item.Nome} {item.Sobrenome}</text>
            </View>
          )}
      </View>
  )

}