export const validateForm = (formObject) => {
  const errors = {};

  if (!formObject.username.trim()) {
    errors.username = "Enter username";
  }
  if (!formObject.email.trim()) {
    errors.email = "Enter email";
  }

  if (!formObject.password.trim()) {
    errors.password = "Password must have more than 4 characters";
  } else if (formObject.password.length < 4) {
    errors.password = "Password must have more than 4 characters";
  }
  if (!formObject.contactNo.trim()) {
    errors.contactNo = "Invalid contact no.";
  } else if (formObject.contactNo.length !== 10) {
    errors.contactNo = "Invalid contact no.";
  }
  return errors;
};
