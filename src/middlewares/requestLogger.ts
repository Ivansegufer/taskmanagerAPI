import { Request, Response, NextFunction } from "express";
import logger from "../utils/logger";

const requestLogger = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  next();
  console.log();
  logger.info(
    `hostname: ${req.hostname} endpoint: ${req.path} method: ${req.method}`
  );
};

export default requestLogger;
