export const validateForm = (formObject) => {
  const errors = {};

  if (!formObject.username) {
    errors.username = "Username is required";
  }

  if (!formObject.email) {
    errors.email = "Email is required";
  }

  if (!formObject.password) {
    errors.password = "Password is required";
  } else if (formObject.password.length < 4) {
    errors.password = "Password must have more than 4 characters";
  }

  if (!formObject.contactNo) {
    errors.contactNo = "Contact no. is required";
  } else if (formObject.contactNo.length !== 10) {
    errors.contactNo = "Invalid contact no.";
  }

  return errors;
};
