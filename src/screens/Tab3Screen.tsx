
import { View, Text, StyleSheet } from 'react-native';
import React, {useEffect} from 'react';

export const Tab3Screen = () => {

  useEffect(() => {
    console.log("Tab3Screen effect");
  }, [])

  return (
      <View >
        <Text> Tab3Screen </Text>
      </View>
  );
};
