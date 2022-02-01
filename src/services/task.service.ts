import { omit } from "lodash";
import TaskModel, { TaskInput } from "../models/Task";

export const createTask = async (input: TaskInput) => {
  try {
    const task = await TaskModel.create(input);
    return omit(task.toJSON(), "createdAt", "updatedAt", "__v");
  } catch (e: any) {
    throw new Error(e);
  }
};
