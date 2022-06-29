import React, { useState } from 'react';
import { View, Text, Button, TouchableOpacity, StyleSheet } from 'react-native';
import { Fab } from '../components/Fab'


const ContadorScreen = () => {
  const [contador, setContador] = useState(10);
  return (
    <View style={styles.container}>
      <Text style={styles.textContador}>Contador: {contador}</Text>
      <Fab
        title='+1'
        position='br'
        onPress={() => setContador(contador + 1)}
      />
      <Fab
        title='-1'
        position='bl'
        onPress={() => setContador(contador - 1)}
      />
      <TouchableOpacity
        style={styles.touchableL}
        onPress={() => setContador(contador - 1)}>

        <View style={styles.boxDecrementa}>
          <Text style={styles.textDecrementa}>-1</Text>
        </View>
  </TouchableOpacity>

    </View>


  )
}
export default ContadorScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  textContador: {
    fontSize: 40,
    textAlign: 'center'
  },
  touchableR: {
    bottom: '10%',
    right: '10%',
    position: 'absolute'
  },
  boxIncrementa: {
    backgroundColor: 'pink',
    borderRadius: 100,
    width: 60,
    height: 60,
    justifyContent: 'center',
    bottom: 0,
    right: 0
  },
  textIncrementa: {
    fontSize: 25,
    fontWeight: 'bold',
    alignSelf: 'center'
  },
  touchableL: {
    bottom: '10%',
    left: '10%',
    position: 'absolute'
  },
  boxDecrementa: {
    backgroundColor: 'pink',
    borderRadius: 100,
    width: 60,
    height: 60,
    justifyContent: 'center',
    bottom: 0, right: 0
  },
  textDecrementa: {
    fontSize: 25,
    fontWeight: 'bold',
    alignSelf: 'center'
  }


})