import React from "react";
import TopNav from "../components/Navbar/TopNav";
import styled from "styled-components";

const LoginCart = () => {
  const BoxContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
  `;
  const Box = styled.div`
    text-align: center;
    border-sizing: border-box;
    margin: 0px;
    border: 1px solid #d7d9d9;
    border-radius: 6px;
    padding: 30px;
  `;
  const Title = styled.p`
    marginbottom: 0px;
    font-size: 30px;
    font-weight: 700;
  `;
  const InnerTitle = styled.p`
    margintop: 0px;
    font-size: 16px;
  `;
  const Span = styled.div`
    border-bottom: 1.5px solid #d1d4d9;
    margin: 20px 0;
    line-height: 0.1em;
  `;
  const Form = styled.form`
    display: flex;
    flex-direction: column;
  `;
  const Input = styled.input`
    background: #f9fafa;
    border-radius: 4px;
    border: 1px solid #b5bdc4;
    margin-bottom: 5px;
    height: 35px;
  `;
  const Label = styled.label`
    text-align: left;
    margin: 5px 0;
  `;
  const Check = styled.div`
    text-align: left;
    display: flex;
    align-items: center;
  `;
  const StrikeHead = styled.span`
    background: #fff;
    padding: 0 10px;
  `;
  const InputBtn = styled.div`

    background: #F9C349";
    border-radius: 6px;
    border: none;
    color: white;
    padding: 5px ;
    height: 35px;
    cursor: pointer;
  `;
  const FPass = styled.p`
    color: #f9c349;
    font-size: 14px;
  `;
  const CheckoutButton = styled.button`
    display: flex;
    border: 2px solid #b5bdc4;
    border-radius: 12px;
    width: 90%;
    margin: 30px auto;
    justify-content: center;
    align-items: center;
    height: 50px;
    padding: 5px 0;
    background: #f9c349;
    color: #ffffff;
    font-weight: 500;
    font-size: 18px;
    cursor: pointer;
  `;
  return (
    <>
      <TopNav />
      <BoxContainer>
        <Box>
          <Title>Welcom to Hellboy Protiens</Title>
          <InnerTitle>Content content content contentcontentcontent</InnerTitle>
          <Span>
            <StrikeHead>
              Have a password? Continue with your email address
            </StrikeHead>
          </Span>
          <Form>
            <Label>Email</Label>
            <Input type="email" />
            <Label>password</Label>
            <Input type="email" />
            <Check>
              <input type="checkbox" />{" "}
              <p
                style={{
                  margin: "0 10px",
                }}
              >
                {" "}
                Remember me
              </p>
            </Check>
            <InputBtn type="submit" />
            <FPass>I forgot my password</FPass>
            <CheckoutButton type="submit">Sign In</CheckoutButton>
          </Form>
        </Box>
      </BoxContainer>
    </>
  );
};

export default LoginCart;
