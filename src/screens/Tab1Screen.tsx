
import { View, Text, StyleSheet } from 'react-native';
import React, {useEffect} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { styles } from '../theme/appTheme';
import { TouchableIcon } from '../components/TouchableIcon';

export const Tab1Screen = () => {

  useEffect(() => {
    console.log("Tab1Screen effect");
  }, [])
  
  return (
      <View style={styles.globalMargin} >
        <Text style={styles.title} > Icons </Text>
        <TouchableIcon iconName="rocket" />
        <TouchableIcon iconName="airplane-outline" />
      </View>
  );
};
