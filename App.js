/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
ActivityIndicator,
  FlatList,
  Keyboard,
  TouchableWithoutFeedback,
  Alert,
} from 'react-native';
import Header from './components/header';
import TodoItem from './components/todoitem';
import AddTodo from './components/addtodo';


const App: () => React$Node = () => {
  const [todos,setTodos]= useState([
    {text:'On 3rd jan',key:'1'},
    {text:'meet Kamran',key:'2'},
    {text: 'meet hamza on saturday',key:'3'},
    ]);
    const pressHandler=(key)=>{
      setTodos((prevTodos)=>{
        return prevTodos.filter(todo=> todo.key != key);
      })
    }
    const submitHandler= (text) => {
      if(text.length>5){
        setTodos((prevTodos)=>{
          return [
            {text : text ,key : Math.random().toString()},
              ...prevTodos]
        })
      }else{
        Alert.alert('OHOO!', 'Todo must be over 5 characters long', [
          {text: 'Understood!', onPress: () => console.log('alert closed') }
        ]);
      }
      
    }


  return (
    <>
    <TouchableWithoutFeedback 
    onPress={()=>{Keyboard.dismiss();
    }}
    >
      <View style={styles.container}>
        {/* header */}
        <Header/>
        <View style={styles.content}>
          {/* to form */}
          <AddTodo submitHandler={submitHandler}/>
          <View style={styles.list}>
            <FlatList
            data={todos}
            renderItem={({item})=>(
              <TodoItem item={item} pressHandler={pressHandler}/>
            )}
            
            />

          </View>
        </View>

      </View>

      </TouchableWithoutFeedback>
      

    </>
  );
};

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#fff',
    justifyContent:'center',
    
  },
  content: {
    flex:1,
   padding: 40,
 },
  list:{
    flex:1,
   padding:10,
   marginTop:20,
  },
  

});

export default App;
