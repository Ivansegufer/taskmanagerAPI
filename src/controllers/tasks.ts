import { Request, Response } from "express";

export const getAllTasks = (req: Request, res: Response) => {
  res.send("All tasks").end();
};

export const getTask = (req: Request, res: Response) => {
  res.send("Single task").end();
};

export const createTask = (req: Request, res: Response) => {
  res.send("Task created").end();
};

export const updateTask = (req: Request, res: Response) => {
  res.send("Task updated").end();
};

export const deleteTask = (req: Request, res: Response) => {
  res.send("Task deleted");
};
