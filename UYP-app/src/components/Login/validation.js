const validation = (userData) => {
    let errors = {};
  
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(userData.usermail)) {
      errors.usermail = "el Email es invalido";
    }
    if (!userData.usermail) {
      errors.usermail = "Este campo no puede estar vacío";
    }
    if (!userData.usermail.length > 35) {
      errors.usermail = "El usuario no puede superar los 35 caracteres";
    }
    if (!userData.password.match(/\d/)) {
      errors.password = "El password debe contener al menos un numero";
    }
    if (userData.password.length < 6 || userData.password.length > 10) {
      errors.password = "La constraseña debe contener entre 6 y 10 caracteres";
    }
  
    return errors;
  };
  
  export default validation;