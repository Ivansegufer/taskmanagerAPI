import { Document, model } from "mongoose";
import TaskSchema from "../schemas/TaskSchema";

export interface TaskInputPartial {
  name?: string;
  description?: string;
  completed?: boolean;
}

export interface TaskInput {
  name: string;
  description: string;
  completed?: boolean;
}

export interface TaskDocument extends TaskInput, Document {
  createdAt: Date;
  updateAt: Date;
}

const TaskModel = model<TaskDocument>("Task", TaskSchema);

export default TaskModel;
