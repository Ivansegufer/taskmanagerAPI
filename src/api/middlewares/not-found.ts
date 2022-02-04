import { Handler } from "express";

export const notFound: Handler = (req, res) => {
  res.status(404).json({
    success: false,
    status: 404,
    msg: "Page not found",
  });
};
