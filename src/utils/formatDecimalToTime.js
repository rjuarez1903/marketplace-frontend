import moment from "moment";

export const formatDecimalToTime = (decimalValue) => {
    // Convierte el decimal en minutos
    const totalMinutes = decimalValue * 60;

    // Calcula las horas y minutos
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
  
    // Formatea la salida
    let formattedTime = '';
  
    if (hours > 0) {
      formattedTime += hours === 1 ? '1 hora' : `${hours} horas`; // Singular o plural
    }
  
    if (hours > 0 && minutes > 0) {
      formattedTime += ' y ';
    }
  
    if (minutes > 0) {
      formattedTime += minutes === 1 ? '1 minuto' : `${minutes} minutos`; // Singular o plural
    }

  return formattedTime;
};
