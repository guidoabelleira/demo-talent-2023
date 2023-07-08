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
import { Text } from 'react-native';
import CarouselArtist from './src/components/CarouselArtist';
import FavoritesList from './src/components/FavoritesList';
import GroupsScreen from './src/components/GroupsScreen';
import ContactScreen from './src/components/ContactScreen';

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
        component={CarouselArtist} 
        options={({ navigation }) => ({
          headerShown: false,
          title: '', // Vaciar el título del encabezado
          // headerLeft: () => (
          //   <IconButton
          //     onPress={() => navigation.replace("Home")}
          //     icon={<Ionicons name="arrow-back" size={24} color="black" />}
          //   />
          // ),
          headerRight: () => null, // Ocultar otros elementos del encabezado
          headerStyle: {
            backgroundColor: "rgba(166, 166, 166, 1)",
          },
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 24
          },
        })}
        />
        <Stack.Screen 
        name="Profile" 
        component={DetailArtist} 
        options={({ navigation }) => ({
          headerShown: false,
          title: 'Profile', // Vaciar el título del encabezado
          headerTitleAlign: "center",
          headerLeft: () => (
            <IconButton
              onPress={() => navigation.replace("Home")}
              icon={<Ionicons name="arrow-back" size={24} color="black" />}
            />
          ),
          headerRight: () => null, // Ocultar otros elementos del encabezado
          headerStyle: {
            backgroundColor: "rgba(166, 166, 166, 1)",
          },
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 24
          },
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
         <BottomTab.Screen name="Favorites" component={FavoritesList} options={{
          tabBarIcon: (({focused}) => (
            <MaterialIcons name="favorite" size={24} color={focused ? "black" : "grey"} />
          ))
        }}/>
         <BottomTab.Screen name="Groups" component={GroupsScreen} options={{
          tabBarIcon: (({focused}) => (
            <Ionicons name="add-circle-outline" size={24} color={focused ? "black" : "grey"} />
          ))
        }}/>
        <BottomTab.Screen name="Contact" component={ContactScreen} options={{
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
