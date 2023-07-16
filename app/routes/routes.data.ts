import { ExcludedPath, ExcludedPaths } from "../utilities/authorize";
import { Route, Routes } from "./routes.types";
import Routers from "../features-modules/index"


export const routes: Routes = [
    new Route("/auth", Routers.AuthRouter),
    new Route("/lines", Routers.LineStringRouter),
];


//paths on which not to check token
export const excludedPaths: ExcludedPaths = [
    new ExcludedPath("/auth/login", "POST"),
];