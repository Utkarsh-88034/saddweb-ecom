import React from "react";
import styled from "styled-components";
import Addbtn from "../../assets/images/AddButton.png";

const Features = ({setStep, getFeaturedProductDetails, flavourNameRef, flavourDescriptionRef, flavourIngridientsRef, flavourPriceRef, flavourDiscountedPriceRef, authCodeRef, featuredProductImagesRef }) => {
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
        <p onClick={()=>{setStep(1)}}> {'<- Back'}</p>
        <Heading>Features</Heading>
        <FeatureForm>
          
          <Label>Flavour Name</Label>
          <Input type={"text"} ref={flavourNameRef}  placeholder={"Name of the flavour"}  />

          <Label>Flavour Description</Label>
          <Input type={"textarea"} ref={flavourDescriptionRef} placeholder={"Write a detailed description of the featured product..."} />

          <Label>Flavour Ingredients</Label>
          <Input type={"text"} ref={flavourIngridientsRef} placeholder={"Write all the ingredients of the featured product..."} />

          <Label>Flavour Price</Label>
          <Input type={"number"} ref={flavourPriceRef} placeholder={"Set the Price of the Product"} />
          
          <Label>Discounted Price</Label>
          <Input type={"number"} ref={flavourDiscountedPriceRef} placeholder={"Set the Discounted Price of the Product"} />

          <Label>Authenticity Code</Label>
          <Input type={"text"} ref={authCodeRef} placeholder={"Enter the Authenticity Code for this Product"} />

          <Label>Upload All Photos</Label>
          <Input type={"file"} ref={featuredProductImagesRef} multiple={"multiple"} placeholder={"Upload all the featured product photos together"} />

        </FeatureForm>
        <AddButton onClick={()=>{
            // logic to make more featured product fields or add more featured product fields
        }}>
          <AddVector src={Addbtn} />
        </AddButton>
      </FeaturesContainer>
    </>
  );
};

export default Features;
