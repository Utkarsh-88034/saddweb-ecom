import React from "react";
import BottomNav from "../components/Navbar/BottomNav";
import TopNav from "../components/Navbar/TopNav";
import HeaderMain from "../assets/images/headermain.png";
import LeanGainerProduct from "../assets/images/leangainer.png";
import styled from "styled-components";
import ProductBanner from "../components/ProductAdBanner/ProductBanner";
import ProductCard from "../components/Product/ProductCard";
import MassGainer5KG from "../assets/images/Massgainer5kg.png";
import HomePageDiv from "../components/PageDivider/HomePageDiv";
import Footer from "../components/Footer/Footer";
import IngredientsBox from "../components/IngredientBox/IngredientBox";
import CustomerRview from "../components/CustomerReview/CustomerReview";
import { Link } from "react-router-dom";

const Home = () => {
  const MainHeadContainer = styled.div`
    width: 100%;
  `;
  const BestSellerContainer = styled.div`
    display: flex;
    width: 80%;
    margin: auto;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    // border: 1px solid black;
  `;
  const BestSellerProd = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    flex-wrap: wrap;
  `;
  const BestSellerHead = styled.p`
    font-weight: 700;
    font-size: 40px;
    margin: 50px 0;
  `;
  const PrimaryButton = styled.div`
    width: 180px;
    height: 64px;
    background: #f9c349;
    border-radius: 12px;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 8px 30px 0px rgba(249, 195, 73, 0.8);
    cursor: pointer;
  `;
  const IngredientsContainer = styled.div`
    display: flex;
    width: 80%;
    margin: auto;
    align-items: center;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `;
  const IngredientsHead = styled.p`
    font-weight: 700;
    font-size: 40px;
    margin: 50px 0;
  `;
  const Ingredientsboxs = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    flex-wrap: wrap;
    margin: auto;
  `;
  const HomeContainer = styled.div`
    width: 100vw;
  `;
  return (
    <HomeContainer>
      <TopNav />
      <BottomNav />
      <MainHeadContainer>
        <img
          src={HeaderMain}
          style={{ width: "100%", objectFit: "cover" }}
        ></img>
      </MainHeadContainer>
      <ProductBanner
        img={LeanGainerProduct}
        title="Best Quality Hell Boy Nutrition - Lean Gainer"
      />
      <BestSellerContainer>
        <BestSellerHead>BEST SELLER</BestSellerHead>
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
        </BestSellerProd>
        <Link to={"/products"}>
          <PrimaryButton>VIEW ALL</PrimaryButton>
        </Link>
      </BestSellerContainer>
      <HomePageDiv />
      <IngredientsContainer>
        <IngredientsHead>OUR MAIN INGREDIENTS</IngredientsHead>
        <Ingredientsboxs>
          <IngredientsBox
            detail={
              "Whey is one of the best forms of protein for your body that helps you build muscle and lose fat. Consuming supplement with whey is a convenient way to add protein on top of daily intake. All our supplements are enriched with whey that is effective for muscle growth"
            }
            type={"Whey"}
          />
          <IngredientsBox
            detail={
              "Milk Protein is great for the muscle mass and muscle strength of all ages practicing bodybuilding. All the supplements of Hell Boy Nutrition contain milk protein that helps you to reduce age-related muscle loss"
            }
            type={"Milk"}
          />
          <IngredientsBox
            detail={
              "Cocoa powder is widely used to boost mood. Besides, many bodybuilders use it for muscle building. Our manufacturing team is well aware of the surprising health benefits of cocoa powder. And that is why cocoa powder is used in all ranges of gym and bodybuilding supplements"
            }
            type={"Cocoa powder"}
          />
        </Ingredientsboxs>
      </IngredientsContainer>
      <CustomerRview />
      <Footer />
    </HomeContainer>
  );
};

export default Home;
