import {Router} from "express";
import {createLabel} from "../utils/label";

const router = Router();

export default function() {
    router.post("/create", (req, res) => {
        let body = req.body; 

        if (!body || !body.sender || !body.recipient || !body.carrier || !body.address) {
            res.json({
                code: 400, 
                message: "missing parameter"
            });
            res.status(400);
            return; 
        };

        createLabel({
            sender: body.sender, 
            recipient: body.recipient, 
            carrier: body.carrier, 
            address: body.address,
            notes: body.notes || ""
        })
        .then(id => {
            if (id == "error") {
                res.sendStatus(500);
                return;
            };

            res.json({
                code: 200, 
                message: id
            });
        })
    });

    return router;
};