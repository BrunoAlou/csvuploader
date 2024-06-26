"use strict";
// userRoutes.ts
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userController_1 = require("../controllers/userController");
const router = (0, express_1.Router)();
const userController = new userController_1.UserController();
router.get('/api/users', userController.searchInCSV);
exports.default = router;
