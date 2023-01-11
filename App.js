import { StatusBar } from 'react-native';
import React from 'react';
import { colors } from './src/pages/styles';
import {useFonts, JosefinSans_400Regular, JosefinSans_700Bold} from "@expo-google-fonts/josefin-sans"
import { Routes } from './src/routes';
import { GestureHandlerRootView } from 'react-native-gesture-handler';


export default function App() {
  let [fontsLoaded] = useFonts({
    JosefinSans_400Regular,
    JosefinSans_700Bold
  });
  if (!fontsLoaded) {
    return null;
  }
  return (
    <>
    <GestureHandlerRootView style={{ flex: 1 }}>
    <StatusBar backgroundColor={colors.BACKGROUND} barStyle="light-content"/>
    <Routes/>
    </GestureHandlerRootView>
    </>
    
  );
}

