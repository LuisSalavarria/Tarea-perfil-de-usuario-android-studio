import React, {useState} from "react";
import { StyleSheet, View, Text, Image, TextInput, Button, SafeAreaView, Alert, KeyboardAvoidingView, Platform, ScrollView} from 'react-native';

// 1. Definimos la estructura de los datos del usuario
interface UserData {
  name: string;
  email: string;
  phone: string;
  avatarUrl: string;
}

export default function User() {
  // 2. Estado inicial con los datos del usuario
  const [user, setUser] = useState<UserData>({
    name: 'Luis Salavarria',
    email: 'luisalejandrosz@email.com',
    phone: '096-162-0426',
    avatarUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSroyJ2cByIXtNDW6b2iCTw9WPZTfGeplFm9M1lCcPAYXoVGUmLnOPsataa&s=10', // Imagen de internet
  });

  // Estado temporal solo para el TextInput (mientras el usuario escribe)
  const [editablePhone, setEditablePhone] = useState<string>(user.phone);

  // 3. Función para guardar los cambios
  const Save = () => {
    setUser({
      ...user,
      phone: editablePhone // Actualizamos el teléfono en el estado principal
    });
    
    // Mostramos una alerta de confirmación nativa
    Alert.alert('¡hecho!', 'El número de teléfono actualizado correctamente.');
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* KeyboardAvoidingView evita que el teclado tape el TextInput en iOS/Android */}
      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}
      >
        <View style={styles.brandHeader}>
          <Image 
            source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQotIKMesliS4WL4DVk-P4h-b-FhhPV0miDV3v6G5Rx1Q&s' }} 
            style={styles.brandLogo} 
          />
          <Text style={styles.brandName}>EcoExpress</Text>
        </View>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <Text style={styles.title}>Datos de Usuario</Text>
          {/* 4. Foto de Perfil */}
          <Image 
            source={{ uri: user.avatarUrl }} 
            style={styles.avatar} 
          />

          <View style={styles.infoContainer}>
            <Text style={styles.label}>Nombre:</Text>
            <Text style={styles.valueText}>{user.name}</Text>

            <Text style={styles.label}>Teléfono:</Text>
            <Text style={styles.phoneBadge}>{user.phone}</Text> 

            <Text style={styles.label}>Correo Electrónico:</Text>
            <Text style={styles.valueText}>{user.email}</Text>
          </View>

          <View style={styles.divider} />

          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Editar:</Text>
            <TextInput
              style={styles.input}
              value={editablePhone}
              onChangeText={setEditablePhone} 
              placeholder="Ej: 555-1234"
              keyboardType="phone-pad" 
            />
          </View>
          <View style={styles.buttonContainer}>
            <Button 
              title="Guardar cambios" 
              onPress={Save} 
              color="#34C759" 
            />
          </View>

        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1fb179',
  },
  scrollContainer: {
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 20,
    color: '#222',
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 60, 
    marginBottom: 30,
    borderWidth: 3,
    borderColor: '#007AFF',
  },
  infoContainer: {
    width: '30%',
    backgroundColor: '#fff',
    padding: 20,
    gap: 6,
    borderRadius: 12,
    elevation: 2,
    borderWidth: 1,
    borderColor: "#2230c5",
    shadowColor: '#000',
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    alignItems: "center",
  },
  label: {
    fontSize: 20,
    color: '#020227',
    fontWeight: '600',
    textTransform: 'uppercase',
    marginTop: 10,
  },
  valueText: {
    fontSize: 19,
    color: '#6e5656',
    marginBottom: 8,
    fontWeight: '600',
  },
  phoneBadge: {
    fontSize: 16,
    color: '#1328c2',
    fontWeight: 'bold',
    marginBottom: 8,
  },
  divider: {
    height: 1,
    backgroundColor: '#e5e5ea',
    width: '100%',
    marginVertical: 25,
  },
  inputContainer: {
    width: '40%',
    marginBottom: 20,
  },
  inputLabel: {
    fontSize: 20,
    fontWeight: '600',
    color: '#100c0c',
    marginBottom: 8,
  },
  input: {
    width: '100%',
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    fontSize: 16,
  },
  buttonContainer: {
    width: '40%',
    marginTop: 10,
    borderRadius: 8,
    overflow: 'hidden', 
  },
  brandHeader: {
    flexDirection: 'row',      // Alinea el logo y el texto horizontalmente
    alignItems: 'center',      // Los centra verticalmente uno respecto al otro
    paddingHorizontal: 20,
    paddingTop: Platform.OS === 'android' ? 15 : 5, // Espaciado extra en Android
    paddingBottom: 5,
    backgroundColor: '#9f8bb3',
  },
  brandLogo: {
    width: 30,
    height: 30,
    borderRadius: 10, 
    marginBottom: 10,
    borderWidth: 3,
    marginRight: 8,           
    resizeMode: 'contain',
  },
  brandName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#06e350',          
    letterSpacing: 0.5,
  },
});