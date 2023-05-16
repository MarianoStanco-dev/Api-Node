import * as dotenv from "dotenv";
dotenv.config();

import app from "./app";
import config from "./core/config";
import http from "http";

const server = http.createServer(app);
server.listen(config.port, () => {
  console.log(`Server running on port ${config.port}`);
});
