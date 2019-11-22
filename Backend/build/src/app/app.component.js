"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const express_1 = require("express");
const app_controller_1 = require("./controllers/app-controller");
let AppComponent = class AppComponent {
    constructor() {
        this.router = express_1.Router();
        this.logeado = false;
        this.config();
    }
    config() {
        //get, post, delete
        this.router.get('/', app_controller_1.appController.index);
    }
    login() {
        this.logeado = true;
        // this.router.navigate(['/admin-module']);
    }
};
AppComponent = __decorate([
    core_1.Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })
], AppComponent);
exports.AppComponent = AppComponent;
const appComponent = new AppComponent();
exports.default = appComponent.router;
