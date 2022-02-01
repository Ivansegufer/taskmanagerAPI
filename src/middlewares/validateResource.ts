import { Request, Response, NextFunction } from "express";
import { AnyZodObject } from "zod";

const validate =
  (schema: AnyZodObject) =>
  (req: Request, res: Response, next: NextFunction) => {
    try {
      schema.parse({
        body: req.body,
        params: req.params,
      });
      next();
    } catch (e: any) {
      return res.status(400).send(e.errors).end();
    }
  };

export default validate;
