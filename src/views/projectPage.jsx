import React, { useState } from "react";
import styled from "styled-components";
import BottomNav from "../components/Navbar/BottomNav";
import TopNav from "../components/Navbar/TopNav";
import ProductImg from "../assets/images/Massgainer5kg.png";
import rightarr from "../assets/images/right-arrow.png";
import leftarr from "../assets/images/left-arrow.png";
import arrowup from "../assets/images/arrowup.png";
import arrowdown from "../assets/images/arrowdown.png";
import ReactStars from "react-rating-stars-component";
import { Divider } from "antd";
import Footer from "../components/Footer/Footer";
import ReviewCard from "../components/CustomerReview/ReviewCard";
import { Progress } from "antd";
import ProductCard from "../components/Product/ProductCard";
import MassGainer5KG from "../assets/images/Massgainer5kg.png";

const ProductPage = () => {
  const [overviewFlag, setOverviewFlag] = useState(false);
  const [benefitsFlag, setBenefitsFlag] = useState(false);
  const [ingredientFlag, setIngredientFlag] = useState(false);
  const MainContainer = styled.div`
    height: max-content;
  `;
  const Container = styled.div`
    width: 80%;
    margin: 20px auto;
    display: flex;
    height: max-content;
    @media (max-width: 810px) {
      flex-wrap: wrap;
    }
  `;
  const ProductContainerLeft = styled.div`
    margin: none;
    padding: 2vw;
    display: flex;
    justify-content: flex-start;
    align-item: center;
    border-radius: 12px;
    flex-direction: column;
  `;
  const ProductImageContainer = styled.div`
    background: #fef9ed;
    width: 30vw;
    padding: 1vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 12px;
    margin-bottom: 20px;
    min-height: 300px;
    min-width: 300px;
  `;
  const Overview = styled.div`
    background: #fef9ed;
    width: 30vw;
    padding: 1vw;
    display: flex;
    justify-content: space-between;
    align-item: center;
    border-radius: 12px;
    flex-direction: column;
    margin-bottom: 20px;
    min-width: 300px;
  `;
  const ProductImage = styled.img`
    background: none;
    height: 100%;
    width: 100%;
    // object-fit: cover;
  `;
  const Arrow = styled.img`
    height: 33px;
    width: 33px;
    cursor: pointer;
  `;
  const Imageslide = styled.div`
    display: flex;
    overflow: hidden;
  `;
  const ArrowUp = styled.img`
    cursor: pointer;
  `;
  const ArrowDown = styled.img`
    cursor: pointer;
  `;

  const OverviewTitleContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
  `;
  const OverviewTitle = styled.p`
    margin: 0;
    font-weight: 500;
    font-size: 18px;
  `;
  const ProductContainerRight = styled.div`
    // background: #fef9ed;
    // width: 30vw;
    padding: 2vw;
    display: flex;
    // justify-content: space-between;
    // align-item: center;
    border-radius: 12px;
    flex-direction: column;
    // height: 400px;
    min-width: 300px;
  `;
  const DetailTitle = styled.p`
    font-weight: 700;
    font-size: 3vw;
    @media (max-width: 650px) {
      font-size: 20px;
    }
  `;
  const Price = styled.div`
    display: flex;
    font-size: 24px;
    align-items: center;
  `;
  const SavePrice = styled.p`
    font-weight: 500;
    font-size: 16px;
    color: #007d1e;
    margin-left: 3vw;
  `;
  const DiscountPrice = styled.p`
    font-size: 24px;
  `;
  const StrikedPrice = styled.p`
    color: #b5bdc4;
    text-decoration: line-through;
    font-size: 24px;
    margin-right: 1vw;
  `;
  const FeatureButton = styled.div`
    background: #f9c349;
    width: 10vw;
    height: 3vw;
    border-radius: 41px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 500;
    font-size: 1.5vw;
    margin-right: 10px;
    min-width: 80px;
    min-height: 25px;
  `;
  const FeatureContainer = styled.div`
    display: flex;
  `;
  const RatingContainer = styled.div`
    display: flex;
    align-items: center;
  `;
  const Reviews = styled.p`
    color: #f9c349;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    margin: 0;
    margin-left: 10px;
  `;
  const MoreFeatures = styled.div`
    min-width: 300px;
  `;
  const FeatureLI = styled.p`
    margin: 0;
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
  const QuantityContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  `;
  const QuantityText = styled.p`
    font-weight: 500;
    font-size: 18px;
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
  const AddToBasketButton = styled.div`
    background: #f9c349;
    border-radius: 12px;
    width: 14vw;
    min-width: 150px;
    padding: 10px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 500;
    font-size: 1.5vw;
    color: #ffffff;
    @media (max-width: 810px) {
      font-size: 16px;
    }
  `;
  const BottomContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `;
  const ReviewContainer = styled.div`
    width: 80%;
    max-width: 1400px;
    margin: 20px auto;
  `;
  const ReviewTitle = styled.p`
    font-weight: 700;
    font-size: 3vw;
  `;
  const MainReviewBox = styled.div`
    display: flex;
    justify-content: space-between;
  `;
  const ReviewBarContainer = styled.div`
    width: 25vw;
    // border: 1px solid black;
    display: flex;
    flex-direction: column;
  `;
  const ReviewCardConatiner = styled.div`
    width: 50vw;
    // border: 1px solid black;
  `;
  const ReviewStarContainer = styled.div`
    width: 80%;
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #fef9ed;
    margin: 0 auto;
    border-radius: 45px;
  `;
  const StarCount = styled.p`
    margin: 0 10px;
    font-weight: 500;
    font-size: 16px;
  `;
  const CustomerCount = styled.p`
    margin: 10px auto;
    font-weight: 500;
    font-size: 16px;
    color: #b5bdc4;
  `;
  const ReviewBar = styled.div`
    width: 90%;
    margin: 10px auto;
  `;
  const StarProgress = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
  `;
  const Star = styled.p`
    margin-bottom: 0;
    width: 60px;
    font-weight: 500;
    font-size: 12px;
  `;
  const SeeAllButton = styled.p`
    font-weight: 500;
    font-size: 16px;
  `;
  const OtherCustomerBroughtTitle = styled.p`
    font-weight: 700;
    font-size: 40px;
    text-align: center;
  `;
  const OtherProductContainer = styled.div`
    width: 80%;
    max-width: 1400px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    // align-items: center;
  `;
  const ProductContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
  `;
  return (
    <>
      <TopNav />
      <BottomNav />
      <MainContainer>
        <Container>
          <ProductContainerLeft>
            <ProductImageContainer>
              <Arrow src={leftarr} />
              <Imageslide>
                <ProductImage src={ProductImg} />
                <ProductImage src={ProductImg} />
                <ProductImage src={ProductImg} />
                <ProductImage src={ProductImg} />
              </Imageslide>
              <Arrow src={rightarr} />
            </ProductImageContainer>
            <Overview>
              <OverviewTitleContainer>
                <OverviewTitle>Overview</OverviewTitle>
                <ArrowUp
                  src={overviewFlag ? arrowup : arrowdown}
                  onClick={() => {
                    setOverviewFlag(!overviewFlag);
                  }}
                />
              </OverviewTitleContainer>
              {overviewFlag ? (
                <p>
                  Hell Boy Nutrition Peanut butter is comprised of about 30g
                  protein per 100g, making it an excellent plant-based protein
                  source. Peanuts belong to the legume family, which also
                  includes beans, peas and lentils. Legume protein is much lower
                  in methionine and cysteine compared to animal protein. Peanuts
                  are low in carbs and suitable for people with type 2 diabetes
                  or those following a low-carb diet. Pure peanut butter is a
                  good source of healthy fats. It is high in many healthy
                  vitamins and minerals. It is rich in antioxidants, including
                  p-coumarin and resveratrol. BCS Peanut Butter is fairly rich
                  in nutrients and a decent protein source. It’s also loaded
                  with fiber, vitamins and minerals; it’s a potential source of
                  aflatoxins, which are associated with harmful effects in the
                  long run.
                </p>
              ) : (
                ""
              )}
            </Overview>
            <Overview>
              <OverviewTitleContainer>
                <OverviewTitle>Benefits</OverviewTitle>
                <ArrowUp
                  src={benefitsFlag ? arrowup : arrowdown}
                  onClick={() => {
                    setBenefitsFlag(!benefitsFlag);
                  }}
                />
              </OverviewTitleContainer>
              {benefitsFlag ? (
                <p>
                  Hell Boy Nutrition Peanut butter is comprised of about 30g
                  protein per 100g, making it an excellent plant-based protein
                  source. Peanuts belong to the legume family, which also
                  includes beans, peas and lentils. Legume protein is much lower
                  in methionine and cysteine compared to animal protein. Peanuts
                  are low in carbs and suitable for people with type 2 diabetes
                  or those following a low-carb diet. Pure peanut butter is a
                  good source of healthy fats. It is high in many healthy
                  vitamins and minerals. It is rich in antioxidants, including
                  p-coumarin and resveratrol. BCS Peanut Butter is fairly rich
                  in nutrients and a decent protein source. It’s also loaded
                  with fiber, vitamins and minerals; it’s a potential source of
                  aflatoxins, which are associated with harmful effects in the
                  long run.
                </p>
              ) : (
                ""
              )}
            </Overview>
            <Overview>
              <OverviewTitleContainer>
                <OverviewTitle>Ingredients</OverviewTitle>
                <ArrowUp
                  src={ingredientFlag ? arrowup : arrowdown}
                  onClick={() => {
                    setIngredientFlag(!ingredientFlag);
                  }}
                />
              </OverviewTitleContainer>
              {ingredientFlag ? (
                <p>
                  Hell Boy Nutrition Peanut butter is comprised of about 30g
                  protein per 100g, making it an excellent plant-based protein
                  source. Peanuts belong to the legume family, which also
                  includes beans, peas and lentils. Legume protein is much lower
                  in methionine and cysteine compared to animal protein. Peanuts
                  are low in carbs and suitable for people with type 2 diabetes
                  or those following a low-carb diet. Pure peanut butter is a
                  good source of healthy fats. It is high in many healthy
                  vitamins and minerals. It is rich in antioxidants, including
                  p-coumarin and resveratrol. BCS Peanut Butter is fairly rich
                  in nutrients and a decent protein source. It’s also loaded
                  with fiber, vitamins and minerals; it’s a potential source of
                  aflatoxins, which are associated with harmful effects in the
                  long run.
                </p>
              ) : (
                ""
              )}
            </Overview>
          </ProductContainerLeft>
          <ProductContainerRight>
            <DetailTitle>
              Hell Boy Natural Peanut Butter Crunchy ( 2KG )
            </DetailTitle>
            <Price>
              <StrikedPrice>Rs.399</StrikedPrice>
              <DiscountPrice>Rs. 399</DiscountPrice>
              <SavePrice>Save Rs. 399</SavePrice>
            </Price>
            <FeatureContainer>
              <FeatureButton>Feature 1</FeatureButton>
              <FeatureButton>Feature 2</FeatureButton>
            </FeatureContainer>
            <RatingContainer>
              <ReactStars
                count={5}
                // onChange={ratingChanged}

                size={32}
                value={3}
                activeColor="#ffd700"
                style={{
                  display: "flex",
                  alignitem: "center",
                }}
              />
              <Reviews>45 Reviews</Reviews>
            </RatingContainer>
            <Divider />
            <MoreFeatures>
              <FeatureLI>Excellent plant-based protein source.</FeatureLI>{" "}
              <FeatureLI>High protein</FeatureLI>
              <FeatureLI>Low in carbs</FeatureLI>
              <FeatureLI>Suitable for people with type 2 diabetes</FeatureLI>
              <FeatureLI>
                Suitable for people who follow a low-carb diet
              </FeatureLI>
              <FeatureLI>Good source of healthy fats</FeatureLI>
              <FeatureLI> High in healthy vitamins and minerals</FeatureLI>
              <FeatureLI>Rich in antioxidants</FeatureLI>
              <FeatureLI>Rich in nutrients</FeatureLI>
              <FeatureLI> A decent protein source</FeatureLI>
              <FeatureLI>Rich in fibre</FeatureLI>
              <FeatureLI>Potential source of aflatoxins</FeatureLI>
            </MoreFeatures>
            <Divider />
            <BottomContainer>
              <QuantityContainer>
                <QuantityText>Quantity</QuantityText>
                <Quantity>
                  <AddItem>+</AddItem>
                  <QValue>3</QValue>
                  <RemoveItem>-</RemoveItem>
                </Quantity>
              </QuantityContainer>
              <AddToBasketButton>Add to Basket</AddToBasketButton>
            </BottomContainer>
          </ProductContainerRight>
        </Container>
        <Divider />
        <ReviewContainer>
          <ReviewTitle>Customer Review</ReviewTitle>
          <MainReviewBox>
            <ReviewBarContainer>
              <ReviewStarContainer>
                <ReactStars size={20} />
                <StarCount>4.7 Starts out of 5</StarCount>
              </ReviewStarContainer>
              <CustomerCount>40 Customer reviews</CustomerCount>
              <ReviewBar>
                <StarProgress>
                  <Star>5 Star</Star>
                  <Progress
                    percent={70}
                    strokeColor={"#FFB100"}
                    style={{ width: "50%" }}
                    showInfo={false}
                  />
                </StarProgress>
                <StarProgress>
                  <Star>4 Star</Star>
                  <Progress
                    percent={90}
                    strokeColor={"#FFB100"}
                    showInfo={false}
                    style={{ width: "50%" }}
                  />
                </StarProgress>
                <StarProgress>
                  <Star>3 Star</Star>
                  <Progress
                    percent={50}
                    strokeColor={"#FFB100"}
                    showInfo={false}
                    style={{ width: "50%" }}
                  />
                </StarProgress>
                <StarProgress>
                  <Star>2 Star</Star>
                  <Progress
                    percent={20}
                    strokeColor={"#FFB100"}
                    showInfo={false}
                    style={{ width: "50%" }}
                  />
                </StarProgress>
                <StarProgress>
                  <Star>1 Star</Star>
                  <Progress
                    percent={10}
                    strokeColor={"#FFB100"}
                    showInfo={false}
                    style={{ width: "50%" }}
                  />
                </StarProgress>
              </ReviewBar>
            </ReviewBarContainer>

            <ReviewCardConatiner>
              <ReviewCard />
              <ReviewCard />
              <ReviewCard />
              <Divider />
              <SeeAllButton>See all reviews </SeeAllButton>
            </ReviewCardConatiner>
          </MainReviewBox>
        </ReviewContainer>
        <OtherProductContainer>
          <OtherCustomerBroughtTitle>
            Other Customers bought
          </OtherCustomerBroughtTitle>
          <ProductContainer>
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
          </ProductContainer>
        </OtherProductContainer>
      </MainContainer>
      <Footer />
    </>
  );
};

export default ProductPage;
