export const validate = (values) => {
  const errors = {};
  if (!values.email) {
    errors.email = "Email required!";
  }
  if (!values.drink) {
    errors.drink = "Choose one of the options"
  }
  if (!values.bio) {
    errors.bio = "Please fill in your biography!"
  }
  return errors;
};
