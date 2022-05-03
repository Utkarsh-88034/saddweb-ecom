import React from "react";
import styled from "styled-components";
import Addbtn from "../../assets/images/AddButton.png";

const Features = () => {
  const Heading = styled.p`
    font-weight: 500;
    font-size: 24px;
  `;
  const FeaturesContainer = styled.div``;
  const Label = styled.label`
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    color: #4f4f4f;
    opacity: 0.8;
    margin: 5px 0;
  `;
  const Input = styled.input`
    background: #f9fafa;
    border-radius: 4px;
    border: 1px solid #b5bdc4;
    margin-bottom: 5px;
    height: 35px;
    outline: none;
    padding: 5px;
  `;
  const FeatureForm = styled.form`
    display: flex;
    flex-direction: column;
    width: 80%;
  `;
  const AddButton = styled.div`
    background: #f9fafa;
    border-radius: 4px;
    border: 1px solid #b5bdc4;
    margin-bottom: 5px;
    height: 35px;
    outline: none;
    width: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
  `;
  const AddVector = styled.img``;
  return (
    <>
      <FeaturesContainer>
        <Heading>Features</Heading>
        <FeatureForm>
          <Label> Feature 1</Label>
          <Input type={"text"} placeholder={"click to enter"} />
          <AddButton>
            <AddVector src={Addbtn} />
          </AddButton>
          <Label>Product Features</Label>
          <Input type={"text"} placeholder={"use “,” after every feature"} />
        </FeatureForm>
      </FeaturesContainer>
    </>
  );
};

export default Features;
