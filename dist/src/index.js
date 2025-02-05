"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const index_1 = __importDefault(require("../models/index"));
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
index_1.default.sync().then(() => {
    console.log('Base de datos sincronizada con éxito');
    app.listen(port, () => {
        console.log(`Servidor corriendo en http://localhost:${port}`);
    });
}).catch((error) => {
    console.error('Error al sincronizar la base de datos:', error);
});
