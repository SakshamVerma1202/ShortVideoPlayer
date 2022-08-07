import React from "react";
import styled from "styled-components";
import { Outlet, Link, useLocation } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { login } from "../redux/actions/UserAction";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://www.wallpapertip.com/wmimgs/196-1963020_website-backgrounds-website-login-page-background.jpg")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 40px;
  background-color: lightblue;
  border-radius: 10px;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
  border: 1px solid #d1d1d1;
  border-radius : 10px; 
`;

const Linked = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 80%;
  border: none;
  padding: 15px 20px;
  background-color: green;
  color: white;
  cursor: pointer;
  align-items: center;
  justify-content: center;
`;
const Message = styled.div`
  color: red;
  font-size: 10px;
`;
const Login = () => {
  const history = useNavigate();
  const location = useLocation;
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const redirect = location.search ? location.search.split("=")[1] : "/";
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { error, userInfo } = userLogin;
  useEffect(() => {
    if (userInfo) {
      history(redirect);
    }
  }, [history, userInfo, redirect]);

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(login(mobile, password));
  };

  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input
            placeholder="Enter Mobile Number"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
          />
          <Input
            type="password"
            autocomplete="current-password"
            placeholder=" Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && <Message>{error}</Message>}
          <Linked>DON`T YOU REMEMBER THE PASSWORD</Linked>
          <Linked>
            {/* <Link to="/Register"> CREATE AN ACCOUNT</Link> */}
            <Link to= "/Register">
              CREATE AN ACCOUNT
            </Link>
          </Linked>
          <Outlet />
          <Link to="/">
            <Button onClick={handleLogin}> Log in</Button>
          </Link>
        </Form>
      </Wrapper>
    </Container>
  );
};
export default Login;