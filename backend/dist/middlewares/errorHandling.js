"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
const errorHandler = (err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send({
        error: {
            message: err.message || 'An unexpected error occurred.',
            stack: process.env.NODE_ENV === 'production' ? '' : err.stack,
        }
    });
};
exports.errorHandler = errorHandler;
