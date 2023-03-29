import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const PhoneVerificationScreen = () => {
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleVerifyPress = () => {
    // Lógica para verificar o número de telefone do usuário
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Verificar número de telefone</Text>
      <Text style={styles.subtitle}>Insira o número do seu celular</Text>
      <TextInput
        style={styles.input}
        keyboardType="phone-pad"
        placeholder="Digite seu número de telefone"
        value={phoneNumber}
        onChangeText={setPhoneNumber}
      />
      <TouchableOpacity style={styles.button} onPress={handleVerifyPress}>
        <Text style={styles.buttonText}>Verificar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
    marginBottom: 20,
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default PhoneVerificationScreen;
