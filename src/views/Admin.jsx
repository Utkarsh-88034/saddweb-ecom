import React from 'react'
import BottomNav from "../components/Navbar/BottomNav";
import TopNav from "../components/Navbar/TopNav";
import styled from "styled-components";
import ReactStars from "react-rating-stars-component";
import Footer from '../components/Footer/Footer';
import TableRow from '../components/ProductTable/TableRow';
const Admin = () => {
    const ProductContainer = styled.div`
    // width: 80%;

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
const Productbtn=styled.button`
background:#F9C349;
border-radius: 12px;
border:none;
padding:21px 42px;

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
const TBody = styled.tbody``;

 const Star = styled.div`
 display:flex;

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
              Home
            </p>
  <ProductContainerHead>
      <span style={{fontWeight:'700',
    fontSize:'30px'}}>Products</span>
<Productbtn>ADD PRODUCTS</Productbtn>
  </ProductContainerHead>
  <Table >
      <thead>
      <tr style={{
          textAlign:'left',
      }}>
          <TH>Product</TH>
          <TH>stock</TH>
          <TH>Quantity</TH>
          <TH>Date</TH>
          <TH>Rating</TH>
          <TH>Actions</TH>
          <TH></TH>
        </tr>
      </thead>
<TBody>
<TableRow
    name={"Product Name"}
    Desc={"Product description, product description"}
    stock={"In stock"}
    quantity={'600'}
    Date={"12/03/2021"}
    Rating={<> <Star><div>
      <ReactStars
       count={5}
       // onChange={ratingChanged}
       size={8}
       activeColor="#ffd700"
     style={{
       display:"flex",
   alignitem:"center",
    
     }}
     />
       </div> 
     <p style={{fontSize:'8px'}}>4.7 out of 5</p>
     </Star>
     </>}
    Action={<><button style={{border:'none'}}>Edit</button></>}
            />
      <TableRow
    name={"Product Name"}
    Desc={"Product description, product description"}
    stock={"In stock"}
    quantity={'600'}
    Date={"12/03/2021"}
    Rating={<> <Star><div>
      <ReactStars
       count={5}
       // onChange={ratingChanged}
       size={8}
       activeColor="#ffd700"
     style={{
       display:"flex",
   alignitem:"center",
    
     }}
     />
       </div> 
     <p style={{fontSize:'8px'}}>4.7 out of 5</p>
     </Star>
     </>}
    Action={<><button style={{border:'none'}}>Edit</button></>}
            />
            <TableRow
    name={"Product Name"}
    Desc={"Product description, product description"}
    stock={"In stock"}
    quantity={'600'}
    Date={"12/03/2021"}
    Rating={<> <Star><div>
      <ReactStars
       count={5}
       // onChange={ratingChanged}
       size={8}
       activeColor="#ffd700"
     style={{
       display:"flex",
   alignitem:"center",
    
     }}
     />
       </div> 
     <p style={{fontSize:'8px'}}>4.7 out of 5</p>
     </Star>
     </>}
    Action={<><button style={{border:'none'}}>Edit</button></>}
            />
        
        </TBody>
        </Table>
       
       

  </ProductContainer>
  <Footer/>


  </>
  )
}

export default Admin