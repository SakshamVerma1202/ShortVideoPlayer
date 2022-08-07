import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link, Outlet } from "react-router-dom";
import styled from "styled-components";
// import Button from "@mui/material/Button";
import { Upload, Button, Form, Select } from "antd";
import { URL } from "../component/Constant/Constant";
import { customRequest } from "../Service/API";
import { UploadOutlined } from "@ant-design/icons";
const { Option } = Select;

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 18,
  },
};

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

// const Form = styled.form`
//   display: flex;
//   flex-wrap: wrap;
// `;

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

const Buttone = styled.button`
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
  color: red;
  font-size: 10px;
`;
export default function SignUp() {
  const [form] = Form.useForm();
  const [isError, setIsError] = useState("");
  const [catFlag, setCatFlag] = useState(true);
  const [uploader_eMail, setUploader_eMail] = useState("");
  const [type, setType] = useState("");
  const [thumbnail, setThumbnail] = useState("")
  const [videoName, setVideoName] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  // const collectData = async () => {
  //   console.log("running")
  //   let result = await fetch(`${URL}/users`, {
  //     method: "POST",
  //     body: JSON.stringify({ fullName, mobile, email, password, dob }),
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   });
  //   result = await result.json();
  //   console.log(result);
  // };

  const customRequests = (options) => {
    const { onSuccess, onError } = options;
    customRequest(options).then(
      (res) => {
        setThumbnail(res.data)
        if(userInfo){
          setUploader_eMail(userInfo.data[0].user_eMail)
        }
        onSuccess(res);
      },
      (error) => {
        onError(error);
      }
    );
  };

  const collectData = async () => {
    console.log("running");
    let result = await fetch(`${URL}/videolog`, {
      method: "POST",
      body: JSON.stringify({
        uploader_eMail,
        type,
        category,
        description,
        videoName,
        thumbnail
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    console.log(result);
  };

  const props = {
    name: "myvid",
    action: `${URL}/videolog/upload`,
    multiple: false,
    disabled: catFlag,
    onChange(info) {
      if (info.file.status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === "done") {
        console.log(`${info.file.name} file uploaded successfully`);
        console.log(info);
      } else if (info.file.status === "error") {
        console.log(`${info.file.name} file upload failed.`);
      }
    },
  };

  return (
    <>
      <Container>
        <Wrapper>
          <Title>Upload A Video</Title>
          <Form form={form} {...layout} name="form" onFinish={collectData}>
            {userInfo ? (
              <div>
                Being Uploaded By {userInfo.data[0].user_eMail}
                {/* {setUploader_eMail(userInfo.data[0].user_eMail)} */}
              </div>
            ) : (
              ""
            )}
            <Input
              type="text"
              autoComplete="Video Name"
              placeholder="Video Name"
              value={videoName}
              onChange={(e) => setVideoName(e.target.value)}
            />
            <Input
              type="text"
              placeholder="Type"
              autoComplete="Type"
              value={type}
              onChange={(e) => setType(e.target.value)}
            />
            <Input
              type="text"
              placeholder="Category"
              autoComplete="Category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
            <Input
              type="text"
              placeholder="Description"
              autocomplete="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <div>.</div>
            <Upload
              action={`${URL}/videolog/upload`}
              customRequest={customRequests}
            >
              <Button>
                <UploadOutlined /> Upload Video Here
              </Button>
            </Upload>
            {/* <img style={{ height: "40px", widows: "40px" }} src={url + text} /> */}
            <Warning>{isError}</Warning>
            <Agreement>
              By creating an account,I consent to the processing of my personal
              data in accordance with the <b>PRIVACY POLICY</b>
            </Agreement>
            <Link to="/Login">
              <Buttone onClick={collectData}> Submit</Buttone>
            </Link>
            <Outlet />
          </Form>
        </Wrapper>
      </Container>
    </>
  );
}
