import React from 'react';
import 'react-native-gesture-handler'
import { Button, Pressable, StyleSheet, View } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import {NavigationContainer} from '@react-navigation/native'
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import { createStackNavigator } from '@react-navigation/stack';
import dataArtistasProvider from './src/utils/dataArtistas'
import HomeScreen from './src/components/HomeScreen';
import DetailArtist from './src/components/DetailArtist';
import IconButton from './src/components/IconButton';

const BottomTab = createBottomTabNavigator();
const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator
    screenOptions={{
      presentation: 'modal'
    }}
    >
      <Stack.Screen 
        name="Home" 
        component={HomeScreen} 
        options={{ headerShown: false }}
      />

      <Stack.Screen 
        name="Artista" 
        component={DetailArtist} 
        options={({ navigation }) => ({
          title: '', // Vaciar el título del encabezado
          headerLeft: () => (
            <IconButton
              onPress={() => navigation.goBack()}
              icon={<Ionicons name="arrow-back" size={24} color="black" />}
            />
          ),
          headerRight: () => null, // Ocultar otros elementos del encabezado
        })}
        />
    </Stack.Navigator>
  );
}

export default function App() {

  return (
    <NavigationContainer>
      <BottomTab.Navigator screenOptions={{
        tabBarStyle: {
          backgroundColor: "white"
        },
        headerShown: false,
        tabBarActiveTintColor: "black"
      }}>
        <BottomTab.Screen name="Home" component={HomeStack} options={{
          tabBarIcon: (({focused}) => (
            <Ionicons name="ios-home-sharp" size={24} color={focused ? "black" : "grey"} />
          ))
        }}/>
         <BottomTab.Screen name="Favorites" component={HomeScreen} options={{
          tabBarIcon: (({focused}) => (
            <MaterialIcons name="favorite" size={24} color={focused ? "black" : "grey"} />
          ))
        }}/>
         <BottomTab.Screen name="Groups" component={HomeScreen} options={{
          tabBarIcon: (({focused}) => (
            <Ionicons name="add-circle-outline" size={24} color={focused ? "black" : "grey"} />
          ))
        }}/>
        <BottomTab.Screen name="Contact" component={HomeScreen} options={{
          tabBarIcon: (({focused}) => (
            <MaterialIcons name="send-to-mobile" size={24} color={focused ? "black" : "grey"} />
          ))
        }}/>
      </BottomTab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
