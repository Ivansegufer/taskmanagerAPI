import { FlattenMaps, LeanDocument } from "mongoose";
import { TaskDocument } from "../models/Task";

export type tasksType = Pick<
  FlattenMaps<LeanDocument<TaskDocument>>,
  "completed" | "updateAt" | "name" | "description" | "_id" | "id"
>[];
