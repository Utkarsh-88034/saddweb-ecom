import React from 'react'
import TopNav from "../components/Navbar/TopNav";
import styled from "styled-components";

const Signup2 = () => {
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
align-item:left
flex-wrap:wrap;
`
const Input=styled.input`
background: #F9FAFA;
border-radius: 4px;
border: 1px solid #B5BDC4;
margin-bottom:15px
flex-wrap:wrap;
`
const Label =styled.label`
text-align:left`

  return (
    <>
<TopNav/>
 <BoxContainer>
<Box>
    <p style={{marginBottom:"0px", fontSize:"30px" ,fontWeight:'700'}}>Welcom to Hellboy Protiens</p>
    <p style={{marginTop:'0px',fontSize:'16px'}}>Content content content contentcontentcontent</p>
    <Span >Create Your Account</Span>
    <Form>
  <Label >Email</Label>
      <Input type='email'/>
      <Label>password</Label>
      <Input type='email'/>
    
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

export default Signup2