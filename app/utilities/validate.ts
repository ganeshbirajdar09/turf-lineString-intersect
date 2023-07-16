import { NextFunction, Request, Response } from "express";
import { validationResult } from "express-validator";

//express-validator middleware to validate the format of the incoming requests
export const validate = (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return next({ statusCode: 400, errors: errors.array() });
    next();
}

