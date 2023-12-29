import { View, Text,StyleSheet,Image,TouchableOpacity } from 'react-native'
import React,{ useState}  from 'react' ;
import { useNavigation } from '@react-navigation/native';

export default function Inicio() {
  const navigation = useNavigation();

  const [isPressed, setIsPressed] = useState(false);
  const handlePress = () => {
    setIsPressed(true);
    // Puedes agregar aquí la lógica para la navegación a la pantalla de registro u otras acciones.
  };
  return(
    <View style={styles.container}>
    <Image
      style={styles.Image}
      source={require('../../assets/image/app.jpg')}
      resizeMode="cover"
    />

    <View style={styles.registerContainer}>
      <TouchableOpacity onPress={handlePress}>
        <Text style={[styles.registerText, isPressed && styles.registerLinkPressed]}>
          No tiene cuenta? <Text style={[styles.registerLink, isPressed && styles.registerLinkPressed]}>Registrarse</Text>
        </Text>
      </TouchableOpacity>
    </View>

    <View style={styles.buttonContainer}>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('presentacion')}>
        <Text style={styles.buttonText}>Iniciar Sesión</Text>
      </TouchableOpacity>
    </View>

  </View>
  );
}


const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%', // Puedes ajustar según tus necesidades
  },
  Image: {
    flex: 1,
    width: '100%',
  },
  buttonContainer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    alignItems: "center",
    marginBottom: 200, // Ajusta según sea necesario
  },
  button: {
    backgroundColor: "white", // Puedes cambiar el color según tus preferencias
    paddingVertical: 10,
    paddingHorizontal: 60,
    borderRadius: 20,
  },
  buttonText: {
    color: "black", // Puedes cambiar el color del texto
    fontSize: 25,
  },
  registerContainer: {
    position: "absolute",
    top: 700,
    width: "100%",
    alignItems: "center",
    marginTop: 20, // Ajusta según sea necesario
  },
  registerText: {
    color: "white",
    fontSize: 16,
  },
  registerLink: {
    color: "green", // Cambia el color según tus preferencias
    textDecorationLine: "underline",
  },
  registerLinkPressed: {
    color: "black", // Cambia el color al ser presionado
  },
});