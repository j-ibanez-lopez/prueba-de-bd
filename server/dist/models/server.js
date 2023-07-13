"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// Cómo la exportación es por defecto, se puede poner cualquier
// nombre a la constante importada a continuación.
const persona_routes_1 = __importDefault(require("../routes/persona.routes"));
// import connection from '../db/conection'
const cors_1 = __importDefault(require("cors"));
// También serviría desestructurando el importe
// llamando sólo a los métodos:
// import { Application } from 'express';
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || '3000';
        this.middlewares(); // Obligatorio indicarlo antes de 'this.router'
        this.router();
        console.log('He incicializado bien el servidor.');
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log(` El servidor está escuchando desde el puerto ${this.port}`);
        });
    }
    middlewares() {
        console.log('Estoy en el middleware');
        this.app.use(express_1.default.json());
        // Cors
        this.app.use((0, cors_1.default)());
    }
    router() {
        this.app.use('/api/personas', persona_routes_1.default);
    }
}
exports.default = Server;
