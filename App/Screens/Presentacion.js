import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, Linking } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/FontAwesome'; 
import { useNavigation } from '@react-navigation/native';
import { Platform } from 'react-native';
import { Dimensions } from 'react-native';




 // Asegúrate de tener el paquete de iconos instalado
 const screenWidth = Dimensions.get('window').width;


export default function Presentacion() {
  const navigation = useNavigation();


  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };


  const handleSignUp = () => {
    Linking.openURL('https://www.mifnursarosara.com/registro');
  };

  const handleSignIn = () => {
    Linking.openURL('https://www.mifnursarosara.com/iniciar-sesion');
  };

  const handleForgotPassword = () => {
    Linking.openURL('https://www.mifnursarosara.com/olvido-contraseña');
  };
  const [isPressed, setIsPressed] = useState(false);
  const handlePress = () => {
    setIsPressed(true);
    // Puedes agregar aquí la lógica para la navegación a la pantalla de registro u otras acciones.
  };
  return (
    <View style={styles.container}>
      <Image style={styles.Image} source={require('../../assets/image/app.jpg')} resizeMode="cover" />
      <View style={styles.formContainer}>
        <View style={styles.inputContainer}>
          <View style={styles.iconContainer}>
            <Ionicons name="mail" size={25} color="black" style={styles.icon} />
          </View>
          <TextInput
            style={styles.input}
            placeholder="Correo o Celular"
            value={email}
            onChangeText={setEmail}
          />
        </View>
        <View style={styles.inputContainer}>
          <View style={styles.iconContainer}>
            <Ionicons name="lock-closed" size={25} color="black" style={styles.icon} />
          </View>
          <TextInput
        style={styles.input}
        placeholder="Contraseña"
        secureTextEntry={!showPassword}
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <TouchableOpacity onPress={toggleShowPassword} style={styles.toggleButton}>
        <Icon name={showPassword ? 'eye-slash' : 'eye'} size={30} color="black" />
      </TouchableOpacity>
        </View>
        <View style={styles.registerContainer}>
      <TouchableOpacity >
        <Text style={[styles.registerText,]}>
         Olvido su contraseña?
        </Text>
      </TouchableOpacity>
    </View>
    <View style={styles.buttonContainer}>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('home')}>
        <Text style={styles.buttonText}>Iniciar Sesión</Text>
      </TouchableOpacity>
    </View>
    
    <View style={styles.registerContainer2}>
      <TouchableOpacity onPress={handlePress}>
        <Text style={[styles.registerText2, isPressed && styles.registerLinkPressed2]}>
          No tiene cuenta? <Text style={[styles.registerLink2, isPressed && styles.registerLinkPressed2]}>Registrarse</Text>
        </Text>
      </TouchableOpacity>
    </View>
    <View>
    <Text style={styles.registerWithText}>Registrarse con:</Text>

    </View>
    <View style={styles.socialContainer}>
  <TouchableOpacity style={styles.socialButton}>
    <Image
      style={styles.socialImage}
      source={require('../../assets/image/facebook.png')}
    />
  </TouchableOpacity>
  <TouchableOpacity style={styles.socialButton}>
    <Image
      style={styles.socialImage}
      source={require('../../assets/image/google.png')}
    />
  </TouchableOpacity>
</View>


      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    alignItems: 'center', 
    
  },
  Image: {
    flex: 1,
    width: '100%',
  },
  formContainer: {
    
    backgroundColor: 'rgba(255, 255, 255, 0.50)',
    padding: 20,
    borderRadius: 30,
    width: '83%',
    height: 270,
    position: 'absolute',
    top: 20,
    zIndex: 10,
    top: 320,
    paddingTop:25,
    
  },
  input: {
    height: 60,
    flex: 1, // Ocupa el espacio disponible
    backgroundColor: 'white',
    paddingLeft: 5,
    borderTopRightRadius:15,
    borderBottomRightRadius:15,
    fontSize:18,

  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    
    
  },
  icon:{
top:15,
paddingLeft:15,
opacity:0.5,



  },
  iconContainer: {
    backgroundColor:'white',
    height:60,
    width: 50,
    borderBottomLeftRadius:15,
    borderTopLeftRadius:15,
    

  },
  buttonContainer: {
    position: "absolute",
    top:  Platform.OS === 'ios' ?180 : 190, // Puedes ajustar esto según sea necesario
    left: 0,
    right: 0,
    bottom: 0 ,
    alignItems: "center",
    justifyContent: "center",
    
    

     // Ajusta según sea necesario
  },
  button: {
    backgroundColor: "white", // Puedes cambiar el color según tus preferencias
    paddingVertical: 10,
    paddingHorizontal: 60,
    borderRadius: 20,
        fontWeight: 'bold',

    
  },
  buttonText: {
    color: "black", // Puedes cambiar el color del texto
    fontSize: 20,
    fontWeight: 'bold',

  },

  toggleButton: {
    position: 'absolute',
    top: 15,
    right: 12,
    opacity:0.5,
    
  },
  registerContainer: {
    height: 30,
    bottom: 20,
    paddingLeft: screenWidth * 0.35, // Ajusta el valor según sea necesario
    justifyContent: 'flex-end', // Alinea el contenido al final
  },

registerText: {
  color: 'black',
  fontSize: 14,
  fontWeight: 'bold',
},

socialContainer: {
  flexDirection: 'row',
  justifyContent: 'center',
  marginTop: 120,
},
socialButton: {
  marginHorizontal:15,
},
socialImage: {
  width: 40, // Ancho deseado para las imágenes
  height: 40, // Altura deseada para las imágenes
},
registerContainer2: {
  position: "absolute",
  top: 380,
  width: "100%",
  alignItems: "center",
  marginTop: 20,
  textAlign: "center",
},
registerText2: {
  color: "white",
  fontSize: 16,
 paddingLeft:30, // Añadido para centrar el texto
},
registerLink2: {
  color: "green",
  textDecorationLine: "underline",
  
},
registerLinkPressed2: {
  color: "black",
},
registerWithText:{
  position: "absolute",
  top: 60,
  fontSize: 18,

  width: "100%",
  alignItems: "center",
  marginTop: 20,
  textAlign: "center",
  color: "white",

},

});
