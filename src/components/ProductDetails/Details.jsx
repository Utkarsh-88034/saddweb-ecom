import React from "react";
import styled from "styled-components";

const Details = () => {
  const Heading = styled.p`
    font-weight: 500;
    font-size: 24px;
  `;
  const DetailsContainer = styled.div``;
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
  const DetailForm = styled.form`
    display: flex;
    flex-direction: column;
    width: 80%;
  `;
  return (
    <>
      <DetailsContainer>
        <Heading>Product Details</Heading>
        <DetailForm>
          <Label>Product Name</Label>
          <Input type={"text"} />
          <Label>Overview</Label>
          <Input type={"text"} />
          <Label> Benefits</Label>
          <Input type={"text"} />
          <Label>Ingredients</Label>
          <Input type={"text"} />
        </DetailForm>
      </DetailsContainer>
    </>
  );
};

export default Details;
