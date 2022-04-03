import React from "react";
import BottomNav from "../components/Navbar/BottomNav";
import TopNav from "../components/Navbar/TopNav";
import HeaderMain from "../assets/images/headermain.png";
import LeanGainerProduct from "../assets/images/leangainer.png";

const Home = () => {
  return (
    <div className="home">
      <TopNav />
      <BottomNav />
      <div className="mainheadimg" style={{ width: "100vw" }}>
        <img
          src={HeaderMain}
          style={{ width: "100%", objectFit: "cover" }}
        ></img>
      </div>
      <div
        style={{
          display: " flex",
          border: "1px solid black",
          width: "70%",
          margin: "auto",
          height: "60vh",
        }}
      >
        <img src={LeanGainerProduct} alt="" style={{ margin: "20px" }} />
        <div>
          <p style={{ fontSize: "30px", fontWeight: "bolder" }}>
            Best Quality Hell Boy Nutrition - Lean Gainer
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
