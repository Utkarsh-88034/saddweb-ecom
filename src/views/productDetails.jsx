import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Footer from "../components/Footer/Footer";
import BottomNav from "../components/Navbar/BottomNav";
import TopNav from "../components/Navbar/TopNav";
import Details from "../components/ProductDetails/Details";
import Features from "../components/ProductDetails/Features";
import Price from "../components/ProductDetails/Price";
import ProdImages from "../components/ProductDetails/ProdImages";
import useStore from "../store";
import { useParams } from "react-router-dom";
const ProductDetails = () => {
  const [step, setStep] = useState(1);
  const addProduct = useStore((state) => state.addProduct);
  const updateProduct = useStore((state) => state.updateProduct);
  const nameRef = useRef();
  const detailRef = useRef();
  const priceRef = useRef();
  const param = useParams();
  const getProductById = useStore((state) => state.getProductById);
  const [product, setProduct] = useState(null);
  console.log(product);
  useEffect(() => {
    if (param.id) {
      const get = async () => {
        const pr = await getProductById(param.id);
        setProduct(pr);
      };
      get();
    }
  }, []);
  if (product) {
    nameRef.current = product.name;
    detailRef.current = product.details;
    priceRef.current = product.price;
  }

  const changeStep = () => {
    if (step != 4) {
      setStep(step + 1);
    } else if (step == 4 && !product) {
      const config = {
        name: nameRef.current,
        price: priceRef.current,
        weight: 2,
        details: detailRef.current,
        main_url: "http",
      };
      addProduct(config);
      setStep(1);
    } else if (step == 4 && product) {
      const config = {
        name: nameRef.current,
        price: priceRef.current,
        weight: 2,
        details: detailRef.current,
        main_url: "http",
      };
      updateProduct(config);
      setStep(1);
    }
  };
  const NavHead = styled.div`
    width: 80%;
    margin: 20px auto;
    display: flex;
    @media (max-width: 585px) {
      display: none;
    }
  `;
  const MainHeadProductDetails = styled.p`
    font-weight: 700;
    font-size: 40px;
    @media (max-width: 585px) {
      display: none;
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
    flex-wrap: wrap;
    padding: 5px 0;
    background: #f9c349;
    color: #ffffff;
    font-weight: 500;
    font-size: 18px;
    cursor: pointer;
    @media (max-width: 585px) {
      margin: auto;
    }
  `;
  const getDetails = (name, detail) => {
    nameRef.current = name;
    detailRef.current = detail;
  };
  const getPrice = (price) => {
    priceRef.current = price;
  };
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
            <Details
              getDetails={getDetails}
              details={detailRef.current}
              name={nameRef.current}
            />
          ) : step == 2 ? (
            <Features />
          ) : step == 3 ? (
            <Price getPrice={getPrice} price={priceRef.current} />
          ) : step == 4 ? (
            <ProdImages />
          ) : (
            ""
          )}
        </ProductInfoContainer>
        <NextButton onClick={changeStep}>
          {step == 4 && !product
            ? "Add Product"
            : step == 4 && product
            ? "Update Product"
            : "Next"}
        </NextButton>
      </ProductDdetailsPageContainer>
      <Footer />
    </>
  );
};

export default ProductDetails;
