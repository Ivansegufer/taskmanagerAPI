import { Request, Response, NextFunction, Handler } from "express";

export const asyncWrapper = (
  fn: (req: Request<any>, res: Response, next: NextFunction) => Promise<void>
): Handler => {
  return async (req, res, next) => {
    try {
      await fn(req, res, next);
    } catch (e: any) {
      next(e);
    }
  };
};
