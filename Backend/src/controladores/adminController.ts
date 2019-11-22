import { Request, Response } from 'express';
import pool from '../../Db';

class AdminController {

    public async list(req: Request, res: Response): Promise<void> {
        const cursos = await pool.query('SELECT * FROM curso');
        res.json(cursos);
    }
}

const adminController = new AdminController;
export default adminController;