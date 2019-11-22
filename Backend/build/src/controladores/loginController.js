"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Db_1 = __importDefault(require("../../Db"));
class LoginController {
    logear(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { correo } = req.body;
            const { pass } = req.body;
            const usuario = yield Db_1.default.query('SELECT * FROM cuentausuario WHERE correo = ? AND pass = ?', [correo, pass]);
            console.log(usuario.length);
            if (usuario.length > 0) {
                //res.json({ message: 'Usuario encontrado!' });
                return res.json(usuario[0]);
            }
            res.status(404).json({ text: "No existe el usuario" });
        });
    }
}
const loginController = new LoginController;
exports.default = loginController;
