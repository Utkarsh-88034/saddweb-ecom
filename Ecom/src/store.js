import create from "zustand";
import axios from "axios";

let useStore = (set) => ({
  AllProducts: [],
  AllUsers: [],
  LoginUser: {},
  Product: {},
  AllReviews: [],
  AllReviewsById: [],

  //

  getAllProduct: async () => {
    const res = await axios.get("/api/product/getproduct/");
    set({ AllProducts: res.data.data });
  },

  deleteProduct: async (id) => {
    const res = await axios.delete(`/api/product/${id}`);
  },

  getAllUsers: async () => {
    const res = await axios.get("/api/user/alluser");
    set({ AllUsers: res.data.data });
  },

  deleteUser: async (id) => {
    const res = await axios.delete(`/api/user/deleteuser/${id}`);
  },

  register: async (cred) => {
    const res = await axios.post("/api/aut/register", cred);
  },

  login: async (cred) => {
    const res = await axios.get("/api/auth/login", cred);
    set({ LoginUser: res.data.data });
  },

  addProduct: async (proddetails) => {
    const res = await axios.post("/api/addproduct", proddetails);
  },

  getProductById: async (id) => {
    const res = await axios.get(`/api/product/${id}`);
    set({ Product: res.data.data });
  },

  updateProduct: async (id, details) => {
    const res = await axios.patch(`/api/product/${id}`, details);
  },

  getAllReviews: async () => {
    const res = await axios.get("/api/reviews/getall");
    set({ AllReviews: res.data.data });
  },

  getAllReviewsById: async (id) => {
    const res = await axios.get(`/api/reviews/${id}`);
    set({ AllReviewsById: res.data.data });
  },
});
// useStore = devtools(useStore);
export default useStore = create(useStore);
