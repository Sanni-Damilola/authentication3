import express, { Application } from "express";
import dotenv from "dotenv";
import { environmentVarriables } from "./Config/environmentVarriables";
import { appConfig } from "./app";
import { dbCongig } from "./Config/db";

const PORT = environmentVarriables.PORT || 2002;

const app: Application = express();
appConfig(app);
dbCongig();

app.listen(PORT, () => {
  console.log("");
  console.log(`Done on port ${PORT}`);
});
