import { View, Text, StatusBar, Image, StyleSheet } from 'react-native'
import React, { useEffect } from 'react'
import { Colors,Images,CustomFonts } from '../constants/Index'
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { Display } from "../utils/Index"

const SplachScreen = ({navigation}) => {

  useEffect(()=>{
    setTimeout(()=>{
      navigation.navigate("Welcome")
    },1500)
  })

  return (
    <View style={styles.container}>
    <StatusBar
      barStyle="light-content"
      backgroundColor={Colors.DEFAULT_GREEN}
      translucent
    />
    <Image source={Images.SPLACH_SCREEN} resizeMode='contain' style={styles.image}/>
      <Text style={styles.fashion}>FooDelivery</Text>
  </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:Colors.DEFAULT_GREEN
  },
  image:{
    height: Display.setHeight(30),
    width: Display.setWidth(60),
  },
  fashion:{
    fontSize: RFPercentage(5), 
    color: Colors.DEFAULT_WHITE,
    fontFamily :CustomFonts.Black
  }
})

export default SplachScreen