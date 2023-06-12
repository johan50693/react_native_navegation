import * as React from 'react';
import { DrawerContentComponentProps, DrawerContentScrollView, createDrawerNavigator } from '@react-navigation/drawer';
import { StackNavigator } from './StackNavigator';
import { SettingsScreen } from '../screens/SettingsScreeen';
import { Image, Text, View, useWindowDimensions } from 'react-native';
import { styles } from '../theme/appTheme';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Tabs } from './Tabs';
import Icon from 'react-native-vector-icons/Ionicons'; 

const Drawer = createDrawerNavigator();

export const MenuLateral = () =>  {

  return (
    <Drawer.Navigator
      drawerContent={(props) => <MenuInterno {...props} />}
    >
      <Drawer.Screen name="Tabs"  component={Tabs} />
      <Drawer.Screen name="SettingsScreen"  component={SettingsScreen} />
    </Drawer.Navigator>
  );
}

const MenuInterno = ( {navigation} : DrawerContentComponentProps) => {
  
  return (
    <DrawerContentScrollView>

      {/* Contenedor del avatar  */}
      <View style= {styles.avatarContainer}>
        <Image 
          source={{
            uri: 'https://alumni.engineering.utoronto.ca/files/2022/05/Avatar-Placeholder-400x400-1.jpg'
          }}
          style={styles.avatar}
        />
      </View>

      {/* Opciones del menu  */}
      <View style={styles.menuContainer} >

        <TouchableOpacity 
          style={{
            ...styles.menuBoton,
            flexDirection: 'row'
          }}
          onPress={ () => navigation.navigate('Tabs')}
        >
          <Icon name='globe-outline' size={20} color='black' />
          <Text style={styles.menuTexto} > Navegacion</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={{
            ...styles.menuBoton,
            flexDirection: 'row'
          }}
          onPress={ () => navigation.navigate('SettingsScreen')}
        >
          <Icon name='settings-outline' size={20} color='black' />
          <Text style={styles.menuTexto} > Ajustes</Text>
        </TouchableOpacity >

      </View>

    </DrawerContentScrollView>
  )
}