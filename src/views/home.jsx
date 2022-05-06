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
import PrimaryButton from "../components/Atoms/Primary Button/PrimaryButton";
import categorybanner from "../assets/images/categorybanner.png";
import category1 from "../assets/images/category1.png";
import category2 from "../assets/images/category2.png";
import category3 from "../assets/images/category3.png";
import CommentDivider from "../components/PageDivider/CommentDivider";

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

  const IngredientsContainer = styled.div`
    display: flex;
    width: 80%;
    margin: auto;
    align-items: center;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-bottom: 4rem;
  `;
  const IngredientsHead = styled.p`
    font-weight: 700;
    font-size: 40px;
    margin: 50px 0;
  `;
  const Ingredientsboxs = styled.div`
    display: flex;
    justify-content: space-evenly;
    width: 100%;

    flex-wrap: wrap;
    margin: auto;
  `;
  const HomeContainer = styled.div`
    width: 100vw;
  `;
  const CategoryContainer = styled.div`
    width: 80%;
    margin: 40px auto;
  `;
  const CategoryHeadding = styled.div`
    font-weight: 700;
    font-size: 40px;
    background: url(${categorybanner});
    background-repeat: no-repeat;
    background-position: center;
    display: flex;
    justify-content: center;
    align-items: center;
  `;
  const CategoryBoxContainer = styled.div`
    width: 100%;
    display: flex;
    height: 500px;
    // border: 1px solid black;
    margin-top: 30px;
    justify-content: space-between;
    // align-items: center;
  `;
  const Category1 = styled.div`
    height: 60%;
    margin: 10px;
    background-image: url(${category2});
    background-repeat: no-repeat;
    border-radius: 6px;
    background-position: center;
    font-weight: 700;
    font-size: 40px;
    color: #ffffff;
    display: flex;
    padding: 10px;
    align-items: end;
  `;
  const Category2 = styled.div`
    height: 30%;

    margin: 10px;
    background: url(${category1});
    background-repeat: no-repeat;
    border-radius: 6px;
    background-position: center;
    font-weight: 700;
    font-size: 40px;
    color: #ffffff;
    display: flex;
    align-items: end;
    padding: 10px;

  `;
  const Category3 = styled.div`
    width: 60%;
    height: 94%;

    margin: 10px;
    background: url(${category3}) ;
    background-repeat: no-repeat;
    background-position: center;
    border-radius: 6px;
    font-weight: 700;
    font-size: 40px;
    color: #ffffff;
    display: flex;
    padding: 10px;
    align-items: end;
    // background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%);
  `;
  const CategoryBoxLeft = styled.div`
    display: flex;
    width: 40%;
    flex-direction: column;
   
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
      <CategoryContainer>
        <CategoryHeadding>Shop By Category</CategoryHeadding>
        <CategoryBoxContainer>
          <CategoryBoxLeft>
            <Category1>Category1</Category1>
            <Category2>Category2</Category2>
          </CategoryBoxLeft>
          <Category3>Category3</Category3>
        </CategoryBoxContainer>
      </CategoryContainer>
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
          <PrimaryButton btnText={"View All"} />
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
      <CommentDivider />
      <MainHeadContainer>
        <img
          src={HeaderMain}
          style={{ width: "100%", objectFit: "cover" }}
        ></img>
      </MainHeadContainer>
      <CustomerRview />
      <Footer />
    </HomeContainer>
  );
};

export default Home;
