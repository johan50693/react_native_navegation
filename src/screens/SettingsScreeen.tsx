import { View, Text } from 'react-native';
import React, { useContext } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colors, styles } from '../theme/appTheme';
import { AuthContext } from '../context/AuthContext';
import { TouchableIcon } from '../components/TouchableIcon';
import Icon from 'react-native-vector-icons/Ionicons';

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

          {
            authState.favoriteIcon && (
              <Icon 
                name={authState.favoriteIcon} 
                size={150} 
                color={colors.primary}
              />
            )
          }
        
      </View>
  );
};
