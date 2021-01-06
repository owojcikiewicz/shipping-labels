import {Router} from "express";
import CreateRouter from "./create";
import DownloadRouter from "./download";

const router = Router();

export default function() {
    router.use(CreateRouter());
    router.use(DownloadRouter());
    
    return router;
}