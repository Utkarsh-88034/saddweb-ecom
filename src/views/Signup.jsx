import React from "react";
import TopNav from "../components/Navbar/TopNav";
import styled from "styled-components";
const Signup = () => {
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
  const Name = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    flex-wrap: wrap;
  `;
  const Namein = styled.div`
    display: flex;
    flex-direction: column;
  `;
  const Formin = styled.div`
    display: flex;
    flex-direction: column;
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
            Welcome to Hellboy Protiens
          </p>
          <p style={{ marginTop: "0px", fontSize: "16px" }}>
            Content content content contentcontentcontent
          </p>
          <Span>
            <StrikeHead>Create Your Account</StrikeHead>
          </Span>
          <Form>
            <Name>
              <Namein>
                <Label>First Name</Label>
                <Input type="text" />
              </Namein>
              <Namein>
                <Label>Last Name</Label>
                <Input type="text" />
              </Namein>
            </Name>

            <Label>Email</Label>
            <Input type="email" />
            <Label>Password</Label>
            <Input type="password" />
            <Label>Confirm Password</Label>
            <Input type="password" />

            <input
              type="submit"
              value="Create Account"
              style={{
                background: "#F9C349",
                borderRadius: "6px",
                border: "none",
                margin: "15px 0px 15px 0px",
                color: "white",
                padding: "5px ",
                height: "35px",
              }}
            />
          </Form>
        </Box>
      </BoxContainer>
    </>
  );
};

export default Signup;
