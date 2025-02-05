import { View, Text, TextInput, Pressable } from 'react-native'
import React from 'react'
import { GlobalStyles } from '@/theme/GlobalStyles'

const ScreenPrincipal = () => {
  return (
    <View style={GlobalStyles.containerCentrado}>
      <Text style= {GlobalStyles.titulo}>LOGIN</Text>
      <TextInput style= {GlobalStyles.estiloinput} placeholder='Nombre de usuario'></TextInput>
      <TextInput style= {GlobalStyles.estiloinput} placeholder='Contraseña'></TextInput>
      <View style= {GlobalStyles.botonesLogin}>
      <Pressable style= {GlobalStyles.botonesIndividual}><Text style= {GlobalStyles.botonesIndividual}>Registrarse</Text></Pressable>
      <Pressable style= {GlobalStyles.botonesIndividual}><Text style= {GlobalStyles.botonesIndividual}>Iniciar Sesion</Text></Pressable>
      </View>

    </View>
  )
}

export default ScreenPrincipal