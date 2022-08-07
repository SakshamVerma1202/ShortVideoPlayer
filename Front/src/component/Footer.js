import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { getter } from "../Service/API";
const Container = styled.div`
  display: flex;
  width: 1260px;
  height: 465px;
  padding: 44px 45px;
  gap: 48px;
  flex-direction: column;
`;
const Wrapper = styled.div`
  display: flex;
  flex: 1;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 15px 30px 0px 30px;
`;
const Center = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 15px 30px 0px 30px;
`;
const Justify = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 15px 30px 0px 30px;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 15px 30px 0px 30px;
`;
const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
`;
const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
  cursor: pointer;
  color: #6a983c;
`;
const Copyright = styled.div`
  width: 188px;
  height: 19px;

  font-family: "Open Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
  color: #151515;
`;
const Product = styled.div`
  display: flex;
  flex: 1;
  gap: 10px;
  flex-wrap: wrap;
`;
const Box = styled.div`
  display: flex;
  align-items: center;
  padding: 6px 16px;
  width: 92px;
  height: 18px;
  background: #f5f5f5;
  border-radius: 12px;
  justify-content: space-between;
  cursor: pointer;
`;

const Footer = () => {
  const [finalPath, setFinalPath] = useState({});

  const fetchVideolog = async () => {
    getter().then(
      (data) => {
        const res = data.data.data;
        const path = data.data.vid_path;
        console.log(res, path);
        let foundData = [];
        for (let i = 0; i < res.length; i++) {
          foundData[i] = path + res[i].thumbnail;
        }
        console.log(foundData);
        setFinalPath(foundData);
      },
      (error) => {}
    );
  };

  useEffect(() => {
    fetchVideolog();
  }, []);

  return (
    <Container>
      <Wrapper>
        <Left>
          {finalPath.length >= 0 ? (
            <iframe
              width="250"
              height="140.625"
              src={finalPath[0]}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen="1"
            ></iframe>
          ) : (
            ""
          )}
          {finalPath.length >= 4 ? (
            <iframe
              width="250"
              height="140.625"
              src={finalPath[4]}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen="1"
            ></iframe>
          ) : (
            ""
          )}
          {finalPath.length >= 8 ? (
            <iframe
              width="250"
              height="140.625"
              src={finalPath[8]}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen="1"
            ></iframe>
          ) : (
            ""
          )}
          <Title> Get in touch</Title>
          <List>
            <ListItem>About Us</ListItem>
            <ListItem>Careers </ListItem>
            <ListItem>Press Release</ListItem>
            <ListItem>Blog</ListItem>
          </List>
        </Left>
        <Center>
          {finalPath.length >= 1 ? (
            <iframe
              width="250"
              height="140.625"
              src={finalPath[1]}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen="1"
            ></iframe>
          ) : (
            ""
          )}
          {finalPath.length >= 5 ? (
            <iframe
              width="250"
              height="140.625"
              src={finalPath[5]}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen="1"
            ></iframe>
          ) : (
            ""
          )}
          {finalPath.length >= 9 ? (
            <iframe
              width="250"
              height="140.625"
              src={finalPath[9]}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen="1"
            ></iframe>
          ) : (
            ""
          )}
          <Title> Connection</Title>
          <List>
            <ListItem>Facebook</ListItem>
            <ListItem>Twiiter</ListItem>
            <ListItem>Instagram</ListItem>
            <ListItem>Youtube</ListItem>
            <ListItem>Linkedin</ListItem>
          </List>
        </Center>
        <Justify>
          {finalPath.length >= 2 ? (
            <iframe
              width="250"
              height="140.625"
              src={finalPath[2]}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen="1"
            ></iframe>
          ) : (
            ""
          )}
          {finalPath.length >= 6 ? (
            <iframe
              width="250"
              height="140.625"
              src={finalPath[6]}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen="1"
            ></iframe>
          ) : (
            ""
          )}
          {finalPath.length >= 10 ? (
            <iframe
              width="250"
              height="140.625"
              src={finalPath[4]}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen="1"
            ></iframe>
          ) : (
            ""
          )}
          <Title>Earning</Title>
          <List>
            <ListItem>Become an Affilate</ListItem>
            <ListItem>Advertise your Product </ListItem>
            <ListItem>Sell on Market</ListItem>
          </List>
        </Justify>
        <Right>
          {finalPath.length >= 3 ? (
            <iframe
              width="250"
              height="140.625"
              src={finalPath[3]}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen="1"
            ></iframe>
          ) : (
            ""
          )}
          {finalPath.length >= 7 ? (
            <iframe
              width="250"
              height="140.625"
              src={finalPath[7]}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen="1"
            ></iframe>
          ) : (
            ""
          )}
          {finalPath.length >= 11 ? (
            <iframe
              width="250"
              height="140.625"
              src={finalPath[11]}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen="1"
            ></iframe>
          ) : (
            ""
          )}
          <Title> Account</Title>
          <List>
            <ListItem>Your Account</ListItem>
            <ListItem>Returns Centre</ListItem>
            <ListItem>100% purchase protection </ListItem>
            <ListItem>Chat with us</ListItem>
            <ListItem>Help</ListItem>
          </List>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Footer;
