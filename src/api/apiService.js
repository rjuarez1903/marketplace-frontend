import axiosInstance from "./axiosConfig";

export const apiLogin = (data) => {
  return axiosInstance
    .post("/auth/login", data)
    .then((response) => {
      localStorage.setItem("jwt", JSON.stringify(response.data.jwt));
      localStorage.setItem("user", JSON.stringify(response.data.user));
      return response.data;
    })
    .catch((error) => {
      throw error.response.data;
    });
};

export const validateToken = (token) => {
  return axiosInstance
    .post("/auth/validateToken", { token })
    .then((response) => response.data.valid)
    .catch((error) => {
      throw error;
    });
};

export const refreshToken = () => {
  return axiosInstance
    .get("/auth/refresh")
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });
};

export const getServices = (category) => {
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

export const deleteService = (classId) => {
  return axiosInstance
    .delete(`/services/${classId}`)
    .then((response) => response.data)
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

export const getServiceContractsByUser = () => {
  return axiosInstance
    .get(`/serviceContracts/user`)
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


export const uploadImage = (file) => {
  const formData = new FormData();
  formData.append("file", file); 
  return axiosInstance
    .patch(`/users/profileImage`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });
};