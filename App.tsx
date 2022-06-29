import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
//import HolaMundoScreen from './src/screens/HolaMundoScreens';
//import ContadorScreen from './src/screens/ContadorScreen';
//import { BoxObjectModelScreen } from './src/screens/BoxObjectModelScreen';
//import { DimensionesScreen } from './src/screens/DimensionesScreen';
//import { PositionScreen} from './src/screens/PositionScreen';
//import { FlexScreen } from './src/screens/FlexScreen';
import { TareasScreen } from './src/screens/TareasScreen';
const App = () => {
  return (
 //<ContadorScreen />
 <SafeAreaView style= {{flex: 1}}>
{/*<DimensionesScreen />*/}
{/*<PositionScreen />*/}
{/*<FlexScreen />*/}
<TareasScreen />
</SafeAreaView>

)
}
export default App;