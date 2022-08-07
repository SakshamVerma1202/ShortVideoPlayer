import { Request, Response } from "express";
import videologModel from "../entity/videolog";
import { Videolog } from "../entity/videolog";
import { video_path } from "../util/constant";

export async function videologSaveAction(request: Request, response: Response) {
    const videologData: Videolog = request.body;
    const createdVideolog = new videologModel(videologData);
    createdVideolog.save()
        .then(savedPost => {
            response.send(savedPost);
        })
}

export async function videologGetAction(request: Request, response: Response) {
    let Videolog = videologModel.find((err: any, Videolog: any) => {
        if (err) {
            response.send(err);
        } else {
            console.log("request appeared")
            const data = {
                data: Videolog.length > 0 ? Videolog : [],
                message: "success",
                status: true,
                vid_path: video_path
            }
            response.send(data);
        }
    });
}

export async function videologGetLatestVideos(request: Request, response: Response) {
    let Videolog = videologModel.find((err: any, Videolog: any) => {
        if (err) {
            response.send(err);
        } else {
            var lengthOfVideolog = Videolog.length
            var newVideolog = [1, 2, 3, 4, 5]
            var i = 0;
            var newLengthOfVideolog = lengthOfVideolog - 1
            while (i < 5) {
                newVideolog[i] = Videolog[newLengthOfVideolog];
                i++;
                newLengthOfVideolog--;
            }
            const data = {
                data: newVideolog,
                message: "success",
                status: true,
                vid_path: video_path
            }
            response.send(data)
        }
    });
}

export async function videologSearch(request: Request, response: Response) {
    let VideologData = videologModel.find({ "$or": [{ videoName: { $regex: request.params.videoName.trim() } }] }, (err: any, VideologData: any) => {
        if (err) {
            response.send(err);
        } else {
            response.send(VideologData)
        }
    });
}

export async function videologDeleteAction(request: Request, response: Response) {
    videologModel.deleteOne({ videoName: request.params.videoName.trim() }, function (err) {
        if (!err) {
            let Videolog = videologModel.find((err: any, Videolog: any) => {
                if (err) {
                    response.send(err);
                } else {
                    response.send(Videolog);
                }
            });
        }
        else {
        }
    });
}

export async function videologFindAction(request: Request, response: Response) {
    let VideologData = videologModel.find({ videoName: request.params.videoName.trim() }, (err: any, VideologData: any) => {
        if (err) {
            response.send(err);
        } else {
            const data = {
                data: VideologData,
                message: "success",
                status: true,
                vid_path: video_path
            }
            response.send(data);
        }
    });
}