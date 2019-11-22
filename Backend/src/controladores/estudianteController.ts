import { Request, Response } from 'express';
import pool from '../../Db';

class EstudianteController {

    public async list(req: Request, res: Response): Promise<void> {
        const games = await pool.query('SELECT * FROM cursosemestre');
        res.json(games);
    }
}

const estudianteController = new EstudianteController;
export default estudianteController;