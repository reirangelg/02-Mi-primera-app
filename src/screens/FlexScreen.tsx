import React from "react";
import { View, Text, StyleSheet } from 'react-native'

export const FlexScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.caja1}>Caja 1</Text>
            <Text style={styles.caja2}>Caja 2</Text>
            <Text style={styles.caja3}>Caja 3</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'flex-start',
        backgroundColor: 'pink',
        flexWrap: 'wrap',
        flexDirection: 'row'

    },
    caja1: {


        borderWidth: 2,
        borderColor: 'white',
        fontSize: 30
    },
    caja2: {
        borderWidth: 2,
        borderColor: 'white',
        fontSize: 30,

    },
    caja3: {
        borderWidth: 2,
        borderColor: 'white',
        fontSize: 30,

    }
});