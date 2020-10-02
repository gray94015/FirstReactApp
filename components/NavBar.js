import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const NavBar = () => {
  return(
    <View style={styles.header}>
        <View style={styles.navItem}> 
            <Text>Home</Text>
        </View>
        <View style={styles.navItem}> 
            <Text>Inspections</Text>
        </View>
        <View style={styles.navItem}> 
            <Text>Organizations</Text>
        </View>
        <View style={styles.navItem}> 
            <Text>Properties</Text>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
  header:{
    height: 50,
    padding: 15,
    backgroundColor: 'lightblue',
    flexDirection: 'row',
    justifyContent: "flex-end",
  },
  navItem: {
      paddingEnd: 15,
      textAlign: "right",
  },
  text:{
      color: "#fff",
      fontSize: 23,
      textAlign: "left",
  },
});

export default NavBar;