import { Express, json } from "express";
import tasksRouter from "./routes/tasks.routes";

const startup = (app: Express) => {
  app.use(json());
  app.use("/api/v1/tasks", tasksRouter);
};

export default startup;
