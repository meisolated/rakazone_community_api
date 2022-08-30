"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = process.env.NODE_ENV == "dev" ? 5000 : 3001;
console.log(process.env);
app.get("/", (req, res) => {
    res.send({ nothing: "nothing" });
});
app.listen(port, () => {
    console.log(`Server running on port`);
});
