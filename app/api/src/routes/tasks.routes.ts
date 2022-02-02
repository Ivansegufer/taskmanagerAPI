import { Router } from "express";
import {
  getAllTasks,
  getTask,
  createTaskHandler,
  updateTask,
  deleteTask,
} from "../controllers/tasks";
import { validateResource } from "../middlewares";
import { createTaskSchema } from "../validations/task.schema";

const router = Router();

router
  .route("/")
  .get(getAllTasks)
  .post(validateResource(createTaskSchema), createTaskHandler);
router.route("/:id").get(getTask).patch(updateTask).delete(deleteTask);

export default router;
