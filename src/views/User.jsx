import React from 'react'
import BottomNav from "../components/Navbar/BottomNav";
import TopNav from "../components/Navbar/TopNav";
import styled from "styled-components";
import Footer from '../components/Footer/Footer';


const User = () => {
    const ProductContainer = styled.div`
    width: 80%;

    // border: 1px solid black;
    margin: 20px auto;
    margin-bottom: 200px;
  `;
  const Table=styled.table`
border-collapse:collapse;
margin: 25px 0;
font-size:0.9rem;
min-width:400px;
`
const TH=styled.th`
padding:12px 15px;
color: #B5BDC4;

`
const TD =styled.td`
padding:12px 15px;
`
const TdContainer=styled.div`
display:flex;
justify-content: space-between;
`
const Span=styled.span`
background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%);
width:65px;
height:65px;
border-radius: 10px;
margin-right:2px;
`
  return (
    <>
    <TopNav/>
    <BottomNav/>
    <ProductContainer>
    <p
              style={{
                fontWeight: "400",
                fontSize: "14px",
                color: "#000000",
              }}
            >
              Admin
            </p>

    <span style={{fontWeight:'700',
    fontSize:'30px'}}>Users</span>
    <Table>
    <thead>
      <tr style={{
          textAlign:'left',
      }}>
          <TH>Name</TH>
          <TH>Admin or user</TH>
          <TH>Date</TH>
          <TH>Value of order</TH>  
          <TH></TH>
        </tr>
      </thead>
      <tbody>
      <tr style={{
            border:'1px solid #B5BDC4',
    borderRadius:'22px',
    boxSizing:'border-box',
    marginTop:'3px'}}>
          <TD>
              <TdContainer>
             <Span></Span>
             <div style={
                 {
                     display:'flex',
                 flexDirection:'column',
          

                 }
             }>
                 <p style={{
                            margin:'0px',
                    
                     color: '#1E1810',
                     fontSize:'16px'
                 }}>User name </p>
                  <p style={{
                      color:'#B5BDC4',
                      fontSize:'12px'
                  }}>Mobile number</p>
             </div>
              </TdContainer>
 </TD>
 <TD>Admin</TD>
 <TD>xyz.email.com</TD>
 <TD>Data</TD>
 <TD>-</TD>
 </tr>
      </tbody>
    </Table>
    </ProductContainer>
   
<Footer/>
    </>
  )
}

export default User