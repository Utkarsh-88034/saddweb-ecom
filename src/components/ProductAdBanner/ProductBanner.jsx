import React from "react";
import styled from "styled-components";
import LeanGainerProduct from "../../assets/images/leangainer.png";

function ProductBanner({ img, title, disc }) {
  const MainHeadContainer = styled.div`
    width: 100vw;
  `;
  const ProdBanner = styled.div`
    background-color: rgba(249, 195, 73, 0.1);
    padding: 40px;
    display: flex;
    // justify-content: center;
    align-items: cneter;
    flex-direction: column;
    border-radius: 10px;
  `;
  const PordBannerDisc = styled.ul`
    padding: 20px;
  `;
  return (
    <div
      style={{
        display: " flex",
        width: "80%",
        margin: "auto",
        height: "60vh",
      }}
    >
      <img src={img} alt="" style={{ margin: "20px" }} />
      <ProdBanner>
        <p style={{ fontSize: "30px", fontWeight: "bolder" }}>{title}</p>
        <PordBannerDisc>
          <li>Helps in building lean muscles</li>
          <li>
            {" "}
            It is rich in protein supplement with a great taste that provides a
            rapid increase in strength
          </li>
        </PordBannerDisc>
      </ProdBanner>
    </div>
  );
}

export default ProductBanner;
