import React from "react";
import { View, Text, StyleSheet, Dimensions, useWindowDimensions } from "react-native";

//const { width, height } = Dimensions.get('window');
export const DimensionesScreen = () => {
const {width, height} = useWindowDimensions();
    return (
        <View>
            <View style={styles.container}>
                <View style={{... styles.cajaMorada, width: width * 2}} />
                <View />
            </View>
            <Text style= {styles.titulo}>W: {width}, H: {height}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
      //  width: '100%',
        height: 300,
        backgroundColor: 'red'
    },
    cajaMorada: {
        backgroundColor: '#5856d6',
        width: '50%',
        height: '50%'
    },
    cajaNaranja: {
        backgroundColor: '#f0a23b',
        width: '50%',
        height: '50%'
    },
    titulo: {
        fontSize: 20,
        textAlign: 'center'
    }
});