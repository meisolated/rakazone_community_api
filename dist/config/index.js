"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const config = {
    mongoUri: process.env.NODE_ENV == "dev"
        ? process.env.MONGO_DEV_URI
        : process.env.MONGO_PRO_URI,
};
exports.default = config;
