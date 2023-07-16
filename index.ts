import { config } from "dotenv";
import { startServer } from "./app/app";

// read environment variables from the '.env' file
config();


startServer();