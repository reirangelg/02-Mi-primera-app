import React from "react";
import { View, StyleSheet, } from "react-native";

export const PositionScreen = () => {

    return (
        <View style={styles.container}>
            <View style={styles.cajaMorada} />
            <View style={styles.cajaNaranja} />
            <View style={styles.cajaVerde} />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#28c4d9'
    },
    cajaMorada: {
        width: 100,
        heigth: 100,
        backgroundColor: '#5856d6',
        borderWidth: 10,
        borderColor: 'purple',
        position: 'absolute',
        top: 0,
        right: 0
        
    },
    cajaNaranja: {
        width: 100,
        heigth: 1000,
        backgroundColor: '#f0a23b',
        borderWidth: 10,
        borderColor: 'orange',
        position: 'absolute',
        bottom: 0,
        right: 0
    },
    cajaVerde: {
       // width: 100,
       // heigth: 1000,
        backgroundColor: 'green',
        borderWidth: 10,
        borderColor: 'green',
       ...StyleSheet.absoluteFillObject
    }

});