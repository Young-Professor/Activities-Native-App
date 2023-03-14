import React, { useState } from "react";
import {Ionicons} from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { StyleSheet,Text,View,TouchableOpacity,Button} from "react-native";

export default function Home({navigation}) {


  return (
    <View style={styles.container}>
      {/* <View style={styles.line} /> */}
      <View style={styles.profiles}>
        <View>
          <Text style={styles.greetings}>Hello!</Text>
          <Text style={styles.greetings}>Good Evening</Text>
        </View>
        <View style={styles.Avatar}>
          <Text style={styles.pic}>profile</Text>
        </View>
      </View>
      <Button
        title="Go to About"
        onPress={() => navigation.navigate("About")}
      />
      <View>
        <Text style={styles.categoryHeader}>Categories</Text>
        <View style={styles.category}>
          <TouchableOpacity>
            <View style={styles.eachCategory}>
               <Ionicons style={styles.icon} name="logo-designernews" size={24} color="black" />
               <Text style={styles.eachItem}>Design</Text>
                <AntDesign style={styles.icon} name="plus" size={24} color="black" />
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.eachCategory}>
              <MaterialIcons style={styles.icon}  name="library-books" size={24} color="black" />
              <Text style={styles.eachItem}>Learning</Text>
              <AntDesign style={styles.icon} name="plus" size={24} color="black" />
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.eachCategory}>
            <FontAwesome5 style={styles.icon} name="laptop-code" size={24} color="black" />
              <Text style={styles.eachItem}>Programming</Text>
              <AntDesign style={styles.icon} name="plus" size={24} color="black" />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: "#030B39",
  },
  line: {
    borderBottomWidth: 1,
    borderBottomColor: "gray",
    margin: 10,
  },
  greetings: {
    color: "white",
    fontSize: 15,
  },
  profiles: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
    margin: 10,
  },
  Avatar: {
    borderRadius: 50,
    color: "white",
    height: 50,
    width: 50,
    backgroundColor: "#fff",
  },
  pic: {
    textAlign: "center",
    marginTop: 15,
  },
  categoryHeader: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 10,
    marginTop: 20,
  },
  category: {
    // flex:1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  eachCategory: {
    justifyContent:'center',
    height: 100,
    width: 100,
    backgroundColor: "#078FFE",
    margin: 10,
    borderRadius: 10,
  },
  eachItem:{
    color: "white",
    textAlign: "center",
    fontSize:18
  },
  icon:{
    marginLeft:30,
    padding:10
  },
  input:{
    borderWidth:2,
    borderColor:'white',
    margin:20,
    borderRadius:10,
    backgroundColor:"gray",
    padding:5
  },
  Button:{
   marginHorizontal:20,
    color:'red'
  }
});
