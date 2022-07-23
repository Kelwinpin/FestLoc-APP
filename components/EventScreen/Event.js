import React from 'react'
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native'
import { AntDesign, Octicons  } from '@expo/vector-icons';

 const onfirst = ()=>(
    <TouchableOpacity>
      <Octicons name="star" size={20} color="yellow"/>
    </TouchableOpacity>
  )

export default ({foto, local, nome, data,hora}) =>(

 
  <View style={styles.container}>

      <View style={{backgroundColor:'#E0D8C8', borderRadius:10}}>  
      
        <Text style={styles.baseText}>{nome}</Text>

        <Image source = {foto} style={styles.imagem}/>

        <Text style={styles.baseText2}>{local}</Text>
        <Text style={styles.baseText2}>{hora}</Text>
        <Text style={styles.baseText2}>{data}</Text> 

        <View style={{flexDirection:"row", padding:5}}>
         
          <TouchableOpacity onPress={onfirst}>
            <Octicons name="star" size={20} color="white"/>
          </TouchableOpacity>

          <TouchableOpacity>
            <Octicons name="star" size={20} color="white"/>
          </TouchableOpacity>

          <TouchableOpacity>
            <Octicons name="star" size={20} color="white"/>
          </TouchableOpacity>

          <TouchableOpacity>
            <Octicons name="star" size={20} color="white"/>
          </TouchableOpacity>

          <TouchableOpacity>
            <Octicons name="star" size={20} color="white"/>
          </TouchableOpacity>
          
        </View>
      </View>

  </View>
)

 const styles = StyleSheet.create({
   container:{
     flexDirection:'column',
     padding: 20,
     justifyContent:'space-between',
     alignItems:'center',
     backgroundColor:'white'
   },

   imagem:{
     height:180,
     width:200,
   },

   baseText:{
     fontFamily:'Copperplate',
     fontWeight:'bold',
     color:'black',
     fontSize: 20,
     textAlign:"center"
   },

   baseText2:{
     fontFamily:'Arial',
     fontWeight:'bold',
     color:'grey',
     textAlign:"center"
   }

 })