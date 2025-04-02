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
      <CarItem 
        name={'Model S'} 
        tagline={'Order Online For'} 
        taglineCTA={'Touchless Delivery'}
        image={require('../assets/images/ModelS.jpeg')} />

      
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
