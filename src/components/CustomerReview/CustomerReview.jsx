import React from 'react'
import styled from "styled-components";
import img1 from '../../assets/images/Ellipse1.png'
import img2 from '../../assets/images/Ellipse2.png'
import img3 from '../../assets/images/Ellipse3.png'
import ReactStars from "react-rating-stars-component";
import LArrow from '../../assets/images/Larrow.png'
import RArrow from '../../assets/images/Rarrow.png'

const CustomerRview = () => {
    const ReviewBox=styled.div`
    width:100%;
    height:753px;
    background: #F4F4F6;
border-radius: 12px;
position:relative;
    `;
    const ReaviewHead=styled.h1`
    font-weight: 700;
font-size: 40px;
line-height: 48px;
text-align:center;
    `;
    const Reaviewp=styled.p`
    text-align:center;
    `
    const InnerBox= styled.div`
    width:65%;
    height:65%;
    text-align:center;
    position:absolute;
    left:17%;
    position :relative
    `
    

    const ReactStar = styled.div`
    display:flex;
    align-item:center;
    justify
  margin:auto;
    justify-content: space-between;
    `
    const LeftArrow=styled.div`
    
    `
    const RightArrow=styled.div`
    border-radius:60%;
    
    `
    const Name =styled.p``
  return (
  <ReviewBox>
<ReaviewHead>What our customers say</ReaviewHead>
<Reaviewp>Our clients send us bunch of smilies with our services and we love them</Reaviewp>
  <InnerBox>
    <img src={img2} alt='img2'
    style={{
      position:"absolute",
      top:"90px",
      left:"0px",
      width:"56px",
      height:"56px"
    }}
    />
    <img src={img3} alt='img3'
        style={{
          position:"absolute",
          top:"20px",
          right:"0px",
        height:"37px",
      width:"37px"}}
    />

<img src={img1} alt='jj'/>
<Name>Nishant Singh</Name>
<p>Marketing</p>
<ReactStar>
<LeftArrow>
  <img src={LArrow} alt=''/>
</LeftArrow>
<ReactStars
    count={5}
    // onChange={ratingChanged}
    size={24}
    activeColor="#ffd700"
  style={{
    display:"flex",
alignitem:"center",
 
  }}
  />
  <RightArrow>
    <img src={RArrow} alt=''/>
  </RightArrow>
</ReactStar>



<></>
<>You’ll get the best of what you put in. The team is working at their
best to provide us variety of space and homes. Had a great
experience working with them
Thanks a lot.</>

  </InnerBox>
  </ReviewBox>
  )
}

export default CustomerRview