import React from 'react'
import TopNav from "../components/Navbar/TopNav";
import styled from "styled-components";
const Signup = () => {
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
flex-direction:column;
`
const Input=styled.input`
background: #F9FAFA;
border-radius: 4px;
border: 1px solid #B5BDC4;
margin-bottom:5px
`
const Label =styled.label`
text-align:left
`
const Name = styled.div`
display:flex;
justify-content: space-between;
width:100%;
flex-wrap:wrap


`
const Namein =styled.div`
display:flex;
flex-direction:column;
`
const Formin =styled.div`
display:flex;
flex-direction:column;
`
  return (
    <>
    <TopNav/>
    <BoxContainer>
        <Box>
        <p style={{marginBottom:"0px", fontSize:"30px" ,fontWeight:'700'}}>Welcom to Hellboy Protiens</p>
    <p style={{marginTop:'0px',fontSize:'16px'}}>Content content content contentcontentcontent</p>
    <Span >Create Your Account</Span>
    <Form>
    <Name>
        <Namein>
        <Label>First Name</Label>
        <Input type='text'/>
            </Namein>   
            <Namein>
            <Label>Last Name</Label>
        <Input type='text'/>
                </Namein>    
    
    </Name>

    <Label>Email</Label>
    <Input type='email'/>
    <Label>Password</Label>
    <Input type='password'/>
    <Label>Confirm Password</Label>
    <Input type='password'/>

    <input type='submit' value='Create Account' style={{
     background:'#F9C349',
     borderRadius: '6px',
     border:'none',
     margin:'15px 0px 15px 0px',
     color:'white',
     padding:'5px '
   }} />


</Form>
        </Box>
    </BoxContainer>
    </>

  )
}

export default Signup