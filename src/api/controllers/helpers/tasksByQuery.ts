import { Request } from "express";
import { getTasks } from "../../services/task.service";
import { tasksType } from "../../types/tasks.types";
import { GetAllTasksInput } from "../../validations/task.schema";

export const getAllTaskByQuery = (
  req: Request<{}, {}, {}, GetAllTasksInput["query"]>
): Promise<tasksType> => {
  if (req.query.completed === "true") return getTasks({ completed: true });
  else if (req.query.completed === "false")
    return getTasks({ completed: false });
  return getTasks();
};
