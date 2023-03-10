import { Request, Response, NextFunction } from "express";

export const asynHandler = (fn: any) => {
  return (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(fn(req, res, next));
  };
};
