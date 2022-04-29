import React from "react";
import { Menu } from "antd";
import { Link } from "react-router-dom";

const BottomNav = () => {
  const { SubMenu } = Menu;
  return (
    <Menu
      mode="horizontal"
      theme="dark"
      style={{
        display: "flex",
        justifyContent: "center",
        backgroundColor: "black",
      }}
    >
      <Menu.Item key="mail">
        <Link to="/" style={{ textDecoration: "none", color: "white" }}>
          Home
        </Link>
      </Menu.Item>

      <Menu.Item key="app">
        <Link to="/products" style={{ textDecoration: "none", color: "white" }}>
          All products
        </Link>
      </Menu.Item>
      <Menu.Item key="app">
        <Link
          to="/authenticity"
          style={{ textDecoration: "none", color: "white" }}
        >
          Authenticity
        </Link>
      </Menu.Item>

      <Menu.Item key="app">
        <Link to="/contact" style={{ textDecoration: "none", color: "white" }}>
          Contact
        </Link>
      </Menu.Item>
    </Menu>
  );
};

export default BottomNav;
