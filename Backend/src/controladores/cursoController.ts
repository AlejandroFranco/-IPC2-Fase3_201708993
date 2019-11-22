import { Request, Response } from 'express';


import pool from '../../Db';

class CursoController {

    public async list(req: Request, res: Response): Promise<void> {
        const cursos = await pool.query('SELECT * FROM curso');
        res.json(cursos);
    }

    public async getOne(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const cursos = await pool.query('SELECT * FROM curso WHERE id = ?', [id]);
        console.log(cursos.length);
        if (cursos.length > 0) {
            return res.json(cursos[0]);
        }
        res.status(404).json({ text: "No existe el curso" });
    }

    public async create(req: Request, res: Response): Promise<void> {
        const result = await pool.query('INSERT INTO curso set ?', [req.body]);
        res.json({ message: 'Curso guardado' });
    }

    public async update(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        const oldCurso = req.body;
        await pool.query('UPDATE curso set ? WHERE id = ?', [req.body, id]);
        res.json({ message: "El curso fue actualizado" });
    }

    public async delete(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('DELETE FROM curso WHERE id = ?', [id]);
        res.json({ message: "El curso fue eliminado" });
    }
}

const cursoController = new CursoController;
export default cursoController;