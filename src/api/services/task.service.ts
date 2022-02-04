import { omit } from "lodash";
import TaskModel, {
  TaskDocument,
  TaskInput,
  TaskInputPartial,
} from "../models/Task";

export const createTask = async (input: TaskInput) => {
  try {
    const task = await TaskModel.create(input);
    return cleanTaskProperties(task);
  } catch (e: any) {
    throw new Error(e);
  }
};

export const getTasks = async (queryInput?: { completed: boolean }) => {
  try {
    let tasks: (TaskDocument & {
      _id: any;
    })[];
    if (queryInput?.completed != undefined)
      tasks = await TaskModel.find({ completed: queryInput.completed });
    else tasks = await TaskModel.find({});
    return tasks.map((task) => cleanTaskProperties(task));
  } catch (e: any) {
    throw new Error(e);
  }
};

export const getTaskById = async (id: string) => {
  try {
    return await TaskModel.findOne({ _id: id });
  } catch (e: any) {
    throw new Error(e);
  }
};

export const deleteTaskById = async (id: string) => {
  try {
    return await TaskModel.findOneAndDelete({ _id: id });
  } catch (e: any) {
    throw new Error(e);
  }
};

export const updateTaskById = async (id: string, task: TaskInputPartial) => {
  try {
    const taskUpdated = await TaskModel.findOneAndUpdate({ _id: id }, task, {
      new: true,
      runValidators: true,
    });
    return taskUpdated?.toJSON();
  } catch (e: any) {
    throw new Error(e);
  }
};

const cleanTaskProperties = (task: TaskDocument) => {
  return omit(task.toJSON(), "createdAt", "updatedAt", "__v");
};
