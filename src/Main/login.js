import useStore from "../store";

const login = useStore((state) => state.login);

export const loginSubmitHandeler = (email, password) => {
  const cred = { email: email, password: password };
  login(cred);
};
