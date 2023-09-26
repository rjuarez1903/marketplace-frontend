import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:4000/api/v1', // URL base de tu API
  timeout: 5000, // Tiempo máximo de espera para las solicitudes en milisegundos
  headers: {
    'Content-Type': 'application/json', // Tipo de contenido para las solicitudes
  },
});

// Interceptores (puedes personalizarlos según tus necesidades)
axiosInstance.interceptors.request.use(
  (config) => {
    // Puedes realizar modificaciones en la solicitud antes de enviarla, como agregar encabezados personalizados
    // Ejemplo: config.headers['Authorization'] = `Bearer ${token}`;
    config.headers.Authorization = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NGVjYzc3Y2I0NzI4MzAwOWExMzNhZGMiLCJpYXQiOjE2OTU2ODg5NzIsImV4cCI6MTY5NTY4OTg3Mn0.diPf9TnXdsT2qI2i6uJYyxyLQFU-jsoawSoVG0PktLo`;
    // console.log('Solicitud enviada:', config);
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    // Puedes realizar modificaciones en la respuesta antes de que llegue al componente que realizó la solicitud
    return response;
  },
  (error) => {
    // Manejo de errores globales, como redirecciones en caso de errores de autenticación o errores 404
    // Ejemplo: if (error.response.status === 401) { redirigir al inicio de sesión }
    return Promise.reject(error);
  }
);

export default axiosInstance;
