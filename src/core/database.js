/* eslint-disable no-console */
import mongoose from "mongoose";

export const connect = () => {
  console.log(new Date(), "Database connected");
  return mongoose.connect(process.env.MONGO_CONNECTION_STRING, { autoReconnect: true });
};
