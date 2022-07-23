import React from 'react'
import {KeyboardAvoidingView, View, Image,TextInput, TouchableOpacity, Text, StyleSheet, StatusBar } from 'react-native'
import Constants from 'expo-constants';

import Logo from '../assets/FestLogo.png'

export default ({navigation, route}) => {
  return(
    <KeyboardAvoidingView style={styles.background}>
      
      <View style={styles.containerLogo}>
        <Image source ={Logo}/>
      </View>

      <View style={styles.containerText}>
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
        <TouchableOpacity style={styles.btnAcessar} onPress={()=>navigation.navigate('home')}>
          <Text style={styles.acessar}> Acessar </Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.btnCriarConta} onPress={()=>navigation.navigate('Cadastro')} >
          <Text style={styles.acessar}>criar conta</Text>
        </TouchableOpacity>
      </View>
      
    </KeyboardAvoidingView>
  )
}


const styles = StyleSheet.create({
  background:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fca311',
    marginTop: Constants.statusBarHeight,
  },

  containerLogo:{
    flex:1,
    justifyContent:'center'
  },
 
  containerText:{
    flex:1,
    justifyContent:'center',
    alignItems: 'center',
    width: '90%'
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
  } ,

  btnAcessar:{
    
  },

  acessar:{
    color: '#000',
    fontSize: 20,
  },

  btnCriarConta:{

  },


});