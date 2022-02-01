import { Document, model } from "mongoose";
import TaskSchema from "../schemas/TaskSchema";

export interface TaskDocument extends Document {
  name: string;
  description: string;
  completed: boolean;
}

const TaskModel = model<TaskDocument>("Task", TaskSchema);

export default TaskModel;
