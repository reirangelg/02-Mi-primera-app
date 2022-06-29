import React from "react";
import { View, StyleSheet } from "react-native";

export const TareasScreen =() => {
    return (
        <View style= {styles.container}>
            <View style= {styles.cajaMorada}/>
            <View style= {styles.cajaNaranja}/>
            <View style= {styles.cajaAzul}/>
            
            
        </View>
    )

    
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flex: 1,
        backgroundColor: '#28425b',
        justifyContent: 'center',
        alignItems: 'center'
    }, 
    cajaMorada: {
        width: 100,
        height: 100,
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: '#5856d6',
        
    },
    cajaNaranja: {
        width: 100,
        height: 100,
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: 'orange',
        top: '13%'
    },
    cajaAzul: {
        width: 100,
        height: 100,
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: '#28c4d9',
    }
});