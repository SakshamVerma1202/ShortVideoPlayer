import { User } from "../entity/User";
import { Request, Response } from "express";
import userModel from "../entity/User";
const bcrypt = require("bcrypt")

export async function userSaveAction(request: Request, response: Response) {
    let message = "";
    try {
        const { email, name, password, age, mobile } = request.body;
        var pattern = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
        if (!pattern.test(email)) {
            message = "Please enter valid email address.";
            response.status(400);
            response.send(message)
        } else {
            let User = userModel.find({ user_mobile: mobile }, async (err: any, User: any) => {
                if(User[0].user_mobile == mobile){
                    message = "Mobile is already registered with this address.";
                    response.status(400);
                    response.send(message)
                } else {
                    const hashpass = await bcrypt.hash(password, 10)
                    const userData = {
                        user_eMail: email,
                        user_Name: name,
                        user_mobile: mobile,
                        password: hashpass,
                        age: age
                    }
                    console.log(userData);
                    const createdUser = new userModel(userData);
                    console.log(createdUser);
                    createdUser.save()
                        .then(savedPost => {
                            response.send(savedPost);
                        })
                }
            })
        }
    } catch (e) {
        console.log(e);
        response.status(400);
        response.send(e);
    }
}

export async function getAllUser(request: Request, response: Response) {
    try {
        let Users = userModel.find((err: any, User: any) => {
            console.log(User)
            const data = {
                data: User.length > 0 ? User : [],
                message: User.length > 0 ? "Find Success" : "No User Fetched",
                status: User.length > 0 ? "True" : "Empty",
            }
            response.status(200);
            response.send(data);
        });
    } catch (e) {
        console.log(e);
        response.status(400);
        response.send(e);
    }
}

export async function getFunc(request: Request, response: Response) {
    // let h = "mon";
    // const hashpass = await bcrypt.hash(h, 10)
    // let m = "mon";
    // const bashpass = await bcrypt.hash(m, 10)
    // console.log(hashpass, bashpass)
    // let isMatch = await bcrypt.compareSync(m, hashpass)
    // console.log(isMatch);
    response.status(200);
    response.send("Hello")
}

export async function loginAction(request: Request, response: Response) {
    try {
        const { password, mobile } = request.body;
        let User = userModel.find({ user_mobile: mobile }, async (err: any, User: any) => {
            let isMatch = await bcrypt.compareSync(password, User[0].password)
            if (isMatch) {
                const data = {
                    data: User,
                    message: "Login Success",
                    status: "True",
                }
                response.status(200);
                response.send(data);
            } else {
                const data = {
                    data: [],
                    message: "No User Fetched",
                    status: "Failed"
                }
                response.status(400);
                response.send(data);
            }
        });
    } catch (e) {
        console.log(e);
        response.send(e);
        response.status(400);
    }
}
