import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const Details = ({ getDetails, details, name }) => {
  const nameRef = useRef();
  const detailsRef = useRef();
  const [inputname, setInputName] = useState("");
  const [inputdetails, setInputDetails] = useState("");

  useEffect(() => {
    if (details) {
      setInputDetails(details);
    }
    if (name) {
      setInputName(name);
    }
  }, []);
  getDetails(nameRef.current?.value, detailsRef.current?.value);
  getDetails(nameRef.current?.value, detailsRef.current?.value);

  const Heading = styled.p`
    font-weight: 500;
    font-size: 24px;
    margin: 1px;
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
    @media (max-width: 585px) {
      background: #ffffff;
    }
  `;
  const DetailForm = styled.form`
    display: flex;
    flex-direction: column;
    width: 80%;
    @media (max-width: 585px) {
      margin: auto;
    }
  `;
  return (
    <>
      <DetailsContainer>
        <DetailForm>
          <Heading>Product Details</Heading>
          <Label>Product Name</Label>
          <Input
            type={"text"}
            ref={nameRef}
            value={inputname}
            onChange={(e) => {
              setInputName(e.target.value);
            }}
          />
          <Label>Overview</Label>
          <Input
            type={"text"}
            ref={detailsRef}
            onChange={(e) => {}}
            value={inputdetails}
          />
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
