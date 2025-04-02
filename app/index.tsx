import React from 'react';
import { Text, View, StyleSheet, ImageBackground } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { useLayoutEffect } from 'react';

import CarItem from '../components/CarItem';



export default function Index() {
  
  // Removes the header
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  return (
    
    <View style={styles.container}>
      <CarItem />

      
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
