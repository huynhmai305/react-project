export const translateError = (error) => {
  const errorsI18n: object = {
    "auth/user-not-found": "Email is not correct",
    "auth/wrong-password": "Password is not correct",
  };
  return errorsI18n[error.code] || error.message;
};
