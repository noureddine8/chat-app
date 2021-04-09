import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { ColorSchemeName } from 'react-native';
import Colors from '../constants/Colors';
import { Feather } from '@expo/vector-icons';

import NotFoundScreen from '../screens/NotFoundScreen';
import ChatRoom from "../screens/ChatRoomScreen";
import { RootStackParamList } from '../types';
import MainTabNavigator from './MainTabNavigator';
import LinkingConfiguration from './LinkingConfiguration';
import useColorScheme from '../hooks/useColorScheme';

// If you are not familiar with React Navigation, we recommend going through the
// "Fundamentals" guide: https://reactnavigation.org/docs/getting-started
export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
const Stack = createStackNavigator<RootStackParamList>();

function RootNavigator() {
  const colorScheme = useColorScheme();

  return (
    <Stack.Navigator screenOptions={{
      headerStyle:{backgroundColor:Colors[colorScheme].tint,shadowOpacity:0,elevation:0},
      headerTintColor:Colors[colorScheme].background,
      headerTitleStyle:{fontSize:22,fontWeight:"700"},
      headerTitleAlign:"center"
    }} >
      <Stack.Screen 
        name="Root"
        options={{
        title:"WhatsApp",
        headerRight:()=>(<Feather name="settings" size={23} style={{marginEnd:8}} color={Colors[colorScheme].text}  />)
        }}
         component={MainTabNavigator} />
      <Stack.Screen name="ChatRoom" component={ChatRoom} options={({route})=> ({title:route?.params?.conversation?.recipient.name}) } />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
    </Stack.Navigator>
  );
}
