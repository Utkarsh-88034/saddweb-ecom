import BottomNav from "./components/Navbar/BottomNav";
import TopNav from "./components/Navbar/TopNav";
import HeaderMain from "./assets/images/headermain.png";
import Home from "./views/home";
import AllProducts from "./views/allProducts";
import Admin from "./views/Admin";
import LoginCart from "./views/LoginCart";
import Signup2 from "./views/Signup2";
import Signup from "./views/Signup";
import User from "./views/User";
import Cart from "./views/cart";
import ProductDetails from "./views/productDetails";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Checkout from "./views/Checkout";
import Dashbord from "./views/Dashbord";
import Read from "./views/Read";
import OrderDetail from "./views/OrderDetail";
import ProductPage from "./views/projectPage";
import UserName from "./views/UserName";
import UserNamecompo from "./components/UserName/UserNamecompo";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="products" element={<AllProducts />} />
          <Route path="login" element={<LoginCart />} />
          <Route path="signup" element={<Signup />} />
          <Route path="signup2" element={<Signup2 />} />
          <Route path="admin/user" element={<User />} />
          <Route path="admin/addproduct" element={<ProductDetails />} />
          <Route path="admin/product" element={<Admin />} />
          <Route path="admin/dashboard" element={<Dashbord />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="authenticity" element={<Read />} />
          <Route path="orderdetail" element={<OrderDetail />} />
          <Route path="cart" element={<Cart />} />
          <Route path="product-info" element={<ProductPage />} />
          <Route path="username" element={<UserName />} />
          <Route path="usernames" element={<UserNamecompo />} />

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
