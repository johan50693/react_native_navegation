import * as React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { ChatScreen } from '../screens/ChatScreen';
import { ContactsScreen } from '../screens/ContactsScreen';
import { AlbumsScreen } from '../screens/AlbumsScreen';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colors } from '../theme/appTheme';
import { Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createMaterialTopTabNavigator();


export const TopTabNavigator = () => {
  
  const {top} =useSafeAreaInsets();

  return (
    <Tab.Navigator
      style={{
        paddingTop: top
      }}

      sceneContainerStyle = {{
        backgroundColor: 'white'
      }}

      screenOptions={({route}) => ({
        tabBarPressColor: colors.primary,
        tabBarShowIcon: true,
        tabBarIndicatorStyle: {
          backgroundColor: colors.primary,
        },
        tabBarStyle: {
          borderTopColor: colors.primary,
          borderTopWidth: 0,
          elevation:0
        },
        tabBarIcon: ({color,focused}) => {
          // console.log(route);

          let iconName: String = '';

          switch (route.name) {
            case 'Chat':
              iconName = 'chatbubbles-outline';
              break;
            
            case 'Contacts':
              iconName = 'person-circle-outline';
              break;

            case 'Albums':
              iconName = 'albums-outline';
              break;
          
          }
          return <Icon name={iconName} size={20} color={colors.primary} />;
        }
      })}
    >
      <Tab.Screen name="Chat" component={ChatScreen} />
      <Tab.Screen name="Contacts" component={ContactsScreen} />
      <Tab.Screen name="Albums" component={AlbumsScreen} />
    </Tab.Navigator>
  );
}