import { View, Text } from 'react-native';
import React, { useContext } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { styles } from '../theme/appTheme';
import { AuthContext } from '../context/AuthContext';

export const SettingsScreen = () => {

  const insets = useSafeAreaInsets();
  const {authState} = useContext(AuthContext);

  return (
      <View style={{
          ...styles.globalMargin, 
          marginTop: insets.top + 20
          }} >
        <Text style={styles.title} > SettingsScreen </Text>
        <Text style={styles.title} > { JSON.stringify(authState, null, 4)} </Text>
      </View>
  );
};
