import express, { Router } from 'express';

import loginController from '../controladores/loginController';

class LoginRoutes {

    router: Router = Router();

    constructor() {
        this.config();
    }

    config() {
        this.router.post('/', loginController.logear);
    }

}

export default new LoginRoutes().router;