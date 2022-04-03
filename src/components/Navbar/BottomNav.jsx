import React from "react";
import { Menu } from "antd";

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
      <Menu.Item key="mail">Home</Menu.Item>
      <Menu.Item key="app">All Products</Menu.Item>
      <SubMenu key="SubMenu" title="Authenticity">
        <Menu.ItemGroup title="Item 1">
          <Menu.Item key="setting:1">Option 1</Menu.Item>
          <Menu.Item key="setting:2">Option 2</Menu.Item>
        </Menu.ItemGroup>
        <Menu.ItemGroup title="Item 2">
          <Menu.Item key="setting:3">Option 3</Menu.Item>
          <Menu.Item key="setting:4">Option 4</Menu.Item>
        </Menu.ItemGroup>
      </SubMenu>
      <Menu.Item key="alipay">Contact</Menu.Item>
    </Menu>
  );
};

export default BottomNav;
