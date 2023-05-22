
import React from 'react';
import { View, Text, Button} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import { styles } from '../theme/appTheme';

interface Props extends StackScreenProps<any,any>{}


export const Pagina1Screen = ( {navigation}: Props) => {

  return (
      <View style={styles.globalMargin}>
        <Text> Pagina1Screen </Text>
        <Button
          title="Ir pagina 2"
          onPress={ () => navigation.navigate('Pagina2Screen')}
        />
      </View>
  );
};

