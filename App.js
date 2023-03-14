import { StatusBar  } from "expo-status-bar";
import { useState } from "react";
import {StyleSheet,Text,View,FlatList, Alert, TouchableWithoutFeedback, Keyboard,Button} from "react-native";
import Header from "./Header";
import Tasks from "./.expo/Tasks";
import AddTodo from "./AddTodo";
import Navigator from './screens'
import Home from "./assets/Home";
import About from "./About";
export default function App({ navigation }) {
  const [tasks, setTasks] = useState([
    { Task: "Learn JavaScript", key: 1 },
    { Task: "Learn React Native", key: 2 },
    { Task: "Read a Book", key: 3 },
    { Task: "Do wokouts", key: 4 },
  ]);

  // const pressHandler=(()=>{
  //   navigation.navigate("Home")
  //   console.log('clicked');
  // })
  const handleSubmit=(todo)=>{
    if(todo.length <= 3){
      Alert.alert("OOPS","Your Tasks Should have more than 3 characters",[
        {text: "Understood"}
      ])
      console.log("Your Tasks Should have more than 3 characters");
      return
    }
    setTasks((prevTasks)=> {
      return[
        { Task:todo, key: Math.random().toString()},
        ...prevTasks
      ];
    })
  }
  return (
    <TouchableWithoutFeedback style={styles.App} onPress={()=>{
      Keyboard.dismiss();
    }}>
    <View style={styles.container}>
      {/* <Header /> */}
      <Navigator />
      <AddTodo handleSubmit={handleSubmit}/>
      <View style={styles.body}>
        <Text style={styles.Header}>Today's tasks</Text>
        <FlatList
          data={tasks}
          renderItem={({ item }) => <Tasks item={item} />}
        />
      </View>
    </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 38,
    backgroundColor: "#030B39",
  },
  body: {
    flex: 1,
    backgroundColor: "#fff",
    borderTopEndRadius: 50,
    borderTopStartRadius: 50,
    marginTop: 20,
  },
  Header: {
    width: 150,
    padding: 10,
    marginLeft: 40,
    marginTop: 40,
    fontWeight: "bold",
    fontSize: 20,
  },
  line:{
    borderBottomWidth: 1,
    borderBottomColor: 'gray',

  },
  greetings: {
    color: "white",
    marginLeft: 10,
    fontSize:15
  },
  profiles:{
    flexDirection:"row",
    justifyContent:"space-between",
    marginTop:10
  },
  Avatar:{
    borderRadius:50,
    color:'white',
    height:50,
    width:50,
    backgroundColor:'#fff'
  },
  pic:{
    textAlign:'center',
    marginTop:15
  }
});
