import { Request, Response, NextFunction } from 'express';

export const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
    console.error(err.stack);

    res.status(500).send({
        error: {
            message: err.message || 'An unexpected error occurred.',
            stack: process.env.NODE_ENV === 'production' ? '' : err.stack,
        }
    });
};
