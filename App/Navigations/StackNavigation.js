import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Inicio from '../Screens/Inicio';
import Presentacion from '../Screens/Presentacion';
import Home from '../Navigations/TabNavigation';




const Stack = createStackNavigator();

export default function StackNavigation() {
  return (
    <Stack.Navigator
    screenOptions={{headerShown:false}}>
    <Stack.Screen name="Inicio" component={Inicio} />
    <Stack.Screen name="presentacion" component={Presentacion} />
    <Stack.Screen name="home" component={Home} />


   
  </Stack.Navigator>
);
}