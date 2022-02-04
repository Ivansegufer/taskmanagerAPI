import { Router } from "express";
import {
  createTaskHandler,
  getAllTasksHandler,
  getTaskHandler,
  deleteTaskHandler,
  updateTaskHandler,
} from "../controllers/tasks";
import { validateResource } from "../middlewares";
import {
  createTaskSchema,
  deleteTaskSchema,
  getAllTasksSchema,
  getTaskSchema,
  updateTaskSchema,
} from "../validations/task.schema";

const router = Router();

router
  .route("/")
  .get(validateResource(getAllTasksSchema), getAllTasksHandler)
  .post(validateResource(createTaskSchema), createTaskHandler);
router
  .route("/:id")
  .get(validateResource(getTaskSchema), getTaskHandler)
  .patch(validateResource(updateTaskSchema), updateTaskHandler)
  .delete(validateResource(deleteTaskSchema), deleteTaskHandler);

export default router;
