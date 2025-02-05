import { Redirect } from "expo-router";
import { View, Text, TextInput, Pressable } from 'react-native'
import * as React from 'react';
import { GlobalStyles } from '@/theme/GlobalStyles'
import { Link } from 'expo-router';

export default function Index() {
  //return <Redirect href="./tabs" />;
  return(

      <View style={GlobalStyles.containerCentrado}>
        <Text style= {GlobalStyles.titulo}>LOGIN</Text>
        <TextInput style= {GlobalStyles.estiloinput} placeholder='Nombre de usuario'></TextInput>
        <TextInput style= {GlobalStyles.estiloinput} placeholder='Contraseña'></TextInput>
  
        <View style= {GlobalStyles.botonesLogin}>
        <Pressable style= {GlobalStyles.botonesIndividual}><Link style= {GlobalStyles.botonesIndividual} href='./tabs/productos'>Registrarse</Link></Pressable>
        <Pressable style= {GlobalStyles.botonesIndividual}><Link style= {GlobalStyles.botonesIndividual} href='./tabs/productos'>Iniciar Sesion</Link></Pressable>
        </View>
      </View>
      )
}
