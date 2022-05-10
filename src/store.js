import create from "zustand";
import axios from "axios";

let useStore = (set) => ({
  AllProducts: [],
  AllUsers: [],
  LoginUser: localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo"))
    : null,
  Product: {},
  AllReviews: [],
  AllReviewsById: [],
  ReviewByUserId: {},
  ReviewByReviewId: {},
  FeaturedProdById: {},
  AllCartDetails: [],
  AllCartDetailsById: {},
  LoginError: false,
  Cart: {},

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
      const res = await axios.post("/api/auth/register", cred);
    } catch (error) {
      console.log("error");
    }
  },

  login: async (cred) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const res = await axios.post("/api/auth/login", cred, config);
      localStorage.setItem("userInfo", JSON.stringify(res.data.data));
      set({ LoginUser: res.data.data, LoginError: false });
      return "Success";
    } catch (error) {
      set({
        LoginError:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  },

  addProduct: async (proddetails) => {
    try {
      const token = JSON.parse(localStorage.getItem("userInfo"));
      const config = {
        headers: {
          Authorization: `Bearer ${token.AccessToken}`,
        },
      };
      const res = await axios.post(
        "/api/product/addproduct",
        proddetails,
        config
      );
    } catch (error) {}
  },

  getProductById: async (id) => {
    try {
      const res = await axios.get(`/api/product/${id}`);
      // set({ Product: res.data.data });
      return res.data.data;
    } catch (error) {}
  },

  updateProduct: async (id, details) => {
    try {
      const token = JSON.parse(localStorage.getItem("userInfo"));
      const config = {
        headers: {
          Authorization: `Bearer ${token.AccessToken}`,
        },
      };
      const res = await axios.patch(`/api/product/${id}`, details, config);
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
  getFeaturedProdById: async (pid, fpid) => {
    try {
      const res = await axios.get(`/api/featured_product/${pid}/${fpid}`);
      // set({ FeaturedProdById: res.data.data });
      return res.data.data;
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
  createCart: async () => {
    try {
      const token = JSON.parse(localStorage.getItem("userInfo"));
      const config = {
        headers: {
          Authorization: `Bearer ${token.AccessToken}`,
        },
      };
      const res = await axios.post(`/api/cart/create`, {}, config);
      set({ Cart: res.data.data });
    } catch (error) {
      console.log(error);
    }
  },
  addToCart: async (fpid, pid, cid) => {
    try {
      const token = JSON.parse(localStorage.getItem("userInfo"));
      const config = {
        headers: {
          Authorization: `Bearer ${token.AccessToken}`,
        },
      };
      const res = await axios.patch(
        `/api/cart/${pid}/${fpid}/${cid}/add`,
        { quantity: 1 },
        config
      );
    } catch (error) {}
  },
});
// useStore = devtools(useStore);
export default useStore = create(useStore);
