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
class CursoController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const cursos = yield Db_1.default.query('SELECT * FROM curso');
            res.json(cursos);
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const cursos = yield Db_1.default.query('SELECT * FROM curso WHERE id = ?', [id]);
            console.log(cursos.length);
            if (cursos.length > 0) {
                return res.json(cursos[0]);
            }
            res.status(404).json({ text: "No existe el curso" });
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield Db_1.default.query('INSERT INTO curso set ?', [req.body]);
            res.json({ message: 'Curso guardado' });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const oldCurso = req.body;
            yield Db_1.default.query('UPDATE curso set ? WHERE id = ?', [req.body, id]);
            res.json({ message: "El curso fue actualizado" });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield Db_1.default.query('DELETE FROM curso WHERE id = ?', [id]);
            res.json({ message: "El curso fue eliminado" });
        });
    }
}
const cursoController = new CursoController;
exports.default = cursoController;
