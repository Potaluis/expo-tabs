import { StyleSheet } from "react-native"

export const GlobalStyles = StyleSheet.create({
    containerCentrado: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    titulo: {
        fontSize: 25,
        fontFamily: 'Roboto',
        fontWeight: 'bold'
    },
    estiloinput:{
        margin: 15,
        borderColor: '#55555',
        borderWidth: 3,
        borderRadius: 15,
        padding: 20,
        fontFamily: 'Roboto',
        color: '#55555',
        width: '95%',
        backgroundColor: '#fff'
    }
})