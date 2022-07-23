import React, {useLayoutEffect,useState, useEffect} from 'react'
import{View, Text, StyleSheet} from 'react-native'
import CustomButton from './CustomButton'
import MapView,{Marker} from 'react-native-maps'
import * as Location from 'expo-location';
import Header from '../Header/header'


export default({navigation,route})=>{
const [location, setLocation] = useState(null)

useEffect ( 
()=> { getCurrentPosition()},[]) 

async function getCurrentPosition(){
const {status} = await Location.requestForegroundPermissionsAsync()
if(status === 'granted'){
  console.log('status === granted')
 const location = await Location.getCurrentPositionAsync({})

 console.log('location:', JSON.stringify(location.coords))
 setLocation({
   latitude:location.coords.latitude,
   longitude:location.coords.longitude,
  latitudeDelta:0.0092,
      longitudeDelta: 0.0042})
 } else {
 alert('Voce precisa habilitar a localização do seu celular')}}
  
  
  return(
    <View style={styles.container}>
      <Header/>
      <View style={styles.mapa}>
        <MapView style={styles.mapaView}
          initialRegion={location}>
        {
          location &&
          <Marker coordinate ={location}>
          </Marker>
        }
        </MapView>
      </View>
      <View style={styles.botoes}>
        <CustomButton title='Localizar eventos'onPress={()=>navigation.navigate('Eventos')}/>
      </View>
   </View>
   )
}

const styles = StyleSheet.create({
container:{
  flex:1
},

mapaView:{
  height: '100%',
  widht: '100%',
},

mapa:{
backgroundColor: 'white',
flex:1
},

botoes:{
  height:110,
  padding: 5,
  justifyContent: 'space-evenly'
}

  })