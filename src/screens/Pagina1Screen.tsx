
import React, { useEffect } from 'react';
import { View, Text, Button} from 'react-native';
// import {StackScreenProps} from '@react-navigation/stack';
import { styles } from '../theme/appTheme';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { DrawerScreenProps } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons';

// interface Props extends StackScreenProps<any,any>{}
interface Props extends DrawerScreenProps<any,any>{}


export const Pagina1Screen = ( {navigation}: Props) => {

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (

        <TouchableOpacity 
          style={{
            marginLeft: 10
          }}
          onPress={ () => navigation.toggleDrawer()}
        >
          <Icon name='menu-outline' size={35} color='black' />
        </TouchableOpacity >
      )
    });    
  }, [])
  

  return (
      <View style={styles.globalMargin}>
        <Text style={styles.title} > Pagina1Screen </Text>
        <Button
          title="Ir pagina 2"
          onPress={ () => navigation.navigate('Pagina2Screen')}
        />

        <Text style={{
          marginVertical: 20,
          fontSize: 20
        }}> 
          Navegar con argumentos
        </Text>

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
            <Icon name='man-outline' size={35} color='white' />
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
            <Icon name='woman-outline' size={35} color='white' />
            <Text  style={ styles.botonGrandeTexto}>Maria</Text>
          </TouchableOpacity>
        </View>


      </View>
  );
};

