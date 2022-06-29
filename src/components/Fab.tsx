import React from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";

interface Props {
  title: string;
  position?: 'br' | 'bl';
  onPress: () => void;

}
export const Fab = ({ title, onPress, position = 'br' }: Props) => {
  return (
    <TouchableOpacity
      style={
        (position === 'bl')
          ? styles.touchableL
          : styles.touchableR
      }
      onPress={onPress}>
      <View style={styles.boxIncrementa}>
        <Text style={styles.textIncrementa}> {title} </Text>
      </View>
      
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  touchableR: {
    bottom: '10%',
    right: '10%',
    position: 'absolute'
  },
  boxIncrementa: {
    backgroundColor: 'orange',
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
    backgroundColor: 'red',
    borderRadius: 100,
    width: 60,
    height: 60,
    justifyContent: 'center',
    bottom: 0, 
    right: 0
  },
  textDecrementa: {
    fontSize: 25,
    fontWeight: 'bold',
    alignSelf: 'center'
  }
}

)