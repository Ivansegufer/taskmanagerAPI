import { Router } from "express";
import {
  getAllTasks,
  getTask,
  createTask,
  updateTask,
  deleteTask,
} from "../controllers/tasks";
import validateResource from "../middlewares/validateResource";
import { createTaskSchema } from "../validations/task.schema";

const router = Router();

router
  .route("/")
  .get(getAllTasks)
  .post(validateResource(createTaskSchema), createTask);
router.route("/:id").get(getTask).patch(updateTask).delete(deleteTask);

export default router;
