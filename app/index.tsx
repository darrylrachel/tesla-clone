import React from 'react';
import { StatusBar } from 'react-native';
import { Text, View, StyleSheet } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { useLayoutEffect } from 'react';



export default function Index() {
  
  // Removes the header
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  return (
    
    <View style={styles.container}>
      <View style={styles.carContainer}>
        <View style={styles.titles}>
          <Text style={styles.title}>Model S</Text>
          <Text style={styles.subtitle}>Starting at $69,420</Text>
        </View>
      </View>

      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  carContainer: {
    width: '100%',
    height: '100%',
  },
  titles: {
    marginTop: '30%',
    width: '100%',
    alignItems: 'center',
  },
  title: {
    fontSize: 40,
    fontWeight: '500',
  },
  subtitle: {
    fontSize: 16,
    color: '#5c5e62',
  },
})
