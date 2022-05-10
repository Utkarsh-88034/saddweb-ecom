import React, { useEffect } from "react";
import Footer from "../components/Footer/Footer";
import BottomNav from "../components/Navbar/BottomNav";
import TopNav from "../components/Navbar/TopNav";
import styled from "styled-components";
import CartProduct from "../components/Cart/CartProduct";
import { Link } from "react-router-dom";
import useStore from "../store";

const Cart = () => {
  const NavHead = styled.div`
    width: 80%;
    margin: 20px auto;
    display: flex;
    @media (max-width: 585px) {
      display: none;
    }
  `;
  const TotalContainer = styled.div`
    height: 500px;
    width: 25rem;
    border: 1px solid black;
    border: 1px solid #b5bdc4;
    box-sizing: border-box;
    border-radius: 12px;
    margin: 10px 0;
    min-width: 320px;
  `;
  const ProductListContainer = styled.div`
    // margin-right: 20px;
    margin-bottom: 30px;
  `;
  const CartContainer = styled.div`
    display: flex;
    margin: auto;
    width: 80%;
    justify-content: space-between;
    margin-bottom: 250px;
    flex-wrap: wrap;
  `;
  const Promocode = styled.input`
    height: 40px;
    width: 70%;
    // border: 2px solid #b5bdc4;
    border: none;
    border-right: none;
    font-size: 20px;
    outline: none;
    margin: 5px;
  `;
  const PromocodeAppyButton = styled.div`
    height: 50px;
    border-left: 2px solid #b5bdc4;
    border-radius: 12px;
    width: 30%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    font-weight: 500;
    font-size: 16px;
  `;
  const PromocodeContainer = styled.div`
    display: flex;
    border: 2px solid #b5bdc4;
    border-radius: 12px;
    width: 90%;
    margin: 30px auto;
    justify-content: center;
    align-items: center;
  `;
  const DashedDivider = styled.hr`
    border: none;
    border-top: 2px dashed #b5bdc4;
    color: #fff;

    height: 1px;
    width: 100%;
  `;
  const CostDetailsContainer = styled.div`
    margin: 30px;
  `;
  const DetailContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
  `;
  const Subtotal = styled.p`
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
  `;
  const SubtotlPrice = styled.p`
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
  `;
  const Title = styled.p`
    font-weight: 400;
    font-size: 16px;
    color: #49443e;
  `;
  const Subtitle = styled.p`
    font-weight: 400;
    font-size: 16px;
    color: #49443e;
  `;
  const CheckoutButton = styled.div`
    display: flex;
    border: 2px solid #b5bdc4;
    border-radius: 12px;
    width: 90%;
    margin: 30px auto;
    justify-content: center;
    align-items: center;
    height: 50px;
    padding: 5px 0;
    background: #f9c349;
    color: #ffffff;
    font-weight: 500;
    font-size: 18px;
    cursor: pointer;
  `;
  return (
    <>
      <TopNav />
      <BottomNav />
      <NavHead>
        <p
          style={{
            fontWeight: "400",
            fontSize: "14px",
            color: "#818181",
          }}
        >
          Home/All Products/Product 1/
        </p>
        <p style={{ fontWeight: "500" }}>Basket</p>
      </NavHead>
      <CartContainer>
        {Cart.cart_items?.length > 0 ? (
          <ProductListContainer>
            {Cart.cart_items.map((item, index) => (
              <CartProduct key={index} />
            ))}
          </ProductListContainer>
        ) : (
          ""
        )}

        <TotalContainer>
          <PromocodeContainer>
            <Promocode placeholder="Promocode" />
            <PromocodeAppyButton>Apply</PromocodeAppyButton>
          </PromocodeContainer>
          <DashedDivider />
          <CostDetailsContainer>
            <DetailContainer>
              <Subtotal>Subtotal</Subtotal>
              <SubtotlPrice>Rs. 399.00</SubtotlPrice>
            </DetailContainer>
            <DetailContainer>
              <Title>Discount</Title>
              <Subtitle>(20%) - $16.19</Subtitle>
            </DetailContainer>
            <DetailContainer>
              <Title>Delivery</Title>
              <Subtitle>₹00.00</Subtitle>
            </DetailContainer>
            <DetailContainer>
              <Title>Tax</Title>
              <Subtitle> + ₹39.00</Subtitle>
            </DetailContainer>
          </CostDetailsContainer>
          <DashedDivider />
          <Link to="/checkout">
            <CheckoutButton>Proceed To Checkout</CheckoutButton>
          </Link>
        </TotalContainer>
      </CartContainer>
      <Footer />
    </>
  );
};

export default Cart;
