// apiService.js (ubicado en la carpeta api o en la ubicación que prefieras)
import axiosInstance from "./axiosConfig";

// Función para realizar una solicitud GET a la API
export const getServices = () => {
  // try {
  //   const response = await axiosInstance.get('/services');
  //   Si la solicitud es exitosa, response.data contendrá los datos de la respuesta.
  //   return response.data.services;
  // } catch (error) {
  //   Si hay un error en la solicitud, puedes manejarlo aquí.
  //   Por ejemplo, puedes lanzar una excepción o devolver un objeto de error personalizado.
  //   throw error;
  // }

  //fix unnecessary try catch block
  return axiosInstance
    .get("/services")
    .then((response) => response.data.services)
    .catch((error) => {
      throw error;
    });
};

export const getPublicUserData = (userId) => {
  // try {
  //   const response = await axiosInstance.get(`/users/${userId}`);
  //   return response.data;
  // } catch (error) {
  //   throw error;
  // }

  //fix unnecessary try catch block
  return axiosInstance
    .get(`/users/${userId}`)
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });
};

export const getClassDetails = (classId) => {
  return axiosInstance
    .get(`/services/${classId}`)
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });
};
