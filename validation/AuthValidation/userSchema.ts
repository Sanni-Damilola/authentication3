import { NextFunction } from "express";
import joi from "joi";

export const validator = (
  body: object,
  schemaName: joi.ObjectSchema,
  next: NextFunction
) => {
  const value = schemaName.validate(body, {
    allowUnknown: true,
    abortEarly: false,
    stripUnknown: true,
  });
};
