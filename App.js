import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

import EventScreen from './components/EventScreen/EventScreen'
import HomeScreen from './components/HomeScreen/homeScreen'
import LoginScreen from './components/LoginScreen/LoginScreen'
import CadastroScreen from './components/CadastroScreen/CadastroScreen'
import foto from './components/assets/FestLogo.png'
import AsyncStorage from '@react-native-async-storage/async-storage'

import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import { AntDesign } from '@expo/vector-icons'
import { FontAwesome } from '@expo/vector-icons'

const Stack = createNativeStackNavigator();

export default()=>(
  <NavigationContainer>
    <Stack.Navigator
      initialRouteName='login' 
      options={{
        
      }}
    >
    <Stack.Screen
      name='login'
      component={LoginScreen}
      options={{headerShown:false}}
    />

    
    <Stack.Screen
      name='Cadastro'
      component={CadastroScreen}
      options={{
          headerShown:false
      }}
    />

    <Stack.Screen
      name='home'
      component={HomeScreen}
      options={{headerShown:false}}
      />

      <Stack.Screen
        name='Eventos'
        component={EventScreen}
        options={{
            
        }}
      />

 
  
    </Stack.Navigator>
  </NavigationContainer>   
)


