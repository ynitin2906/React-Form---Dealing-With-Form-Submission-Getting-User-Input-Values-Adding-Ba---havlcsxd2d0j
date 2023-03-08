export const validateForm = (formObject) => {
  const errors = {};

  if (!formObject.username) {
    errors.username = "Enter username";
  }
  if (!formObject.email) {
    errors.email = "Enter email";
  }

  if (formObject.password.length < 4) {
    errors.password = "Password must have more than 4 characters";
  }
  if (formObject.contactNo.length !== 10) {
    errors.contactNo = "Invalid contact no.";
  }
  return errors;
};
