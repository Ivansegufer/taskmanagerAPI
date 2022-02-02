import { Schema } from "mongoose";
import { TaskDocument } from "../models/Task";

const TaskSchema = new Schema<TaskDocument>(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    completed: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  { timestamps: true }
);

export default TaskSchema;
