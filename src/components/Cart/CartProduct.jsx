import React from "react";
import styled from "styled-components";
import massgainer from "../..//assets/images/Massgainer5kg.png";

const CartProduct = () => {
  const CartProdContainer = styled.div`
    border: 1px solid #b5bdc4;
    box-sizing: border-box;
    border-radius: 12px;
    height: 150px;
    width: 100%;
    min-width: 320px;
    display: flex;
    // justify-content: space-between;
    align-items: center;
    padding: 10px;
    position: relative;
    // @media (max-width: 1256px) {
    //   height: 150px;
    //   width: 80%;
    // }
    `
  ;
  const CartContainer = styled.div`
    width: 100%;
    margin: auto;
    // border: 1px solid black;
    display: flex;
    margin: 10px 0;
  `;
  const ImageContainer = styled.div`
    height: 90%;
  `;
  const ProductImage = styled.img`
    object-fit: cover;
    height: 100%;
    margin-right: 20px;
  `;
  const DetailsContainer = styled.div`
    text-align: left;
  `;
  const DeleteButton = styled.div`
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
  `;
  const Title = styled.p`
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    margin: 0;
  `;
  const Price = styled.p`
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    color: #b5bdc4;
  `;
  const QuantityDeleteContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
  `;
  const Quantity = styled.div`
    width: 70px;
    height: 30px;
    border: 1px solid #b5bdc4;
    border-radius: 7px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  `;
  const AddItem = styled.p`
    margin: 0;
    cursor: pointer;
  `;
  const RemoveItem = styled.p`
    margin: 0;
    cursor: pointer;
  `;
  const QValue = styled.p`
    margin: 0;
  `;
  return (
    <CartContainer>
      <CartProdContainer>
        <ImageContainer>
          <ProductImage src={massgainer} />
        </ImageContainer>
        <DetailsContainer>
          <Title>Hell Boy Natural Peanut Butter Crunchy ( 2KG )</Title>
          <Price>Rs.399.00</Price>
          <QuantityDeleteContainer>
            <Quantity>
              <AddItem>+</AddItem>
              <QValue>3</QValue>
              <RemoveItem>-</RemoveItem>
            </Quantity>
            <DeleteButton>Delete</DeleteButton>
          </QuantityDeleteContainer>
        </DetailsContainer>
      </CartProdContainer>
    </CartContainer>
  );
};

export default CartProduct;
