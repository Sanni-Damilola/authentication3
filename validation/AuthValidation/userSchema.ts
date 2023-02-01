import { NextFunction } from "express";
import joi from "joi";
import { AppError, HttpCode } from "../../utils/AppError";

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

  try {
    value.error
      ? next(
          new AppError({
            message: value.error.details[0].message,
            httpCode: HttpCode.UNPROCESSABLE_IDENTITY,
          })
        )
      : next;
  } catch (error) {
    next(
      new AppError({
        httpCode: HttpCode.BAD_REQUEST,
        message: error,
      })
    );
  }
};
