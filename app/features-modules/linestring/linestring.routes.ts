import { Router, Request, Response, NextFunction } from "express";
import { ResponseHandler } from "../../utilities/response-handler";
import linestringService from "./linestring.service"
import { Feature, LineString } from "@turf/turf";

const router = Router();


router.post("/intersection", async (req: Request, res: Response, next: NextFunction) => {
    try {
        const lineString = req.body.lineString as Feature<LineString>
        const result = await linestringService.intersection(lineString);
        res.send(new ResponseHandler(result))
    } catch (error) {
        next(error)
    }
})

export default router