import mongoose from "mongoose";
import { environmentVarriables } from "./environmentVarriables";

const DB = environmentVarriables.DB_STRING;

export async function dbCongig() {
  try {
    const connect = await mongoose.connect(DB);
    console.log(`Database is connected to ${connect.connection.host}`);
  } catch (error) {
    console.log("An error occured in db", error);
  }
}
