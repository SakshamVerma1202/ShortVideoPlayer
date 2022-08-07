import "reflect-metadata";
import { Request, Response } from "express";
import * as express from "express";
import * as bodyParser from "body-parser";
import { AppRoutes } from "./routes";
var cors = require('cors');
import Db from './app';

const db = new Db();
const app = express();


app.use(bodyParser.urlencoded({ extended: true }))

app.use(bodyParser.json());
app.use(cors())

app.use('/videos', express.static('uploads'));

AppRoutes.forEach(route => {
    app[route.method](route.path, (request: Request, response: Response) => {
        console.log(route.path)
        route.action(request, response)
    });
});

app.listen(3001);
console.log("Express application is up and running on port 3001");