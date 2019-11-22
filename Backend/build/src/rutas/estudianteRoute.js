"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const estudianteController_1 = __importDefault(require("../controladores/estudianteController"));
class EstudianteRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', estudianteController_1.default.list);
    }
}
exports.default = new EstudianteRoutes().router;
