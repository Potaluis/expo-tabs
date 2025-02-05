import { StyleSheet } from "react-native"

export const GlobalStyles = StyleSheet.create({
    containerCentrado: {
        flex: 1,
        width: '90%',
        margin: 20,
        justifyContent: 'center',
        alignItems: 'center',  
    },
    
    titulo: {
        fontSize: 50,
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        color: '#ff4242'
    },

    estiloinput:{
        margin: 15,
        borderColor: '#ff4242',
        borderWidth: 3,
        borderRadius: 15,
        padding: 20,
        fontFamily: 'Roboto',
        width: '95%',
        backgroundColor: '#f9f9f9'
    },

    botonesLogin:{
        flexDirection: 'row',
    },

    botonesIndividual:{
        backgroundColor: '#ff4242',
        marginHorizontal: 19,
        padding: 5,
        color: '#ffffff',
        borderRadius: 15,
    },
})