import React from 'react'
import BottomNav from "../components/Navbar/BottomNav";
import TopNav from "../components/Navbar/TopNav";
import styled from "styled-components";
import Footer from "../components/Footer/Footer";
import TableRow from '../components/OrderTable/TableRow';

const Dashbord = () => {
    const ProductContainer = styled.div`
    width: 80%;
    // border: 1px solid black;
    margin: 20px auto;
    margin-bottom: 200px;
  `;
  const PageTitle=styled.h2`
  font-size: 25px;,font-weight:700;
  `
  const Span =styled.div`
  width:100%;
  height:220px;
  background:green;
  `
  
  const Table = styled.table`
  border-collapse: separate;
  margin: 25px 0;
  font-size: 0.9rem;
  min-width: 400px;
  width: 100%;
  border-spacing: 0 25px;
`;
const TH = styled.th`
  padding: 12px 15px;
  color: #b5bdc4;
`;
const TR=styled.tr`
text-align:left;`
const TBody = styled.tbody``;

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
        <PageTitle>Dashbord</PageTitle>
        <Span></Span>
        <PageTitle>Orders</PageTitle>
<Table>
<thead>
            <TR
            >
              <TH>Product</TH>
              <TH>ID</TH>
              <TH>Paid</TH>
              <TH>Total</TH>
              <TH>Deliverd</TH>
             
            </TR>
          </thead>
<TBody>
<TableRow
              ProductName={"User Name"}
              ProductDesc={"Mobile Number"}
              ID={"Nishant Singh"}
              Paid={"12/03/2021"}
              Total={'Rs. 569'}
              Deliverd={'Yes'}
            />
            <TableRow
              ProductName={"User Name"}
              ProductDesc={"Mobile Number"}
              ID={"Data"}
              Paid={"Data"}
              Total={'Rs. 569'}
              Deliverd={'Yes'}
            />
</TBody>
</Table>
 </ProductContainer>
<Footer/>
  </>
  )
}

export default Dashbord