import React from "react";
import BottomNav from "../components/Navbar/BottomNav";
import TopNav from "../components/Navbar/TopNav";
import styled from "styled-components";
import ProductCard from "../components/Product/ProductCard";
import MassGainer5KG from "../assets/images/Massgainer5kg.png";
import Footer from "../components/Footer/Footer";
import PrimaryButton from "../components/Atoms/Primary Button/PrimaryButton";

const AllProducts = () => {
  const ProductContainer = styled.div`
    width: 80%;

    // border: 1px solid black;
    margin: 20px auto;
    margin-bottom: 200px;
  `;
  const ProductContainerHead = styled.div`
    width: 100%;
    height: 100px;
    // margin-bottom: 20px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    // border: 1px solid black;
  `;
  const CurrentUrlContainer = styled.div`
    display: flex;
  `;
  const ProductHeadLeft = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-between;
  `;
  const FilterBox = styled.div`
    border: 1px solid #b5bdc4;
    border-radius: 51px;
    height: 40px;
    width: 30%;
    display: flex;
    justify-content: felx-start;
    align-items: center;
    padding: 20px;
  `;
  const BestSellerProd = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    flex-wrap: wrap;
  `;
  return (
    <>
      <TopNav />
      <BottomNav />
      <ProductContainer>
        <ProductContainerHead>
          <ProductHeadLeft>
            <CurrentUrlContainer>
              <p
                style={{
                  fontWeight: "400",
                  fontSize: "14px",
                  color: "#818181",
                }}
              >
                Home
              </p>
              <p style={{ fontWeight: "500" }}>/All Products</p>
            </CurrentUrlContainer>
            <p style={{ fontWeight: "500" }}>Showing all results</p>
          </ProductHeadLeft>
          <FilterBox>Showing All Results</FilterBox>
        </ProductContainerHead>
        <BestSellerProd>
          <ProductCard
            price={"6,999.00"}
            originalPrice={"6,999.00"}
            type={"GAINER"}
            title={"Mass Gainer(5KG)"}
            productImage={MassGainer5KG}
          />
          <ProductCard
            price={"6,999.00"}
            originalPrice={"6,999.00"}
            type={"GAINER"}
            title={"Mass Gainer(5KG)"}
            productImage={MassGainer5KG}
          />
          <ProductCard
            price={"6,999.00"}
            originalPrice={"6,999.00"}
            type={"GAINER"}
            title={"Mass Gainer(5KG)"}
            productImage={MassGainer5KG}
          />
          <ProductCard
            price={"6,999.00"}
            originalPrice={"6,999.00"}
            type={"GAINER"}
            title={"Mass Gainer(5KG)"}
            productImage={MassGainer5KG}
          />
          <ProductCard
            price={"6,999.00"}
            originalPrice={"6,999.00"}
            type={"GAINER"}
            title={"Mass Gainer(5KG)"}
            productImage={MassGainer5KG}
          />
          <ProductCard
            price={"6,999.00"}
            originalPrice={"6,999.00"}
            type={"GAINER"}
            title={"Mass Gainer(5KG)"}
            productImage={MassGainer5KG}
          />
          <ProductCard
            price={"6,999.00"}
            originalPrice={"6,999.00"}
            type={"GAINER"}
            title={"Mass Gainer(5KG)"}
            productImage={MassGainer5KG}
          />
          <ProductCard
            price={"6,999.00"}
            originalPrice={"6,999.00"}
            type={"GAINER"}
            title={"Mass Gainer(5KG)"}
            productImage={MassGainer5KG}
          />
        </BestSellerProd>
      </ProductContainer>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        width: '100vw',
        margin: '2rem 1rem'
      }}>
      <PrimaryButton btnText={"Load More"} />
      </div>
      <Footer />
    </>
  );
};

export default AllProducts;
