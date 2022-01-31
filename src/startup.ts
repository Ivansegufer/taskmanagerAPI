import { Express, json } from "express";
import { config } from "dotenv";
import connectDB from "./db/connect";
import tasksRouter from "./routes/tasks.routes";
import logger from "./utils/logger";

config();
const MONGO_URI = process.env.MONGO_URI;

const startup = async (app: Express): Promise<boolean> => {
  app.use(json());
  app.use("/api/v1/tasks", tasksRouter);

  if (MONGO_URI) {
    try {
      await connectDB(MONGO_URI);
      logger.info("Connected to the db");
      return true;
    } catch (error) {
      logger.fatal(`Error connecting to the db: ${error}`);
    }
  } else logger.fatal("The MONGO_URI env variable mustn't be undefined");
  return false;
};

export default startup;
