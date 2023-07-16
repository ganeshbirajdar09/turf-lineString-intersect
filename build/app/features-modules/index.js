"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const auth_routes_1 = __importDefault(require("./auth/auth.routes"));
const linestring_routes_1 = __importDefault(require("./linestring/linestring.routes"));
exports.default = {
    AuthRouter: auth_routes_1.default,
    LineStringRouter: linestring_routes_1.default
};
