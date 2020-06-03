const validateLogin = values => {
  const errors = {};
  if (!values.email) {
    errors.email = 'Obrigatório';
  } else if (values.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'email inválido.';
  }
  if (!values.password) {
    errors.password = 'required';
  }
  return errors;
};

export { validateLogin as default, validateLogin };
