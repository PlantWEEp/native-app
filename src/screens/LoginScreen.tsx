import { View, Text, StyleSheet, StatusBar } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const LoginScreen = () => {
  return (
    <View>
        <StatusBar
    barStyle="light-content"
    translucent
  />
      <Text style={styles.text}>LoginScreen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    text:{
        color: "#000"
    }
})
export default LoginScreen