"use strict";
// fileRoutes.ts
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const fileController_1 = require("../controllers/fileController");
const multer_1 = __importDefault(require("multer"));
const router = (0, express_1.Router)();
const fileController = new fileController_1.FileController();
const storage = multer_1.default.memoryStorage();
const upload = (0, multer_1.default)({ storage: storage });
router.post('/api/files', upload.single('file'), (req, res) => {
    fileController.uploadFile(req, res);
});
router.post('/clear-data', (req, res) => {
    fileController.clearData();
    res.status(200).json({ message: 'Data cleared successfully' });
});
exports.default = router;
