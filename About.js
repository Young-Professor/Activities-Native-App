import React from 'react'
import { StyleSheet, Text, View, Button } from "react-native";

export default function About({navigation}) {
  return (
   <View style={styles.Container} >
    <Text style={styles.body}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi voluptatem est esse aspernatur, id laborum architecto officiis recusandae quasi maxime quam neque delectus nam sunt laudantium et iusto, qui repudiandae eligendi asperiores corporis, provident velit eius voluptatum! Accusantium, ab iste? Unde commodi sequi nam quaerat sint harum illum perspiciatis cum.</Text>
    <Button
        title="Go to Home page"
        onPress={() => navigation.navigate("Home")}
      />
  </View>
  )
}
const styles = StyleSheet.create({
    Container: {
        flex:1,
      alignContent:'center',
      height:70,
    backgroundColor: "#030B39",
    },
    body:{
      color:'white'
    }
  });
