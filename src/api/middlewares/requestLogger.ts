import { Request, Response, NextFunction } from "express";
import logger from "../utils/logger";

export const requestLogger = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  console.log();
  logger.info(
    `hostname: ${req.hostname} endpoint: ${req.path} method: ${req.method}`
  );
  next();
};
