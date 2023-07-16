import { Application, json, NextFunction, Request, Response, urlencoded } from "express";
import { authorize } from "../utilities/authorize";
import { ResponseHandler } from "../utilities/response-handler";
import { excludedPaths, routes } from "./routes.data";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";


export const registerRoutes = (app: Application) => {
    app.use(json());
    app.use(cors({ origin: "*" }))
    app.use(helmet())
    app.use(urlencoded({ extended: true }))
    app.use(authorize(excludedPaths));
    app.use(morgan("dev"));


    for (let route of routes) {
        app.use(route.path, route.router);
    }

    app.use((err: any, req: Request, res: Response, next: NextFunction) => {
        res
            .status(err.statusCode || 500)
            .send(new ResponseHandler(null, err));
    })

}