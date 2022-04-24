import React from "react";
import BottomNav from "../components/Navbar/BottomNav";
import TopNav from "../components/Navbar/TopNav";
import styled from "styled-components";
import Footer from "../components/Footer/Footer";
import TableRow from "../components/UserTable/TableRow";

const User = () => {
  const ProductContainer = styled.div`
    width: 80%;
    // border: 1px solid black;
    margin: 20px auto;
    margin-bottom: 200px;
  `;
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
          Admin
        </p>

        <span style={{ fontWeight: "700", fontSize: "30px" }}>Users</span>
        <Table>
          <thead>
            <tr
              style={{
                textAlign: "left",
              }}
            >
              <TH>Name</TH>
              <TH>Admin or user</TH>
              <TH>Date</TH>
              <TH>Value of order</TH>
              <TH></TH>
            </tr>
          </thead>
          <TBody>
            <TableRow
              name={"User Name"}
              phone={"Mobile Number"}
              role={"Admin"}
              date={"12/03/2021"}
            />
            <TableRow
              name={"User Name"}
              phone={"Mobile Number"}
              role={"Admin"}
              date={"12/03/2021"}
            />
            <TableRow
              name={"User Name"}
              phone={"Mobile Number"}
              role={"Admin"}
              date={"12/03/2021"}
            />
          </TBody>
        </Table>
      </ProductContainer>

      <Footer />
    </>
  );
};

export default User;