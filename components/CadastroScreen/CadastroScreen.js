import React from 'react'
import {KeyboardAvoidingView, View, Image,TextInput, TouchableOpacity, Text, StyleSheet, StatusBar } from 'react-native'
import Constants from 'expo-constants';

import Logo from '../assets/FestLogo.png'

export default({navigation})=>(
  <KeyboardAvoidingView style={styles.background}>
    
    <View style={styles.container}>
      <Image source ={Logo}/>
    </View>

    <View style={styles.containerInput}>
      <TextInput  style={styles.input}
        placeholder =  'Nome'
        autoCorrect = {false}
        onChangeText = {() => {}}
      / >
      <TextInput  style={styles.input}
        placeholder =  'E-mail'
        autoCorrect = {false}
        onChangeText = {() => {}}
      / >
      <TextInput  style={styles.input}
        placeholder =  'Senha'
        autoCorrect = {false}
        onChangeText = {() => {}}
      / >
      <TouchableOpacity onPress={()=>navigation.navigate('home')}>
        <Text style={styles.criar}> Criar conta </Text>
      </TouchableOpacity>
 
    </View>
    
  </KeyboardAvoidingView>
)

const styles = StyleSheet.create({
  container:{
    
  },
  background:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fca311',
    marginTop: Constants.statusBarHeight,
  },
  input:{
    color: 'white',
    backgroundColor: '#000',
    textAlign:'center',
    width: '90%',
    marginBottom: 15,
    fontSize: 17,
    borderRadius: 7,
    padding: 10,
  },
  criar:{
    fontSize:20,
    color: '#000',
  },
  containerInput:{
    flex:1,
    justifyContent:'center',
    alignItems: 'center',
    width: '90%',
  }
})