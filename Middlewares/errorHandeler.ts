import { Request, Response, NextFunction } from "express";
import { AppError, HttpCode } from "../utils/AppError";

const devError = (err: AppError, res: Response) => {
  return res.status(err.httpCode).json({
    httpCode: err.httpCode,
    error: err,
    message: err.message,
    stack: err.stack,
  });
};

export const errorHandler = (
  err: AppError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  devError(err, res);
};
