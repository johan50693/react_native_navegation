
import { View, Text, StyleSheet } from 'react-native';
import React, {useEffect} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { styles } from '../theme/appTheme';

export const Tab1Screen = () => {

  useEffect(() => {
    console.log("Tab1Screen effect");
  }, [])
  
  return (
      <View style={styles.globalMargin} >
        <Text style={styles.title} > Icons </Text>
        <Icon name="rocket" size={30} color="#900" />
        <Icon name="airplane-outline" size={30} color="#900" />
      </View>
  );
};
