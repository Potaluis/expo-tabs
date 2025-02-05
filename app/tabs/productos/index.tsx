import { View, Text, Pressable, } from 'react-native'
import React from 'react'
import { GlobalStyles } from '@/theme/GlobalStyles'
import { Link } from 'expo-router';

const ScreenProductos = () => {
  return (
    <View style={GlobalStyles.containerCentrado}>
      <Text>Desconectarse</Text>
      <Pressable style= {GlobalStyles.botonesIndividual}><Link style= {GlobalStyles.botonesIndividual} href='../'>SIGN OUT</Link></Pressable>
      
    </View>
  )
}

export default ScreenProductos