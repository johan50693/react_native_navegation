
import React from 'react';
import { View, Text, Button} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import { styles } from '../theme/appTheme';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface Props extends StackScreenProps<any,any>{}


export const Pagina1Screen = ( {navigation}: Props) => {

  return (
      <View style={styles.globalMargin}>
        <Text style={styles.title} > Pagina1Screen </Text>
        <Button
          title="Ir pagina 2"
          onPress={ () => navigation.navigate('Pagina2Screen')}
        />

        <Text> Navegar con argumentos</Text>

        <View style={{ flexDirection: 'row'}}>
          <TouchableOpacity
            style={ {
              ...styles.botonGrande,
              backgroundColor: '#5856D6'
            }}
            onPress={ () => navigation.navigate('PersonaScreen', {
              id: 1,
              nombre: 'Albert'
            }) }
          >
            <Text  style={ styles.botonGrandeTexto}>Alberrt</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={ {
              ...styles.botonGrande,
              backgroundColor: '#FF9427'
            }}
            onPress={ () => navigation.navigate('PersonaScreen', {
              id: 2,
              nombre: 'Maria'
            }) }
          >
            <Text  style={ styles.botonGrandeTexto}>Maria</Text>
          </TouchableOpacity>
        </View>


      </View>
  );
};

