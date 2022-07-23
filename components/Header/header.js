import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import Constants from 'expo-constants';
import { AntDesign } from '@expo/vector-icons';
import logo from '../assets/FestLogo.png'

export default({navigation, route,  onPress})=>(
  <View style={styles.container}>
    <Image source={logo}/>
    <View style={styles.icone}>
      <TouchableOpacity>
        <AntDesign name="user" size={40} color="black"/>
        <Text>Usuário</Text>
      </TouchableOpacity>
    </View>
  </View>
)

const styles = StyleSheet.create({
  container:{
    backgroundColor:'white',
    flexDirection:'row',
    justifyContent:"center"
  },
  icone:{
    justifyContent:"center",
  }
}) 