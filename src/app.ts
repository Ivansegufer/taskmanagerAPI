import express from "express";
import config from "config";
import logger from "./api/utils/logger";
import startup from "./api/startup";

const app = express();
const PORT = config.get<number>("PORT") || 5050;

app.use(express.static("public"));

const main = async (): Promise<void> => {
  const wasStartupSuccessful = await startup(app);

  if (wasStartupSuccessful)
    app.listen(PORT, () => {
      logger.info(`Server running on port: ${PORT}`);
    });
  else logger.error("Can't app listen without db connection");
};

main();
