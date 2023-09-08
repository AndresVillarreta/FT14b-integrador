const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
const numPass = /\d/;

export default function validation(inputs) {
  const errors = {};
  if (!regexEmail.test(inputs.email)) {
    errors.email = "Debe ser un correo electrónico";
  }
  if (inputs.email.length > 35) {
    errors.email = "El correo electronico no debe de exeder los 35 caracteres";
  }
  if (!numPass.test(inputs.password)) {
    errors.password = "La contraseña debe de tener al menos 1 numero";
  }
  if (inputs.password.length < 6 || inputs.password.length > 10) {
    errors.password = "La contraseña debe de tener de 6 a 10 caracteres";
  }
  return errors;
}
