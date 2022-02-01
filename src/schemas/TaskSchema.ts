import { Schema } from "mongoose";
import { TaskDocument } from "../models/Task";

const TaskSchema = new Schema<TaskDocument>({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    required: true,
  },
});

export default TaskSchema;
