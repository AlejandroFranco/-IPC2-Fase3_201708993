import { Request, Response } from 'express';


import pool from '../../Db';

class LoginController {


    public async logear(req: Request, res: Response): Promise<any> {
        const { correo } = req.body;
        const { pass } = req.body;
        const usuario = await pool.query('SELECT * FROM cuentausuario WHERE correo = ? AND pass = ?', [correo, pass]);
        console.log(usuario.length);
        if (usuario.length > 0) {
            //res.json({ message: 'Usuario encontrado!' });
            return res.json(usuario[0]);
        }
        res.status(404).json({ text: "No existe el usuario" });
    }
}

const loginController = new LoginController;
export default loginController;