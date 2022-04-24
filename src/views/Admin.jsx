import React from "react";
import BottomNav from "../components/Navbar/BottomNav";
import TopNav from "../components/Navbar/TopNav";
import styled from "styled-components";
import ReactStars from "react-rating-stars-component";
import Footer from "../components/Footer/Footer";

const Admin = () => {
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
  const Productbtn = styled.button`
    background: #f9c349;
    border-radius: 12px;
    border: none;
    padding: 21px 42px;
  `;
  const Table = styled.table`
    border-collapse: collapse;
    margin: 25px 0;
    font-size: 0.9rem;
    min-width: 400px;
  `;
  const TH = styled.th`
    padding: 12px 15px;
    color: #b5bdc4;
  `;
  const TD = styled.td`
    padding: 12px 15px;
  `;
  const TdContainer = styled.div`
    display: flex;
    justify-content: space-between;
  `;
  const Span = styled.span`
    background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%);
    width: 65px;
    height: 65px;
    border-radius: 10px;
    margin-right: 2px;
  `;

  return (
    <>
      <TopNav />
      <BottomNav />
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
          <span style={{ fontWeight: "700", fontSize: "30px" }}>Products</span>
          <Productbtn>ADD PRODUCTS</Productbtn>
        </ProductContainerHead>
        <Table>
          <thead>
            <tr
              style={{
                textAlign: "left",
              }}
            >
              <TH>Product</TH>
              <TH>stock</TH>
              <TH>Quantity</TH>
              <TH>Date</TH>
              <TH>Rating</TH>
              <TH>Actions</TH>
              <TH></TH>
            </tr>
          </thead>
          <tbody>
            <tr
              style={{
                border: "1px solid #B5BDC4",
                borderRadius: "22px",
                boxSizing: "border-box",
                marginTop: "3px",
              }}
            >
              <TD>
                <TdContainer>
                  <Span></Span>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <p
                      style={{
                        margin: "0px",

                        color: "#1E1810",
                        fontSize: "16px",
                      }}
                    >
                      Product Name
                    </p>
                    <p
                      style={{
                        color: "#B5BDC4",
                        fontSize: "12px",
                      }}
                    >
                      Product description, product description
                    </p>
                  </div>
                </TdContainer>
              </TD>
              <TD style={{ color: "#007D1E" }}>inStock</TD>
              <TD>500</TD>
              <TD>12/03/2022</TD>
              <TD>
                {" "}
                <ReactStars
                  count={5}
                  // onChange={ratingChanged}
                  size={10}
                  activeColor="#ffd700"
                  style={{
                    display: "flex",
                    alignitem: "center",
                  }}
                />
              </TD>
              <TD>Edit</TD>
              <TD>-</TD>
            </tr>
          </tbody>
        </Table>
      </ProductContainer>
      <Footer />
    </>
  );
};

export default Admin;
