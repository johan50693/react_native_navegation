import React, { useContext } from 'react';
import { View, Text, Button } from 'react-native';
import { AuthContext } from '../context/AuthContext';
import { styles } from '../theme/appTheme';
export const AlbumsScreen = () => {

  const {logout,authState} = useContext(AuthContext);
  return (
      <View style={styles.globalMargin} >
        <Text style={styles.title} > AlbumsScreen </Text>

        {
          (authState.isLoggedin === true) 
            ? <Button
                title='logout'
                onPress={ logout } 
              /> 
          : null
        }

      </View>
  );
};