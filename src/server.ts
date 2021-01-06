import express from "express";

let app = express();
let router = express.Router();

app.use(express.static(__dirname + "/public"));

app.listen(5000, () => {
    console.log(`[INFO] App running on port ${5000}`);
});