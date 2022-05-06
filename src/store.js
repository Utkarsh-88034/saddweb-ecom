import create from "zustand";
import axios from "axios";

let useStore = (set) => ({
  AllProducts: [],
  AllUsers: [],
  LoginUser: {},
  Product: {},
  AllReviews: [],
  AllReviewsById: [],
  ReviewByUserId: {},
  ReviewByReviewId: {},
  FeaturedProdById: {},
  AllCartDetails: [],
  AllCartDetailsById: {},

  //

  getAllProduct: async () => {
    try {
      const res = await axios.get("/api/product/getproduct/");
      set({ AllProducts: res.data.data });
    } catch (error) {}
  },

  deleteProduct: async (id) => {
    try {
      const res = await axios.delete(`/api/product/${id}`);
    } catch (error) {}
  },

  getAllUsers: async () => {
    try {
      const res = await axios.get("/api/user/alluser");
      set({ AllUsers: res.data.data });
    } catch (error) {}
  },

  deleteUser: async (id) => {
    try {
      const res = await axios.delete(`/api/user/deleteuser/${id}`);
    } catch (error) {}
  },

  register: async (cred) => {
    try {
      const res = await axios.post("/api/aut/register", cred);
    } catch (error) {}
  },

  login: async (cred) => {
    try {
      const res = await axios.get("/api/auth/login", cred);
      set({ LoginUser: res.data.data });
    } catch (error) {}
  },

  addProduct: async (proddetails) => {
    try {
      const res = await axios.post("/api/addproduct", proddetails);
    } catch (error) {}
  },

  getProductById: async (id) => {
    try {
      const res = await axios.get(`/api/product/${id}`);
      set({ Product: res.data.data });
    } catch (error) {}
  },

  updateProduct: async (id, details) => {
    try {
      const res = await axios.patch(`/api/product/${id}`, details);
    } catch (error) {}
  },

  getAllReviews: async () => {
    try {
      const res = await axios.get("/api/reviews/getall");
      set({ AllReviews: res.data.data });
    } catch (error) {}
  },

  getAllReviewsById: async (id) => {
    try {
      const res = await axios.get(`/api/reviews/${id}`);
      set({ AllReviewsById: res.data.data });
    } catch (error) {}
  },

  addReviewsById: async (id, details) => {
    try {
      const res = await axios.post(`/api/reviews/${id}`, details);
    } catch (error) {}
  },

  updateReviewsById: async (prod_id, id, details) => {
    try {
      const res = await axios.put(`/api/reviews/${prod_id}/${id}`, details);
    } catch (error) {}
  },

  deleteReviewsById: async (prod_id, id, details) => {
    try {
      const res = await axios.delete(`/api/reviews/${prod_id}/${id}`);
    } catch (error) {}
  },

  getReviewsByUserId: async () => {
    try {
      const res = await axios.get(`/api/reviews/user_reviews`);
      set({ ReviewByUserId: res.data.data });
    } catch (error) {}
  },
  getReviewsByReviewId: async (id) => {
    try {
      const res = await axios.get(`/api/reviews/${id}`);
      set({ ReviewByReviewId: res.data.data });
    } catch (error) {}
  },
  addFeaturedProdById: async (id, details) => {
    try {
      const res = await axios.post(`/api/featured_product/${id}`, details);
    } catch (error) {}
  },
  getFeaturedProdById: async (id) => {
    try {
      const res = await axios.get(`/api/featured_product/${id}`);
      set({ FeaturedProdById: res.data.data });
    } catch (error) {}
  },
  updateProduct: async (id, details) => {
    try {
      const res = await axios.patch(`/api/featured_product/${id}`, details);
    } catch (error) {}
  },
  deleteFeaturedProdById: async (prod_id, id, details) => {
    try {
      const res = await axios.delete(`}/api/featured_product/${prod_id}/${id}`);
    } catch (error) {}
  },
  getAllCartDetails: async () => {
    try {
      const res = await axios.get("/api/cart/getallcart");
      set({ AllCartDetails: res.data.data });
    } catch (error) {}
  },

  getAllCartDetailsById: async (id) => {
    try {
      const res = await axios.get(`/api/cart/${id}`);
      set({ AllCartDetailsById: res.data.data });
    } catch (error) {}
  },
  addOrderByCartId: async (id, details) => {
    try {
      const res = await axios.post(`/api/orders/createorder/${id}`, details);
    } catch (error) {}
  },
  updateOrderById: async (id, details) => {
    try {
      const res = await axios.patch(`}/api/orders/${id}`, details);
    } catch (error) {}
  },
});
// useStore = devtools(useStore);
export default useStore = create(useStore);
