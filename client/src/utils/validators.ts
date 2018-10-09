export const emailValidation = (value: string) => {
  if (!value) {
    return "Email field is required";
  }
  if (!validateEmail(value)) {
    return `"${value}" is incorrect email`;
  }
  return null;
};

export const validateEmail = (email: string) => {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

export const validatePassword = (value: string) => {
  if (value.length < 8) {
    return "Password is too easy";
  }

  if (!/[A-Z]/.test(value)) {
    return "Password should contain at least one TITLE character";
  }

  if (!/[a-z]/.test(value)) {
    return "Password should contain at least one lower character";
  }

  if (!/\d/.test(value)) {
    return "Password should contain at least one number";
  }
  if (!/\W/.test(value)) {
    return "Password should contain at least one special character";
  }
  return null;
};
