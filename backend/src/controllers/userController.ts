// src/controllers/userController.ts

import { Request, Response } from 'express';
import { UserService } from '../services/userService';

export class UserController {
    private userService: UserService;

    constructor() {
        this.userService = new UserService();
    }

    public searchInCSV = async (req: Request, res: Response) => {
        try {
            const query = req.query.q as string;
            const results = this.userService.searchInCSV(query);

            res.status(200).json({ data: results });
        } catch (error) {
        }
    }
}
