import express from "express";
import * as bodyParser from "body-parser";
import Router from "./routes/index";
import dotenv from "dotenv"; dotenv.config();

let app = express();

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());
app.use(Router());

app.listen(process.env.APP_PORT, () => {
    console.log(`[INFO] App running on port ${process.env.APP_PORT}`);
});