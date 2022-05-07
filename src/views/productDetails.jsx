import React, { useState } from "react";
import styled from "styled-components";
import Footer from "../components/Footer/Footer";
import BottomNav from "../components/Navbar/BottomNav";
import TopNav from "../components/Navbar/TopNav";
import Details from "../components/ProductDetails/Details";
import Features from "../components/ProductDetails/Features";
import Price from "../components/ProductDetails/Price";
import ProdImages from "../components/ProductDetails/ProdImages";
const ProductDetails = () => {
  const [step, setStep] = useState(1);
  const changeStep = () => {
    if (step != 4) {
      setStep(step + 1);
    } else {
      setStep(1);
    }
  };
  const NavHead = styled.div`
    width: 80%;
    margin: 20px auto;
    display: flex;
    @media (max-width: 585px) {
    display:none;
    
            }
  `;
  const MainHeadProductDetails = styled.p`
    font-weight: 700;
    font-size: 40px;
    @media (max-width: 585px) {
      display:none;
      
              }
  `;
  const ProductDdetailsPageContainer = styled.div`
    width: 80%;
    margin: auto;
    margin-bottom: 300px;
    
  `;
  const ProductInfoContainer = styled.div`
    // width: 40rem;
    // height: 30rem;
    background: #f4f4f6;
    border-radius: 12px;
    margin: 30px 0;
    padding: 40px;
    @media (max-width: 585px) {
      background: #ffffff;
      padding: 20px;
    }
  `;
  const NextButton = styled.div`
    display: flex;
    border: 2px solid #b5bdc4;
    border-radius: 12px;
    width: 18rem;
    margin: 30px 0;
    justify-content: center;
    align-items: center;
    height: 50px;
    flex-wrap:wrap;
    padding: 5px 0;
    background: #f9c349;
    color: #ffffff;
    font-weight: 500;
    font-size: 18px;
    cursor: pointer;
    @media (max-width: 585px) {
    margin:auto;
    
      
           }
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
          {step == 1 ? (
            <Details />
          ) : step == 2 ? (
            <Features />
          ) : step == 3 ? (
            <Price />
          ) : step == 4 ? (
            <ProdImages />
          ) : (
            ""
          )}
        </ProductInfoContainer>
        <NextButton onClick={changeStep}>Next</NextButton>
      </ProductDdetailsPageContainer>
      <Footer />
    </>
  );
};

export default ProductDetails;
