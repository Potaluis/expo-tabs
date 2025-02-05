import { View, Text, TextInput } from 'react-native'
import React from 'react'
import { GlobalStyles } from '@/theme/GlobalStyles'

const ScreenPrincipal = () => {
  return (
    <View style={GlobalStyles.containerCentrado}>
      <Text style= {GlobalStyles.titulo}>LOG IN</Text>
      <TextInput style= {GlobalStyles.estiloinput} placeholder='Nombre de usuario'></TextInput>
      <TextInput style= {GlobalStyles.estiloinput} placeholder='Contraseña'></TextInput>

    </View>
  )
}

export default ScreenPrincipal