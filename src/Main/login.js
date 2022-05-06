export const loginSubmitHandeler = (email, password, action) => {
  const cred = { email, password };
  action(cred);
};

export const signupSubmitHandler = (
  name,
  email,
  user_name,
  password,
  is_admin,
  action
) => {
  const cred = { name, email, user_name, password, is_admin };
  action(cred);
};
