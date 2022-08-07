import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import styled from "styled-components";
import { URL } from "../component/Constant/Constant";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://thumbs.dreamstime.com/z/home-icon-abstract-blue-background-illustration-dark-blue-digital-texture-grunge-elegant-paint-modern-design-concept-home-icon-167075120.jpg")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 20%;
  padding: 20px;
  background-color: lightblue;
  border-radius: 10px;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
  border: 1px solid #d1d1d1;
  border-radius: 10px;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  // width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: green;
  color: white;
  cursor: pointer;
  border-radius: 1px;
  border-color: white;
  align-items: center;
  justify-content: center;
`;
const Warning = styled.div`
  color : red;
  font-size : 10px;


`
export default function SignUp() {
  const [isError, setIsError] = useState("");
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState("");
  let npassword;

  const collectData = async () => {
    console.log("running")
    let result = await fetch(`${URL}/users`, {
        method: "POST",
        body: JSON.stringify({ name, mobile, email, password, age }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      result = await result.json();
      console.log(result);
    };

  const checkValidation = (e) => {
    const confPass = e.target.value
    if (password !== confPass) {
      setIsError("Confirm Password should be match with password");
    } else {
      setPassword(confPass);
      setIsError("");
    }
  };

  return (
    <>
      <Container>
        {/* <Header/> */}
        <Wrapper>
          <Title>CREATE AN ACCOUNT</Title>
          <Form>
            <Input
              type="text"
              placeholder="Full Name"
              autoComplete="username"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <Input
              type="number"
              autoComplete="mobile"
              placeholder="Mobile"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
            />
            <Input
              type="email"
              placeholder="Email"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              type="text"
              placeholder="Age"
              autocomplete="age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Input
              type="password"
              placeholder="Confirm Password"
              value={npassword}
              onChange={(e) => checkValidation(e)}
            />
            <Warning>{isError}</Warning>
            <Agreement>
              By creating an account,I consent to the processing of my personal
              data in accordance with the <b>PRIVACY POLICY</b>
            </Agreement><Link to="/Login">
            <Button onClick={collectData} > Sign Up</Button></Link>
            <Outlet />
          </Form>
        </Wrapper>
      </Container>
    </>
  );
}