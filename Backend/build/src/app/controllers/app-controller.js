"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AppController {
    index(req, res) {
        res.json({ text: 'INDEX' });
        // pool.query('DESCRIBE rol');
    }
}
exports.appController = new AppController;
