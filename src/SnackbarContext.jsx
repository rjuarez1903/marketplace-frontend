// SnackbarContext.js
import { createContext, useState } from 'react';

export const SnackbarContext = createContext();

export const SnackbarProvider = ({ children }) => {
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    type: 'success',
  });

  const openSnackbar = (message, type = 'success') => {
    setSnackbar({ open: true, message, type });
  };

  const closeSnackbar = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  return (
    <SnackbarContext.Provider value={{ snackbar, openSnackbar, closeSnackbar }}>
      {children}
    </SnackbarContext.Provider>
  );
};
