import React from "react";
import styled from "styled-components";
import MassGainer5Kg from "../../assets/images/Massgainer5kg.png";
import Sale from "../../assets/images/sale-banner.png";
import CartIcon from "../../assets/images/cart1.png";

function ProductCard({ type, title, originalPrice, price, productImage }) {
  const CardContainer = styled.div`
    border: 1px solid #e5e5e5;
    width: 300px;
    height: 454px;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin: 20px 0;
  `;
  const CardTopContainer = styled.div`
    width: 100%;
  `;
  const CardProductDetailsContainer = styled.div`
    border-top: 1px solid #e5e5e5;
    height: 30%;
    width: 100%;
    padding: 10px;
    position: relative;
  `;
  const ProductType = styled.p`
    font-size: 12px;
    color: rgba(181, 189, 196, 1);
    font-weight: 700;
    margin: 0;
  `;
  const ProductName = styled.p`
    font-weight: 500;
    font-size: 16px;
  `;
  const PriceLabel = styled.p`
    font-weight: 500;
    font-size: 12px;
    color: #b5bdc4;
    margin: 0;
  `;
  const Price = styled.p`
    font-weight: 500;
    font-size: 14px;
    margin: 0 0;
  `;
  const StrikedPrice = styled.p`
    font-weight: 500;
    font-size: 14px;
    color: #b5bdc4;
    text-decoration: line-through;
    margin: 0 10px;
  `;
  const PriceContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: max-content;
    align-items: center;
  `;
  const CartButton = styled.img`
    position: absolute;
    bottom: 20px;
    right: 10px;
    cursor: pointer;
  `;
  return (
    <CardContainer>
      <CardTopContainer>
        <img src={Sale} />
      </CardTopContainer>

      <img src={productImage} alt="" />
      <CardProductDetailsContainer>
        <ProductType>{type}</ProductType>
        <ProductName>{title}</ProductName>
        <PriceLabel>Price:</PriceLabel>
        <PriceContainer>
          <Price>{`Rs. ${price}`}</Price>
          <StrikedPrice>{`Rs. ${originalPrice}`}</StrikedPrice>
        </PriceContainer>
        <CartButton src={CartIcon} />
      </CardProductDetailsContainer>
    </CardContainer>
  );
}

export default ProductCard;
