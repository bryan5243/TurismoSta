import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'

export default function Header() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require('../../../assets/image/logo.png')}
        resizeMode="cover"
      />
    </View>

  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '33%',
    justifyContent: 'center',  // Centrar verticalmente
    alignItems: 'center',     
    backgroundColor: 'rgba(0, 49, 178,1)',
    paddingTop:40,

  },
  image: {
    flex: 1, // Para que la imagen ocupe todo el espacio del contenedor
    width: '58%',
  },
  
});