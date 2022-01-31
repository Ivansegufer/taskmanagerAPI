import mongoose from "mongoose";
import logger from "../utils/logger";

const connectDB = (url: string): Promise<mongoose.Mongoose> => {
  return mongoose.connect(url);
};

export default connectDB;
