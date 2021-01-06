import {Router} from "express";
import fs from "fs";
import path from "path";

const router = Router();

export default function() {
    router.get("/download/:id", (req, res) => {
        let fileID = req.params.id
        let folderPath = path.join(__dirname, "..", "assets", fileID + ".jpg")

        if (fs.existsSync(folderPath)) {
            res.download(folderPath);
        } else {
            res.json({
                code: 400, 
                message: "file doesn't exist"
            })
            res.status(400);
        };
    });

    return router;
};