import React from 'react';
import { View, StyleSheet } from 'react-native';
import UserProfile from '@/components/User'; 

export default function Index() {
  return (
    <View style={styles.container}>
      {/* Renderizamos el Perfil de Usuario */}
      <UserProfile />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
  },
});
