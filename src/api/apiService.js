import axiosInstance from "./axiosConfig";

// Función para realizar una solicitud GET a la API
export const getServices = (category) => {
  // try {
  //   const response = await axiosInstance.get('/services');
  //   Si la solicitud es exitosa, response.data contendrá los datos de la respuesta.
  //   return response.data.services;
  // } catch (error) {
  //   Si hay un error en la solicitud, puedes manejarlo aquí.
  //   Por ejemplo, puedes lanzar una excepción o devolver un objeto de error personalizado.
  //   throw error;
  // }
  return axiosInstance
    .get(`/services?category=${category}`)
    .then((response) => response.data.services)
    .catch((error) => {
      throw error;
    });
};

export const getServicesByUser = () => {
  return axiosInstance
    .get(`/services/user`)
    .then((response) => response.data.services)
    .catch((error) => {
      throw error;
    });
};

export const getPublicUserData = (userId) => {
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

export const getUnblockedComments = (classId) => {
  return axiosInstance
    .get(`/comments/${classId}`)
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });
};

export const getServiceContracts = (classId) => {
  return axiosInstance
    .get(`/serviceContracts/${classId}`)
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });
};

export const updateServiceContract = (classId, data) => {
  return axiosInstance
    .patch(`/serviceContracts/${classId}`, data)
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });
};
