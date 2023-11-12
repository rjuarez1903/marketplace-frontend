import { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { apiLogin } from './api/apiService';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [session, setSession] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setSession(JSON.parse(storedUser));
    }
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

  const logout = () => {
    localStorage.removeItem('jwt');
    localStorage.removeItem('user');
    setSession(null);
    navigate('/');
  };

  return (
    <UserContext.Provider value={{ session, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};
