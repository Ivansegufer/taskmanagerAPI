import express from "express";
import config from "config";
import logger from "./utils/logger";
import startup from "./startup";

const app = express();
const PORT = config.get("PORT");

app.listen(PORT, () => {
  logger.info(`Server running on port: ${PORT}`);
  startup(app);
});
