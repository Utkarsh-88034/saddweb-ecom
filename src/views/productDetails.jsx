import React from "react";
import styled from "styled-components";
import Footer from "../components/Footer/Footer";
import BottomNav from "../components/Navbar/BottomNav";
import TopNav from "../components/Navbar/TopNav";
import Details from "../components/ProductDetails/Details";
import Features from "../components/ProductDetails/Features";
import Price from "../components/ProductDetails/Price";
import ProdImages from "../components/ProductDetails/ProdImages";
const ProductDetails = () => {
  const NavHead = styled.div`
    width: 80%;
    margin: 20px auto;
    display: flex;
  `;
  const MainHeadProductDetails = styled.p`
    font-weight: 700;
    font-size: 40px;
  `;
  const ProductDdetailsPageContainer = styled.div`
    width: 80%;
    margin: auto;
    margin-bottom: 300px;
  `;
  const ProductInfoContainer = styled.div`
    width: 40rem;
    height: 30rem;
    background: #f4f4f6;
    border-radius: 12px;
    margin: 30px 0;
    padding: 40px;
  `;
  const NextButton = styled.div`
    display: flex;
    border: 2px solid #b5bdc4;
    border-radius: 12px;
    width: 300px;
    margin: 30px 0;
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
          Admin/
        </p>
        <p style={{ fontWeight: "500" }}>Product</p>
      </NavHead>
      <ProductDdetailsPageContainer>
        <MainHeadProductDetails>Product Details</MainHeadProductDetails>
        <ProductInfoContainer>
          {/* <Details /> */}
          {/* <Features /> */}
          {/* <Price /> */}
          <ProdImages />
        </ProductInfoContainer>
        <NextButton>Next</NextButton>
      </ProductDdetailsPageContainer>
      <Footer />
    </>
  );
};

export default ProductDetails;
