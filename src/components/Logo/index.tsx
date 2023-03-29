import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

interface LogoProps {
  appName: string;
  logoSource: any; // o tipo do source da imagem pode variar dependendo do tipo de arquivo que você está importando
}

const Logo = ({ appName, logoSource }: LogoProps) => {
  return (
    <View style={styles.container}>
      <Image source={logoSource} style={styles.logo} resizeMode="contain" />
      <Text style={styles.appName}>{appName}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  logo: {
    width: 150,
    height: 150,
  },
  appName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
  },
});

export default Logo;