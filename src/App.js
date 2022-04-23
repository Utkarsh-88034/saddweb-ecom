import BottomNav from "./components/Navbar/BottomNav";
import TopNav from "./components/Navbar/TopNav";
import HeaderMain from "./assets/images/headermain.png";
import Home from "./views/home";
import AllProducts from "./views/allProducts";
import Cart from "./views/cart";

function App() {
  return (
    <div className="App">
      {/* <Home /> */}
      {/* <AllProducts /> */}
      <Cart />
    </div>
  );
}

export default App;
