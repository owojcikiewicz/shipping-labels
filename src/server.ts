import express from "express";
import * as bodyParser from "body-parser";
import Router from "./routes/index";

let app = express();

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());
app.use(Router());

app.listen(5000, () => {
    console.log(`[INFO] App running on port ${5000}`);
});