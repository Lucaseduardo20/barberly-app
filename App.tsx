import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AntDesign from '@expo/vector-icons/AntDesign';
import { AuthProvider, useAuth } from './src/contexts/AuthContext';
import { LoginScreen } from './src/screens/LoginScreen';
import { AppointmentsScreen } from './src/screens/AppointmentsScreen';
import { AccountScreen } from './src/screens/AccountScreen';
import { HomeScreen } from './src/screens/HomeScreen';

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <LoginScreen />;
  }

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          // Escolhendo ícones com base na rota
          if (route.name === 'Home') {
            iconName = 'home';  // Ícone de casa
          } else if (route.name === 'Agendamentos') {
            iconName = 'calendar';  // Ícone de calendário
          } else if (route.name === 'Perfil') {
            iconName = 'user';  // Ícone de pessoa
          }

          // Retorna o ícone correto com as cores e tamanhos
          return <AntDesign name={iconName as any} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#ff3300', // Vermelho padrão da barbearia
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Agendamentos" component={AppointmentsScreen} />
      <Tab.Screen name="Perfil" component={AccountScreen} />
    </Tab.Navigator>
  );
};

export default function App() {
  return (
    <AuthProvider>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </AuthProvider>
  );
}
