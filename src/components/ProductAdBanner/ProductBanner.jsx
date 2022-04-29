import React from "react";
import styled from "styled-components";
import LeanGainerProduct from "../../assets/images/leangainer.png";

function ProductBanner({ img, title, disc }) {
  const MainHeadContainer = styled.div`
    width: 100vw;
  `;
  const Container = styled.div`
    display: flex;
    width: 80%;
    margin: auto;
    height: 40vw;
    @media (max-width: 530px) {
      flex-direction: column;
    }
  `;
  const ProdBanner = styled.div`
    background-color: rgba(249, 195, 73, 0.1);
    padding: 40px;
    display: flex;
    justify-content: center;
    align-items: start;
    flex-direction: column;
    border-radius: 10px;
    font-size: 1.8vw;
    @media (max-width: 850px) {
      font-size: 1.5vw;
    }
  `;
  const PordBannerDisc = styled.ul`
    padding: 20px;
  `;
  const BannerTitle = styled.p`
    font-size: 3vw;
    font-weight: bolder;
    margin-bottom: 1vw;
    @media (max-width: 850px) {
      font-size: 2.5vw;
    }
  `;
  const BannerImage = styled.img`
    margin: 20px;
  `;
  return (
    <Container>
      <BannerImage src={img} alt="" />
      <ProdBanner>
        <BannerTitle>{title}</BannerTitle>
        <PordBannerDisc>
          <li>Helps in building lean muscles</li>
          <li>
            {" "}
            It is rich in protein supplement with a great taste that provides a
            rapid increase in strength
          </li>
        </PordBannerDisc>
      </ProdBanner>
    </Container>
  );
}

export default ProductBanner;
