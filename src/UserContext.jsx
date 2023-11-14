import { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { apiLogin, apiRegister, validateToken } from './api/apiService';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [session, setSession] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const checkTokenValidity = async () => {
      const storedUser = localStorage.getItem('user');
      const storedToken = localStorage.getItem('jwt');
      if (storedUser && storedToken) {
        try {
          const isValid = await validateToken(JSON.parse(storedToken).token);
          if (isValid) {
            setSession(JSON.parse(storedUser));
          } else {
            logout();
          }
        } catch (error) {
          console.error('Error al validar el token:', error);
          logout();
        }
      }
    };
    checkTokenValidity();
  }, []);

  const login = async (email, password) => {
    try {
      const response = await apiLogin({ email, password });
      setSession(response.user);
      return response;
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
      throw error;
    }
  };

  const register = async (userData) => {
    try {
      const response = await apiRegister(userData);
      setSession(response.user);
      navigate('/mi-perfil');
      return response;
    } catch (error) {
      console.error('Error al registrarse:', error);
      throw error;
    }
  };

  const logout = () => {
    localStorage.removeItem('jwt');
    localStorage.removeItem('user');
    setSession(null);
    navigate('/');
  };

  return (
    <UserContext.Provider value={{ session, setSession, login, register, logout }}>
      {children}
    </UserContext.Provider>
  );
};
