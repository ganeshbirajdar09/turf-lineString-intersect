"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = require("dotenv");
const app_1 = require("./app/app");
// read environment variables from the '.env' file
(0, dotenv_1.config)();
(0, app_1.startServer)();
