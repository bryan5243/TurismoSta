import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Fav from '../Screens/Fav';
import Profile from '../Screens/Profile';
import Home from '../Screens/Home';
import Mapa from '../Screens/Mapa';
import Cronograma from '../Screens/Cronograma';

import { Ionicons } from '@expo/vector-icons'; 



export default function TabNavigations() {
    const Tab = createBottomTabNavigator();
 
    return (
        <Tab.Navigator screenOptions={{
          headerShown:false
        }}>
        <Tab.Screen name="Home" component={Home}
        options={{
          tabBarLabel:'Inicio',
          tabBarIcon:({color }) => (
            <Ionicons name="home" color={color} size={30} />
          ),
        }} />
        <Tab.Screen name="Cronograma" component={Cronograma}
          options={{
          tabBarLabel:'Cronograma',
          tabBarIcon:({color }) => (
            <Ionicons name="calendar" color={color} size={30} />
   
              ),
        }}  
         />
        
       
        <Tab.Screen name="Mapa" component={Mapa}
          options={{
          tabBarLabel:'Mapa',
          tabBarIcon:({color }) => (
            <Ionicons name="map" color={color} size={30} />
   
              ),
        }}  
         />
         <Tab.Screen name="Favorito" component={Fav} 
        options={{
          tabBarLabel:'Favoritos',
          tabBarIcon:({color }) => (
            <Ionicons name="heart" color={color} size={30} />
   
              ),
        }}   
        />
         
          <Tab.Screen name="Proile" component={Profile} 
          options={{
          tabBarLabel:'Perfil',
          tabBarIcon:({color }) => (
            <Ionicons name="person" color={color} size={30} />
   
              ),
        }}   
        />

      </Tab.Navigator>
      
  );
}
