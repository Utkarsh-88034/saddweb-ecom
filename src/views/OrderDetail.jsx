import React from 'react'
import BottomNav from "../components/Navbar/BottomNav";
import TopNav from "../components/Navbar/TopNav";
import styled from "styled-components";
import img from '../assets/images/Massgainer5kg.png'
import Footer from '../components/Footer/Footer';
const OrderDetail = () => {
    const Container = styled.div`
    width: 80%;

    // border: 1px solid black;
    margin: 20px auto;
    margin-bottom: 200px;
  `;
  const Title = styled.p`
  font-weight: 700;
font-size: 30px;
  
  `

  const OrderDetail=styled.div`
  display:flex;
  justify-content: space-between;
flex-wrap:wrap;

  `
  const DetailContainer=styled.div`
  border: 1px solid #B5BDC4;
  border-radius:8px;
  padding:10px;
  width:26rem;
  min-width:80px;
  
  `
  const SummaryContainer=styled.div`
  border: 1px solid #B5BDC4;
  border-radius:8px;
  padding:10px;
  width:16rem;
  min-width:80px;

 
 
  `
  const DeliveryBox=styled.div`
  `
  const PaymentBox=styled.div`
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
margin-top:13px;
height:68px;
`
const ProductConatiners=styled.div`


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

const PTitle=styled.p`
font-size:9px
`
const PTitle2=styled.p`
font-size:12px;
`
const Price=styled.p`
font-size:9px;
`
const Price2=styled.p`
font-size:12px;
`
const Img=styled.img`
height:35px;
width:35px;
`
const Img2=styled.img`
height:55px;
width:55px;
`
const Delivery=styled.p`
background: #F2F2F2;
border-radius: 4px;
text-align:center;
`
const InTitle=styled.p`
font-weight: 700;
font-size: 17px;
`
const Para=styled.div`
margin-top:2rem;
`
const SumTitle=styled.p`
font-weight: 500;
font-size: 20px;`
const DashedDivider = styled.hr`
border: none;
border-top: 2px dashed #b5bdc4;
color: #fff;

height: 1px;
width: 100%;
`;

const Left=styled.p`
text-align:left;
width:55%;

`
const Bold=styled.span`
font-weight: 700;
`
const LeftV=styled.p`
font-size:11px;
`
const RightV=styled.p`
font-size:13px;
`
const RightB=styled.p`
font-size:13px;
font-weight: 700;
`
    return (
   <>
   <TopNav/>
   <BottomNav/>
<Container>
    <Title>Order ID</Title>
<OrderDetail>
<DetailContainer>
<DeliveryBox>
    <InTitle>Ordered Items</InTitle>
    <ProductConatiners>
<Img2 src={img} />
<Productdesc>
    <PTitle2>Hell Boy Natural Peanut Butter Crunchy ( 2KG )</PTitle2>
<Price2>₹399.00</Price2>
</Productdesc>

</ProductConatiners>
<ProductConatiners>
<Img2 src={img} />
<Productdesc>
    <PTitle2>Hell Boy Natural Peanut Butter Crunchy ( 2KG )</PTitle2>
<Price2>₹399.00</Price2>
</Productdesc>

</ProductConatiners>
<Para>

<InTitle>Shipping details</InTitle>
<Divflex>
    <p>Name </p>
    <Left>Nishant Singh</Left>
</Divflex>
<Divflex>
    <p>Phone number</p>
    <Left>+91 8279492748</Left>
</Divflex>
<Divflex>
    <p>Email</p>
    <Left>ns991989@gmail.com</Left>
</Divflex>
<Divflex>
    <p >Address</p>
    <Left>100 feet road, teri bagiya,  Agra - 6</Left>
</Divflex>
<Delivery>Expected delivery  <Bold>date 28/12/2020 </Bold> </Delivery>
</Para>
<Para>


<InTitle>Payment details</InTitle>
<Divflex>
    <p>Method</p>
    <Left>COD</Left>
</Divflex>
</Para>
</DeliveryBox>
</DetailContainer>
<SummaryContainer>
    <SumTitle>Order Summary</SumTitle>
    <DashedDivider/>
    <Para>

  
<Divflex>
    <RightV>Subtotal</RightV>
    <RightV>₹399.00</RightV>
</Divflex>
<Divflex>
    <LeftV>Discount</LeftV>
    <LeftV>(20%) - $16.19</LeftV>
</Divflex>
<Divflex>
    <LeftV>Delivery</LeftV>
    <LeftV>₹00.00</LeftV>
</Divflex>
<Divflex>
<LeftV>Tax</LeftV>
    <LeftV> + ₹39.00</LeftV>
</Divflex>
<Divflex>
    <RightB>Total</RightB>
    <RightB>₹399.00</RightB>
</Divflex>
</Para>
<ProductConatiner>

<Img src={img} />
<Productdesc>
    <PTitle>Hell Boy Natural Peanut Butter Crunchy ( 2KG )</PTitle>
<Price>₹399.00</Price>
</Productdesc>

</ProductConatiner>
<ProductConatiner>
<Img src={img} />
<Productdesc>
    <PTitle>Hell Boy Natural Peanut Butter Crunchy ( 2KG )</PTitle>
<Price>₹399.00</Price>
</Productdesc>

</ProductConatiner>
<ProductConatiner>
<Img src={img} />
<Productdesc>
    <PTitle>Hell Boy Natural Peanut Butter Crunchy ( 2KG )</PTitle>
<Price>₹399.00</Price>
</Productdesc>

</ProductConatiner>

</SummaryContainer>
</OrderDetail>
</Container>
<Footer/>
   </>
  )
}

export default OrderDetail
