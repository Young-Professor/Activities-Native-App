import React, { useState } from "react";
import { StyleSheet, TextInput, Button} from 'react-native'
import { View } from 'react-native'

export default function AddTodo( { handleSubmit }) {
    const[Task, setTodo]=useState('')
    const HandleChange= (val)=>{
      setTodo(val)
    }
  return (
    <View>
        <TextInput style={styles.input}
            placeholder='Enter your todo here'
            onChangeText={(val)=>HandleChange(val)}
            />
            <View  style={styles.Button}>
            <Button onPress={()=>handleSubmit(Task)} title='Add Todo'/>
            </View>
     </View>
  )
}
const styles = StyleSheet.create({
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
  
