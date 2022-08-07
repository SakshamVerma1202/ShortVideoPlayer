import { Request, Response } from "express";
const path = require("path")
const multer = require("multer")
var uuid = require('uuid');

var uId = '';
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        // Uploads is the Upload_folder_name 
        cb(null, "uploads")
    },
    filename: function (req, file, cb) {

        let extArray = file.mimetype.split("/");
        let extension = extArray[extArray.length - 1];
        uId = uuid.v1() +'.'+ extension;
        cb(null, uId)
    }
})

const maxSize = 1 * 100 * 1000 * 1000; //100mb of file size can be uploaded max

var upload = multer({
    storage: storage,
    limits: { fileSize: maxSize },
    fileFilter: function (req, file, cb) {

        // Set the filetypes, it is optional 
        var filetypes = /webm|mp4|mkv/;
        var mimetype = filetypes.test(file.mimetype);

        var extname = filetypes.test(path.extname(file.originalname).toLowerCase());

        if (mimetype && extname) {
            return cb(null, true);
        }

        cb("Error: File upload only supports the "
            + "following filetypes - " + filetypes);
    }

    // myvid is the name of file attribute 
}).single("myvid");

export async function fileUploadAction(request: Request, response: Response) {
    console.log(request);
    upload(request, response, function (err) {
        if (err) {
            console.log(err)
            response.send(err);
        }
        else {
            response.send(uId);
        }
    })
}