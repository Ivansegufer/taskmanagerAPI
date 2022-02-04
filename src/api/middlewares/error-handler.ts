import { Request, Response, NextFunction } from "express";
import { ICustomError } from "../errors/custom-error";
import logger from "../utils/logger";

export const erroHandlerMiddleware = (
  error: ICustomError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  logger.error(error.message);
  return res.status(error.statusCode || 500).json({
    success: false,
    msg: error.message,
  });
};
