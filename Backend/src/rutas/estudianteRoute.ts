import express, { Router } from 'express';

import estudianteController from '../controladores/estudianteController';

class EstudianteRoutes {

    router: Router = Router();

    constructor() {
        this.config();
    }

    config() {
        this.router.get('/', estudianteController.list);
    }

}

export default new EstudianteRoutes().router;