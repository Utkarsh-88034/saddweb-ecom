import React from 'react'
import TopNav from "../components/Navbar/TopNav";
import styled from "styled-components";

const LoginCart = () => {
    const BoxContainer =styled.div`
    display: flex;
    
    align-items: center;
    justify-content: center;
height:100vh

    
    `
    const Box =styled.div`
    text-align:center;
    border-sizing:border-box;
    margin:0px;
    border: 1px solid #D7D9D9;
    border-radius: 6px;
    padding:10px;
    `
    const Span=styled.span`
    border: 1.5px solid #D1D4D9;
`
const Form =styled.form`
display:flex;
flex-wrap:wrap
flex-direction:column;
align-item:left
`
const Input=styled.input`
background: #F9FAFA;
border-radius: 4px;
flex-wrap:wrap
border: 1px solid #B5BDC4;
`
const Label =styled.label`
text-align:left`
const Check =styled.div`

text-align:left;
background:green
display:flex;
`
  return (
    <>
<TopNav/>
 <BoxContainer>
<Box>
    <p style={{marginBottom:"0px", fontSize:"30px" ,fontWeight:'700'}}>Welcom to Hellboy Protiens</p>
    <p style={{marginTop:'0px',fontSize:'16px'}}>Content content content contentcontentcontent</p>
    <Span >Have a password? Continue with your email address</Span>
    <Form>
  <Label >Email</Label>
      <Input type='email'/>
      <Label>password</Label>
      <Input type='email'/>
      <Check>
      <input type='checkbox' />    <p> Remember me</p>
      </Check>
   <input type='submit' style={{
     background:'#F9C349',
     borderRadius: '6px',
     border:'none',
     color:'white',
     padding:'5px '
   }} />
   <span style={{
     color:'#F9C349',
     fontSize:'14px'
   }}>I forgot my password</span>
    </Form>
</Box>

 </BoxContainer>
    </>
  )
}

export default LoginCart