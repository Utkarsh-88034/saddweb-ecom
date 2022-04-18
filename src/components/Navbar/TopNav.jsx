import React from "react";
import styled from "styled-components";
import {
  SearchOutlined,
  UserOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import hellboylogo1 from "../../assets/images/helboylogo1.png";

const TopNav = () => {
  const NavBarTopContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 10px;
  `;
  const SearchForm = styled.form`
    height: "40px";
    width: 400px;
    border: 1px solid black;
    border-radius: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 3px;
    margin: 0 7rem;
  `;
  const SearchInput = styled.input`
    height: 30px;
    width: 300px;
    border: none;
    margin-left: 20px;
    outline: none;
  `;
  const SearchButton = styled.button`
    height: 35px;
    border-radius: 100px;
    outline: none;
    border: none;
    display: flex;
    justify-content: space-between;
    align-ctems: center;
    background-color: #f9c349;
    color: white;
    padding: 15px;
    cursor: pointer;
  `;
  return (
    <NavBarTopContainer>
      <img src={hellboylogo1} alt="" style={{ margin: "0 3rem" }} />

      <SearchForm>
        <SearchInput placeholder="Try our search..." type="text" />
        <SearchButton type="submit">
          <div style={{ marginRight: "10px" }}>
            <SearchOutlined />
          </div>
          Search
        </SearchButton>
      </SearchForm>

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
    </NavBarTopContainer>
  );
};

export default TopNav;
