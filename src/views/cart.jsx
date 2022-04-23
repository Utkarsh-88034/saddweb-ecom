import React from "react";
import Footer from "../components/Footer/Footer";
import BottomNav from "../components/Navbar/BottomNav";
import TopNav from "../components/Navbar/TopNav";
import styled from "styled-components";
import massgainer from "../assets/images/Massgainer5kg.png";

const Cart = () => {
  const CartProdContainer = styled.div`
    border: 1px solid #b5bdc4;
    box-sizing: border-box;
    border-radius: 12px;
    height: 150px;
    width: 50%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
  `;
  const CartContainer = styled.div`
    width: 80%;
    margin: auto;
    // border: 1px solid black;
    height: 100vh;
    display: flex;
  `;
  const ImageContainer = styled.div`
    height: 90%;
  `;
  const ProductImage = styled.img`
    object-fit: cover;
    height: 100%;
  `;
  const DetailsContainer = styled.div``;
  const DeleteButton = styled.div``;
  const Title = styled.p``;
  const Price = styled.p``;
  const Quantity = styled.div``;
  return (
    <>
      <TopNav />
      <BottomNav />
      <CartContainer>
        <CartProdContainer>
          <ImageContainer>
            <ProductImage src={massgainer} />
          </ImageContainer>
          <DetailsContainer>
            <Title>Hell Boy Natural Peanut Butter Crunchy ( 2KG )</Title>
            <Price>Rs.399.00</Price>
          </DetailsContainer>
          <DeleteButton>Delete</DeleteButton>
        </CartProdContainer>
      </CartContainer>
      <Footer />
    </>
  );
};

export default Cart;
