import React from "react";
import styled from "styled-components";
import ham from "../../assets/images/hamburger.png";
import {
  SearchOutlined,
  UserOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import hellboylogo1 from "../../assets/images/helboylogo1.png";
import { Link } from "react-router-dom";

const TopNav = () => {
  const Hamburger = styled.img``;
  const HamburgerContainer = styled.div`
    display: none;
    @media (max-width: 963px) {
      display: block;
    }
  `;
  const NavBarTopContainer = styled.div`
    display: flex;
    width: 100vw;
    padding: 10px 10px;
    align-items: center;
    justify-content: space-between;
    max-width: 1500px;
  `;
  const SearchForm = styled.form`
    height: "40px";
    width: 30%;
    border: 1px solid black;
    border-radius: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 3px;
    @media (max-width: 784) {
      display: none;
    }
  `;
  const SearchInput = styled.input`
    height: 30px;
    width: 80%;
    border: none;
    margin-left: 20px;
    outline: none;
    @media (max-width: 784) {
      display: none;
    }
  `;
  const SearchButton = styled.button`
    height: 35px;
    border-radius: 100px;
    outline: none;
    border: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #f9c349;
    color: white;
    padding: 15px;
    cursor: pointer;
    @media (max-width: 784) {
      display: hidden;
    }
  `;
  const AccButton = styled.div`
    margin: 0 0.5 rem;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: 784) {
      display: hidden;
    }
  `;
  const CartButton = styled.div`
    margin: 0 0.5 rem;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: 784) {
      display: hidden;
    }
  `;
  const LinksContainer = styled.div`
    display: flex;
    width: 200px;
    align-items: center;
    justify-content: space-evenly;
  `;
  const RegularFragment = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    @media (max-width: 963px) {
      display: none;
    }
  `;

  return (
    <NavBarTopContainer>
      <Link to="/">
        <img src={hellboylogo1} alt="" style={{ margin: "0 3rem" }} />
      </Link>

      <RegularFragment>
        <SearchForm>
          <SearchInput placeholder="Try our search..." type="text" />
          <SearchButton type="submit">
            <div style={{ marginRight: "10px" }}>
              <SearchOutlined />
            </div>
            Search
          </SearchButton>
        </SearchForm>
        <LinksContainer>
          <Link to="/login" style={{ textDecoration: "none", color: "black" }}>
            <AccButton>
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
            </AccButton>
          </Link>

          <Link to="/cart" style={{ textDecoration: "none", color: "black" }}>
            <CartButton>
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
                Cart
              </button>
            </CartButton>
          </Link>
        </LinksContainer>
      </RegularFragment>

      <HamburgerContainer>
        <Hamburger src={ham} />
      </HamburgerContainer>
    </NavBarTopContainer>
  );
};

export default TopNav;
