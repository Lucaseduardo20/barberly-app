import React, { createContext, useState, useContext, ReactNode } from 'react';
import { loginService } from '../services/auth';
import { loginData } from '../types/auth';
import { AxiosResponse } from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface AuthContextData {
  isAuthenticated: boolean;
  login: (data: loginData) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextData | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = async (data: loginData) => {
      const response: AxiosResponse = await loginService(data).then(() => {
        return response.data;
      }).catch((error) => {
        return error;
      }).finally(() => {
        AsyncStorage.setItem('token', response.data.token);
        setIsAuthenticated(true)
      })
  };

  const logout = async () => {
    setIsAuthenticated(false);
    await AsyncStorage.setItem('token', '');
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth deve ser usado dentro de AuthProvider');
  }
  return context;
};
