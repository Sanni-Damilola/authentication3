import dotenv from "dotenv";
dotenv.config();

import { env } from "process";

export const environmentVarriables = {
  PORT: process.env.PORT as string,
  DB_STRING: process.env.MONGODB_STRING as string,
};
