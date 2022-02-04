import { NextFunction, Request, Response } from "express";
import {
  createTask,
  deleteTaskById,
  getTaskById,
  updateTaskById,
} from "../services/task.service";
import {
  CreateTaskInput,
  DeleteTaskSchema,
  GetAllTasksInput,
  GetTaskInput,
  UpdateTaskSchema,
} from "../validations/task.schema";
import { asyncWrapper } from "../middlewares";
import { getAllTaskByQuery } from "./helpers/tasksByQuery";
import CustomAPIError from "../errors/custom-error";

export const getAllTasksHandler = asyncWrapper(
  async (
    req: Request<{}, {}, {}, GetAllTasksInput["query"]>,
    res: Response
  ) => {
    const tasks = await getAllTaskByQuery(req);
    res
      .status(200)
      .json({
        success: true,
        data: tasks,
      })
      .end();
  }
);

export const getTaskHandler = asyncWrapper(
  async (
    req: Request<GetTaskInput["params"]>,
    res: Response,
    next: NextFunction
  ) => {
    const task = await getTaskById(req.params.id);
    if (!task)
      return next(
        new CustomAPIError(`Task not found with id: ${req.params.id}`, 404)
      );
    res
      .status(200)
      .json({
        success: true,
        data: task,
      })
      .end();
  }
);

export const createTaskHandler = asyncWrapper(
  async (req: Request<{}, {}, CreateTaskInput["body"]>, res: Response) => {
    const task = await createTask(req.body);
    res
      .status(201)
      .json({
        success: true,
        data: task,
      })
      .end();
  }
);

export const updateTaskHandler = asyncWrapper(
  async (
    req: Request<UpdateTaskSchema["params"], {}, UpdateTaskSchema["body"]>,
    res: Response,
    next: NextFunction
  ) => {
    const taskUpdated = await updateTaskById(req.params.id, req.body);
    if (!taskUpdated)
      return next(
        new CustomAPIError(`Task not found with id: ${req.params.id}`, 404)
      );
    res
      .status(200)
      .json({
        success: true,
        data: taskUpdated,
      })
      .end();
  }
);

export const deleteTaskHandler = asyncWrapper(
  async (
    req: Request<DeleteTaskSchema["params"]>,
    res: Response,
    next: NextFunction
  ) => {
    const taskDeleted = await deleteTaskById(req.params.id);
    if (!taskDeleted)
      return next(
        new CustomAPIError(`Task not found with id: ${req.params.id}`, 404)
      );
    res.status(200).json({
      success: true,
      data: taskDeleted,
    });
  }
);
