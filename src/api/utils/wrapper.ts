import { Response } from "express";

export const wrapSuccessResponse = (res: Response, data: any): void => {
  res.json({
    success: true,
    data,
  });
};

export const wrapUnsuccessfulResponse = (res: Response, msg: any): void => {
  res.json({
    success: false,
    msg,
  });
};
