import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text,SafeAreaView, View } from 'react-native';
import { TailwindProvider } from "tailwindcss-react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from './screens';
import {  } from 'react-native-safe-area-context';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <TailwindProvider>
      
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    
      </TailwindProvider>
    </NavigationContainer>
    
  );
}

