import express, { Application, NextFunction, Request, Response } from "express";
import cors from "cors";
import morgan from "morgan";
import { AppError, HttpCode } from "./utils/AppError";
import { errorHandler } from "./Middlewares/errorHandeler";

export const appConfig = (app: Application) => {
  app.use(cors()).use(morgan("dev")).use(express.json());

  //   catch wrong
  app.all("*", (req: Request, res: Response, next: NextFunction) => {
    next(
      new AppError({
        message: `This route ${req.originalUrl} does not exist`,
        httpCode: HttpCode.NOT_FOUND,
      })
    );
  })

  //   error middleware
  .use(errorHandler)
};
