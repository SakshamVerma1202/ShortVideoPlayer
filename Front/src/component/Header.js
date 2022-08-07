import React from "react";
import styled from "styled-components";
import {
  SearchRounded,
} from "@material-ui/icons";
import { connect, useDispatch, useSelector } from "react-redux";
import { Link, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import { logout } from "../redux/actions/UserAction";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px 45px;
  width: 1170px;
  height: 130px;
  left: 0px;
  top: 0px;
  background: white;
`;
const Items = styled.div`
  flex: 1;
  // width: 70px;
  // height: 16px;
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: #6a983c;
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Left = styled.div`
  padding: 0px 0px 0px 0px;
  display: flex;
  justify-content: flex-start;
  flex: 1.5;
  gap: 20px;
  justify-content: space-between;
`;
const Center = styled.div`
  flex: 2;
  align-items: center;
  display: flex;
  justify-content: flex-start;
  margin-left: 40px;
  cursor: pointer;
  justify-content: space-between;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0px 10px 0px 0px;
`;
const CartItems = styled.div``;
const Line1 = styled.div`
  position: absolute;
  margin-left: 40px;
  width: 1090px;
  top: 48px;
  opacity: 0.1;
  border: 1px solid black;
`;
const Line2 = styled.div`
flex : 1;
align-items : center
position: absolute;
width: 20px;
height: 0px;
left: 170px;
top: 11px;

border: 1px solid #D1D1D1;
transform: rotate(90deg);
`;

const Navbar = styled.div`
  padding: 1px 20px;
`;
const SearchContainer = styled.div`
  border: 0.4px solid lightgray;
  display: flex;
  align-items: center;
  padding: 15px;
  height: 10px;
  border-radius: 5px;
  background: #f9f9f9;
`;
const FilterContainer = styled.div`
  display: flex;
  flex: 1;
`;
const Filter = styled.div`
  padding: 10px;
`;
const Move = styled.div``;
const Select = styled.select`
  border: none;
`;
const Option = styled.option``;
const Input = styled.input`
  flex: 1;
  min-width: 20%;
  padding: 4px;
  border: none;
  flex: 8;
`;
const Header = () => {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const dispatch = useDispatch();
  const LogoutHandler = () => {
    dispatch(logout());
  };

  return (
    <>
      <Container>
        <Line1 />
        <Navbar>
          <Wrapper>
            <Move>
              <h1>Videvo</h1>
            </Move>
            <Move>
              <SearchContainer>
                <FilterContainer>
                  <Filter>
                    <Select>
                      <Option>All Videos</Option>
                      <Option>Trending</Option>
                      <Option>New</Option>
                      <Option>Footages</Option>
                      <Option>Songs Clips</Option>
                    </Select>
                  </Filter>
                </FilterContainer>
                <Line2 />
                <Input placeholder="Search Videos" />
                <SearchRounded style={{ color: "blue", fontSize: 20 }} />
              </SearchContainer>
            </Move>
            <Move>
              <h3>Trending</h3>
            </Move>
            <Move>
              <h3>New</h3>
            </Move>
            <Move>
              <h3>Footages</h3>
            </Move>
            <Move>
              <h3>Songs Clips</h3>
            </Move>
            <Move>
              <Items>
                {userInfo ? (
                  <Items
                    type="button"
                    style={{ cursor: "pointer" }}
                    onClick={LogoutHandler}
                  >
                    Logout
                  </Items>
                ) : (
                  <Link
                    style={{ textDecoration: "none", color: "olivedrab" }}
                    to="/Register"
                  >
                    Register
                  </Link>
                )}
              </Items>
            </Move>
            <Move>
              <Items>
                {userInfo ? (
                  <Items style={{ cursor: "pointer", color: "blue" }}>
                    {userInfo.data[0].user_Name}
                  </Items>
                ) : (
                  <Link
                    style={{ textDecoration: "none", color: "olivedrab" }}
                    to="/Login"
                  >
                    Sign In
                  </Link>
                )}
              </Items>
            </Move>
            <Outlet />
          </Wrapper>
        </Navbar>
      </Container>
      <Link
        style={{ textDecoration: "none", color: "olivedrab" }}
        to="/UploadPage"
      >
        Upload Video
      </Link>

      {/* <img
        onClick={
          <Link
            style={{ textDecoration: "none", color: "olivedrab" }}
            to="/Login"
          />
        }
        src={UploadVid}
        width="300"
        height="250"
        alt="Upload Video From Here"
      /> */}
    </>
  );
};

export default Header;
