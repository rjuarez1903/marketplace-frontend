export const formatPhoneNumber = (phoneNumber) => {
    // Limpiar el número para dejar sólo dígitos
    const cleaned = ('' + phoneNumber).replace(/\D/g, '');
  
    // Verificar si el número de teléfono tiene la longitud adecuada
    const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
    if (match) {
      // Formatear el número
      return '(' + match[1] + ') ' + match[2] + '-' + match[3];
    }
  
    // En caso de no coincidir, retornar el número original
    return phoneNumber;
  }