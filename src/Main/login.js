export const loginSubmitHandeler = async (
  email,
  password,
  action,
  route,
  createCart,
  Cart
) => {
  const cred = { email, password };
  const act = await action(cred);

  if (Cart != {}) {
    createCart();
    console.log("created");
  }
  console.log(Cart);
  if (act == "Success") {
    route("/");
  }
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
