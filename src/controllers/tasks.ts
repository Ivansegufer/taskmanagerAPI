import { Request, Response } from "express";
import { createTask } from "../services/task.service";
import logger from "../utils/logger";
import { CreateTaskInput } from "../validations/task.schema";
import {
  wrapSuccessResponse,
  wrapUnsuccessfulResponse,
} from "../utils/wrapper";

export const getAllTasks = (req: Request, res: Response) => {
  res.send("All tasks").end();
};

export const getTask = (req: Request, res: Response) => {
  res.json({
    id: req.params.id,
  });
};

export const createTaskHandler = async (
  req: Request<{}, {}, CreateTaskInput["body"]>,
  res: Response
) => {
  try {
    const task = await createTask(req.body);
    res.status(201);
    wrapSuccessResponse(res, task);
  } catch (e: any) {
    logger.error(e.message);
    res.status(409);
    e.message = e.message?.replace("MongoServerError: ", "");
    if (e.message?.includes("duplicate key"))
      wrapUnsuccessfulResponse(
        res,
        `Duplicate key from name: [${req.body.name}]`
      );
    else wrapUnsuccessfulResponse(res, e.message);
  }
  res.end();
};

export const updateTask = (req: Request, res: Response) => {
  res.send("Task updated").end();
};

export const deleteTask = (req: Request, res: Response) => {
  res.send("Task deleted");
};
