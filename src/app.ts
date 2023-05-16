import express from "express";
import cors from "cors";
import run from "./cron";
import cron from "node-cron";
import connSato from "./connection-db/sato.db";

import satoRouter from "./routes/sato.route";
import inventoryRouter from "./routes/inventory.route";

const app = express();
app.use(express.json()); //middleware que tranforma la req.body a un json
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use("/sato", satoRouter);
app.use("/inventory", inventoryRouter);

// conexion base de datos
connSato;

var task = cron.schedule("* * * * *", () => {
  console.log("Cron cada un minuto");
  run();
});

export default app;
