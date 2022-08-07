import React from "react";
import styled from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import UploadPage from "./pages/UploadPage"
import SignUp from "./pages/SignUp";


const Container = styled.div`
  flex-direction: column;
  display: flex;
  align-items: center;
  // padding: 0px;
  // left: 327px;

`;

export default function App() {
  return (
    <Container>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login/>} />
          <Route path="/UploadPage" element={<UploadPage/>} />
          <Route path="/Register" element={<SignUp/>} />
         </Routes>
      </BrowserRouter>
    </Container>
  );
}
