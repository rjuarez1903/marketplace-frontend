export const translateOption = (option) => {
  const translationMap = {
    unique: "única",
    weekly: "semanal",
    monthly: "mensual",
    individual: "individual",
    group: "grupal",
    classType: "tipo de clase",
    frequency: "frecuencia",
    sortOrder: "Ordenar por",
    requested: "Solicitada",
    completed: "Completada",
    accepted: "Aceptada",
    cancelled: "Cancelada",
  };
  return translationMap[option] || option;
};
