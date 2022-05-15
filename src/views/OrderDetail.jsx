import React, { useEffect, useState } from 'react'
import BottomNav from "../components/Navbar/BottomNav";
import TopNav from "../components/Navbar/TopNav";
import styled from "styled-components";
import img from '../assets/images/Massgainer5kg.png'
import Footer from '../components/Footer/Footer';
import useStore from '../store'
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import Loading from '../components/Atoms/Loading';

const OrderDetail = () => {

    const [loading, setLoading] = useState(true);
    const [orderData, setOrderData] = useState(null);

    const param = useParams();
    const getOrderById = useStore((state)=> state.getOrderById);

    const fetchOrderById = async () => {
        setLoading(true);
        const result = await getOrderById(param.oid);
        console.log(result)
        setOrderData(result.data.data[0])
        if(result.status != 404 && result.status != 500){
            setLoading(false);
        }else{
            toast.error(result.data.message)
            setLoading(false)
        }
    }

    useEffect(() => {
     fetchOrderById()
    }, [])


      // price setting
  const discountDisplayPrice = orderData?.cart_id?.total_cart_price - orderData?.cart_id?.discounted_cart_price;
  const discountDisplayPercentage = Math.round((((discountDisplayPrice)/orderData?.cart_id?.total_cart_price)*100 + Number.EPSILON) * 100) / 100;
  const deliveryPrice = 39
  const taxPrice = 18


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
  @media (max-width: 839px) {
    width:26rem;
    margin-top:2rem;
   
  }
  
 
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
{loading ? <Loading /> : <React.Fragment>
    {
        orderData ? <Container>
        <Title>Order ID - {orderData._id}</Title>
    <OrderDetail>
    <DetailContainer>
    <DeliveryBox>
        <InTitle>Ordered Items</InTitle>
    {orderData?.cart_id?.cart_items?.map((item)=>( <ProductConatiners>
        <Img2 src={item.featured_product_id.url[0]} />
        <Productdesc>
            <PTitle2>{item.product_id.name} {item.featured_product_id.flavour} ( {item.product_id.weight}KG )</PTitle2>
            <Price2>₹{item.featured_product_id.price}.00</Price2>
        </Productdesc>
    </ProductConatiners>))}
       
    
    <Para>
    
    <InTitle>Shipping details</InTitle>
    <Divflex>
        <p>Name </p>
        <Left>{orderData.user_id.name}</Left>
    </Divflex>
    <Divflex>
        <p>Phone number</p>
        <Left>{orderData.phone_number}</Left>
    </Divflex>
    <Divflex>
        <p>Email</p>
        <Left>{orderData.user_id.email}</Left>
    </Divflex>
    <Divflex>
        <p >Address</p>
        <Left></Left>
        <Left></Left>
        <Left>{orderData.address_line_1} {orderData.address_line_2} {orderData.city + " " + orderData.state + " " + orderData.pincode}</Left>
    </Divflex>
    <Delivery>Expected delivery  <Bold>date 28/12/2020 </Bold> </Delivery>
    </Para>
    <Para>
    
    
    <InTitle>Payment details</InTitle>
    <Divflex>
        <p>Paid</p>
        <Left>{ orderData.payment_done ? 'Successful' : 'Not Yet'}</Left>
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
        <LeftV>({discountDisplayPercentage} %) {'->'} ₹ {discountDisplayPrice}</LeftV>
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
        <RightB>₹{orderData.cart_id.discounted_cart_price + taxPrice + deliveryPrice}.00</RightB>
    </Divflex>
    </Para>
    {orderData.cart_id?.cart_items?.map((item)=>( <ProductConatiner>
    
    <Img src={item.featured_product_id.url[0]} />
    <Productdesc>
        <PTitle>{item.product_id.name} {item.featured_product_id.flavour} ( {item.product_id.weight}KG )</PTitle>
    <Price>₹{item.featured_product_id.price}.00</Price>
    </Productdesc>
    
    </ProductConatiner>))}
   

    
    </SummaryContainer>
    </OrderDetail>
    </Container> : <Loading />
    }
    </React.Fragment>}
<Footer/>
   </>
  )
}

export default OrderDetail
