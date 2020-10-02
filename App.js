import React, {useState} from 'react';
import {View, Text, StyleSheet, FlatList, Image} from 'react-native';
import Header from './components/Header';
import NavBar from './components/NavBar';
// import { uuid } from 'uuidv4';

const App = () => {

  // const [items, setItems] = useState([
  //   {id: Math.random(), text: 'Milk'},
  //   {id: Math.random(), text: 'Eggs'},
  //   {id: Math.random(), text: 'Bread'},
  //   {id: Math.random(), text: 'Juice'},
  // ]);

  return(
    <View style={styles.container}>
      <Header title='Telespection'/>
      <NavBar/>
      <View>
        <Text style={styles.text}>Welcome, User!</Text>
        <Image 
          source={{uri: 'https://rapidstartcrm.com/wp-content/uploads/Home-Builder-9.jpg'}} 
          style={styles.img}
        />
      </View>
      
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    // paddingTop: 60,
  },
  text:{
    paddingTop: 50,
    textAlign: "center",
    fontSize: 30,
    paddingBottom: 50,
  },
  img:{
    width: 400,
    height: 200,
    alignSelf: "center"
  }
});

export default App;