"use strict";
// index.ts
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const fileRoutes_1 = __importDefault(require("./routes/fileRoutes"));
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
const errorHandling_1 = require("./middlewares/errorHandling");
const corsMiddleware_1 = require("./middlewares/corsMiddleware");
const app = (0, express_1.default)();
app.use(corsMiddleware_1.corsMiddleware);
app.use(express_1.default.json());
app.use(fileRoutes_1.default);
app.use(userRoutes_1.default);
app.use(errorHandling_1.errorHandler);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
