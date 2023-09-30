export const translateOption = (option) => {
  const translationMap = {
    unique: "única",
    weekly: "semanal",
    monthly: "mensual",
    individual: "individual",
    group: "grupal",
    classType: "tipo de clase",
    frequency: "frecuencia",
  };
  return translationMap[option] || option;
};
