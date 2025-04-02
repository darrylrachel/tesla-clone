import React from 'react';
import { Text, View, StyleSheet, ImageBackground } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { useLayoutEffect } from 'react';
import CarsList from '../components/CarsList';
import Header from '../components/Header';

export default function Index() {
  
  // Removes the header
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  return (
    
    <View style={styles.container}>
     <Header /> 
    <CarsList />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  
})
