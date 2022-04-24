import React from 'react'
import BottomNav from "../components/Navbar/BottomNav";
import TopNav from "../components/Navbar/TopNav";
import styled from "styled-components";
import img from '../assets/images/Massgainer5kg.png'
import Footer from '../components/Footer/Footer';
const Checkout = () => {
    const ProductContainer = styled.div`
    width: 80%;

    // border: 1px solid black;
    margin: 20px auto;
    margin-bottom: 200px;
  `;
  const ProductContainerHead = styled.div`
    width: 100%;
    height: 100px;
    // margin-bottom: 20px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;

    // border: 1px solid black;
  `;
  const CurrentUrlContainer = styled.div`
    display: flex;
  `;
  const ShippingDetail=styled.div`
  display:flex;
  justify-content: space-between;
flex-wrap:wrap;

  `
  const DeliveryContainer=styled.div`
  
  `
  const CheckoutContainer=styled.div`
  border: 1px solid #B5BDC4;
  border-radius:8px;
  padding:10px;

  width:230px
 
 
  `
  const DeliveryBox=styled.div`
  `
  const PaymentBox=styled.div`
  `
  const Form =styled.div`
  display:flex;

  flex-direction:column;
  `
  const Label =styled.label`
  color: #4F4F4F;
  font-size: 16px;

  text-align:left
  `
  const Input = styled.input`
  background: #f9fafa;
  border-radius: 4px;
  border: 1px solid #b5bdc4;
  margin-bottom: 5px;
  height: 35px;
`;
const Select =styled.select`
background: #f9fafa;
border-radius: 4px;
border: 1px solid #b5bdc4;
margin-bottom: 5px;
height: 35px;
`
const Divflex=styled.div`
display:flex;
justify-content: space-between;


`
const ProductConatiner=styled.div`
background: #FAFAFA;
border: 0.69644px solid #B5BDC4;
display:flex;
flex-wrap:wrap;
align-items: center;
border-radius:7px;
margin-bottom:5px;
`
const Productdesc=styled.div`
display:flex;
flex-direction:column;
justify-content: center;
`
const Button=styled.button`
background: #F9C349;
color:white;
border:none;
border-radius: 7px;
width:100%;
`
  return (
<>
<TopNav/>
<BottomNav/>
<ProductContainer>

    <CurrentUrlContainer>
    <p
                style={{
                  fontWeight: "400",
                  fontSize: "14px",
                  color: "#818181",
                }}
              >
                Home
              </p>
              <p style={{ 
                                   fontWeight: "400",
                                   fontSize: "14px",
                                   color: "#818181",
               }}>/All Products</p>
              <p style={{ 
                                   fontWeight: "400",
                                   fontSize: "14px",
                                   color: "#818181",
               }}>/Product1</p>
              <p style={{ 
                                   fontWeight: "400",
                                   fontSize: "14px",
                                   color: "#818181",
               }}>/Basket</p>
              <p style={{ fontWeight: "500" }}>/Checkout</p>



    </CurrentUrlContainer>
<h1 style={{fontWeight:'700'}}>Shipping Details</h1>
<ShippingDetail>
<DeliveryContainer>
<DeliveryBox>
    <h3>Delivery Information</h3>
    <Form>
<Label>Street address</Label>
<Input style={{width:'347px'}} type='text' placeholder='Click to find Address'/>
   <Divflex>
       <Form>
           <Label>Pincode</Label>
           <Input style={{width:'107px'}} type='number' placeholder='395003'/>
       </Form>
       <Form>
           <Label>City</Label>
           <Select style={{width:'107px'}} id="city" name="city">
           <option value="surat">surat</option>
  </Select>
           
       </Form>
       <Form>
           <Label>Country</Label>
           <Select style={{width:'107px'}} id="city" name="city">
           <option value="India">India</option>
  </Select>
                  </Form>
   </Divflex>
    </Form>
</DeliveryBox>
<PaymentBox>
{/* padding yaha se */}
</PaymentBox>
</DeliveryContainer>
<CheckoutContainer>
<Divflex>
    <p style={{fontSize:'13px'}}>Subtotal</p>
    <span style={{fontSize:'13px'}}>₹399.00</span>
</Divflex>
<Divflex>
    <p style={{fontSize:'11px'}}>Discount</p>
    <span style={{fontSize:'11px'}}>(20%) - $16.19</span>
</Divflex>
<Divflex>
    <p style={{fontSize:'11px'}}>Delivery</p>
    <span style={{fontSize:'11px'}}>₹00.00</span>
</Divflex>
<Divflex>
    <p style={{fontSize:'11px'}}>Tax</p>
    <span style={{fontSize:'11px'}}> + ₹39.00</span>
</Divflex>
<Divflex>
    <p style={{fontSize:'13px' , fontWeight:'700'}}>Total</p>
    <span style={{fontSize:'13px',fontWeight:'700'}}>₹399.00</span>
</Divflex>
<ProductConatiner>
<img src={img} style={{width:'35px',
height:'35px'}}/>
<Productdesc>
    <p style={{fontSize:'9px'}}>Hell Boy Natural Peanut Butter 
Crunchy ( 2KG )</p>
<span style={{fontSize:'9px'}}>₹399.00</span>
</Productdesc>

</ProductConatiner>
<ProductConatiner>
<img src={img} style={{width:'35px',
height:'35px'}}/>
<Productdesc>
    <p style={{fontSize:'9px'}}>Hell Boy Natural Peanut Butter 
Crunchy ( 2KG )</p>
<span style={{fontSize:'9px'}}>₹399.00</span>
</Productdesc>

</ProductConatiner>
<ProductConatiner>
<img src={img} style={{width:'35px',
height:'35px'}}/>
<Productdesc>
    <p style={{fontSize:'9px'}}>Hell Boy Natural Peanut Butter 
Crunchy ( 2KG )</p>
<span style={{fontSize:'9px'}}>₹399.00</span>
</Productdesc>

</ProductConatiner>
<Button>Checkout</Button>
</CheckoutContainer>
</ShippingDetail>

</ProductContainer>
<Footer/>
</>
  )
}

export default Checkout