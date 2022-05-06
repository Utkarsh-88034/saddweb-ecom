import React from "react";
import styled from "styled-components";
import logo from "../../assets/images/helboylogo1.png";
import fblogo from "../../assets/images/fblogo.png";
import instalogo from "../../assets/images/instalogo.png";
import ytlogo from "../../assets/images/ytlogo.png";
import twitlogo from "../../assets/images/twitlogo.png";
import location from "../../assets/images/loclogo.png";
import phone from "../../assets/images/Phone.png";
import email from "../../assets/images/Email.png";
import payment from "../../assets/images/payment.png";

const Footer = () => {
  const FooterContainer = styled.div`
    width: 100%;
    padding:2rem;
    margin: auto;
    margin-top: 200px;
    background: #1e1810;
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    // justify-content: center;
    align-items: center;
    padding: 40px 0;
    position: relative;
  `;
  const FooterLogo = styled.img`
    margin-right: 100px;
    @media (max-width: 700px) {
      margin-right: 0;
    }
  `;
  const SocialContainer = styled.div`
    padding: 10px 10px;
    width: 300px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin: 20px 0;
  `;
  const SocialLogo = styled.img``;
  const ContactContainer = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap:wrap;
    // align-items: center;
    margin: 20px 0;
    width: 100%;
    @media (max-width: 700px) {
      justify-content: start;
    }
  `;
  const ContactDetails = styled.p`
    font-weight: 400;
    font-size: 18px;
    color: white;
    margin: 10px 10px;
  `;
  const BottomFooter = styled.div`
    height: 40px;
    background: #f2f2f2;
    width: 100%;
    position: absolute;
    bottom: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 30px;
  `;
  const BottomContent = styled.p`
    font-weight: 400;
    font-size: 14px;
    padding: 0;
    margin: 0;
  `;
  const PaymentContainer = styled.div`
    display: flex;
    align-items: center;
  `;
  const ItemContainer = styled.div`
    min-width: 200px;
    margin: 50px 0;

  `;
  const ItemHead = styled.p`
    font-weight: 700;
    font-size: 20px;
    color: #ffffff;
  `;
  const FooterTop = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 90%;
    max-width: 1500px;
    @media (max-width: 700px) {
      flex-direction: column;
      justify-content: center;
    }
  `;
  return (
    <FooterContainer>
      <FooterTop>
        <FooterLogo src={logo} />
        <ContactContainer>
          {/* <SocialLogo src={location} /> */}
          <ItemContainer>
            <ItemHead>Feauted Products</ItemHead>
            <ContactDetails>Product 1</ContactDetails>
            <ContactDetails>Product 2</ContactDetails>
            <ContactDetails>Product 3</ContactDetails>
            <ContactDetails>Product 4</ContactDetails>
          </ItemContainer>
          <ItemContainer>
            <ItemHead>Useful links</ItemHead>
            <ContactDetails>Privacy Policy</ContactDetails>
            <ContactDetails>Terms and Conditions</ContactDetails>
            <ContactDetails>Pay Now</ContactDetails>
           
          </ItemContainer>
          <ItemContainer>
            <ItemHead>Navigate</ItemHead>
            <ContactDetails>Home</ContactDetails>
            <ContactDetails>Shop</ContactDetails>
            <ContactDetails>Account</ContactDetails>
            <ContactDetails>Authenticity</ContactDetails>
          </ItemContainer>
          <ItemContainer>
            <ItemHead>Visit</ItemHead>
            <ContactDetails>DA4/A Main Vikas Marg, Shakarpur,</ContactDetails>
            <ContactDetails>Opp Nathu Sweets</ContactDetails>
            <ContactDetails>New Delhi, 110092</ContactDetails>
            <ContactDetails>+91 9999999999</ContactDetails>
          </ItemContainer>
        </ContactContainer>
      </FooterTop>
      <SocialContainer>
        <SocialLogo src={fblogo} />
        <SocialLogo src={instalogo} />
        <SocialLogo src={ytlogo} />
        <SocialLogo src={twitlogo} />
      </SocialContainer>
      <BottomFooter>
        <BottomContent>Copyright © 2022 | Hell Boy Nutrition</BottomContent>
        <PaymentContainer>
          <BottomContent>Pay Securely with </BottomContent>
          <img src={payment} style={{ marginLeft: "20px" }} />
        </PaymentContainer>
      </BottomFooter>
    </FooterContainer>
  );
};

export default Footer;
