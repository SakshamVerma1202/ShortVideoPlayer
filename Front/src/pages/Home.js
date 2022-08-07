import React from "react";
import styled from "styled-components";
import Header from "../component/Header";
import Footer from "../component/Footer";

const Container = styled.div`
  display: flex;
  // width: 1260px;
  flex-direction: column;
  align-items: center;
  background: #ffffff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15);
`;
export default function Home() {
  return (
    <Container>
      <Header />
      <Footer />
    </Container>
  );
}
