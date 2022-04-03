import React from "react";

import {
  SearchOutlined,
  UserOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import hellboylogo1 from "../../assets/images/helboylogo1.png";

const TopNav = () => {
  return (
    <div
      className="navbartop"
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "10px 10px",
      }}
    >
      <img src={hellboylogo1} alt="" style={{ margin: "0 3rem" }} />

      <form
        className="search"
        style={{
          height: "40px",
          width: "400px",
          border: "1px solid black",
          borderRadius: "100px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "3px",
          margin: "0 7rem",
        }}
      >
        <input
          placeholder="Try our search..."
          type="text"
          style={{
            height: "30px",
            width: "300px",
            border: "none",
            marginLeft: "20px",
            outline: "none",
          }}
        />
        <button
          type="submit"
          style={{
            height: "35px",
            borderRadius: "100px",
            outline: "none",
            border: "none",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            backgroundColor: "#F9C349",
            color: "white",
            padding: "15px",
            cursor: "pointer",
          }}
        >
          <div style={{ marginRight: "10px" }}>
            <SearchOutlined />
          </div>
          Search
        </button>
      </form>

      <div className="accButton" style={{ margin: "0 0.5rem" }}>
        <UserOutlined
          style={{
            fontSize: "20px",
            border: "1px solid black",
            borderRadius: "50%",
            padding: "5px",
          }}
        />
        <button
          style={{
            border: "none",
            outline: "none",
            backgroundColor: "white",
            cursor: "pointer",
          }}
        >
          Account
        </button>
      </div>
      <div className="cartButton" style={{ margin: "0 0.5rem" }}>
        <ShoppingCartOutlined
          style={{
            fontSize: "20px",
            border: "1px solid black",
            borderRadius: "50%",
            padding: "5px",
          }}
        />
        <button
          style={{
            border: "none",
            outline: "none",
            backgroundColor: "white",
            cursor: "pointer",
          }}
        >
          Account
        </button>
      </div>
    </div>
  );
};

export default TopNav;
