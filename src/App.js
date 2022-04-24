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

function App() {
  return (
    <div className="App">
      {/* <Home /> */}
      {/* <AllProducts /> */}
      {/* <LoginCart /> */}
      {/* <Signup2 /> */}
      {/* <Signup /> */}
      {/* <User /> */}
      <Cart />
    </div>
  );
}

export default App;
