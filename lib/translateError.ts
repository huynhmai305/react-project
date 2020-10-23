export const translateError = (error) => {
  const errorsI18n: object = {
    "auth/user-not-found": "Email is not correct",
    "auth/wrong-password": "Password is not correct",
    "auth/email-already-in-use":
      "The email address is already in use by another account",
  };
  return errorsI18n[error.code] || error.message;
};
