"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const config_1 = __importDefault(require("config"));
const port = config_1.default.get("port");
const app = (0, express_1.default)();
app.get("/", (req, res) => {
    res.send("Express + Typescript Servers");
});
app.listen(port, () => {
    console.log(`Servers running at http://localhost:${port}`);
});
