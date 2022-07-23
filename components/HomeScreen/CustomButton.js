import React from 'react'
import{TouchableOpacity, Text, StyleSheet} from 'react-native'

export default ({title = 'N/A', color = '#fca311', onPress}) =>(
    <TouchableOpacity style = {[styles.button, {backgroundColor: color}]} onPress={onPress}>
    <Text style = {styles.text}>{title.toUpperCase()}</Text>
    </TouchableOpacity>
  )

const styles =  StyleSheet.create({
  button:{
    justifyContent:"center",
    height:60,
    alignItems:"center",
    borderRadius:10,
    elevation:3,
    color: 'blue'
  },

  text:{
    color:'white',
    fontSize:20,
    fontWeight:'bold',
    fontFamily:'roboto'
  },

})
