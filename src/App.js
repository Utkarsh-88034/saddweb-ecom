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
          <Route path="admin/Dashbord" element={<Dashbord/>} />

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
