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
  return (
    <>
      <TopNav />
      <BoxContainer>
        <Box>
          <p
            style={{ marginBottom: "0px", fontSize: "30px", fontWeight: "700" }}
          >
            Welcom to Hellboy Protiens
          </p>
          <p style={{ marginTop: "0px", fontSize: "16px" }}>
            Content content content contentcontentcontent
          </p>
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
            <input
              type="submit"
              style={{
                background: "#F9C349",
                borderRadius: "6px",
                border: "none",
                color: "white",
                padding: "5px ",
                height: "35px",
                cursor: "pointer",
              }}
            />
            <span
              style={{
                color: "#F9C349",
                fontSize: "14px",
              }}
            >
              I forgot my password
            </span>
          </Form>
        </Box>
      </BoxContainer>
    </>
  );
};

export default LoginCart;
