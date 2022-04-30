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
    height: 400px;
    margin: auto;
    background: #1e1810;
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    // justify-content: center;
    align-items: center;
    padding: 40px 0;
    position: relative;
  `;
  const FooterLogo = styled.img``;
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
    align-items: center;
    margin: 20px 0;
    width: 70%;
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
  return (
    <FooterContainer>
      <FooterLogo src={logo} />
      <SocialContainer>
        <SocialLogo src={fblogo} />
        <SocialLogo src={instalogo} />

        <SocialLogo src={ytlogo} />
        <SocialLogo src={twitlogo} />
      </SocialContainer>
      <ContactContainer>
        <SocialLogo src={location} />
        <ContactDetails>New Delhi, India</ContactDetails>
        <SocialLogo src={phone} />
        <ContactDetails>+91 9311337205</ContactDetails>
        <SocialLogo src={email} />
        <ContactDetails>info.xyz@mail.com</ContactDetails>
      </ContactContainer>
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
