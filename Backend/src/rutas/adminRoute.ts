import express, { Router } from 'express';

import adminController from '../controladores/adminController';

class AdminRoutes {

    router: Router = Router();

    constructor() {
        this.config();
    }

    config() {
        this.router.get('/', adminController.list);
    }

}

export default new AdminRoutes().router;