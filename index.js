import cors from "cors";
import express from "express";
import dotenv from "dotenv";
import {connectDB} from "./utils/DB.js";
import dns from"node:dns/promises";
dns.setServers(["1.1.1.1", "8.8.8.8"]);

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

app.listen(5050, () => {
    console.log("Server is running on port 5050");
});