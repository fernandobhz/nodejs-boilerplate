/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import { ExposableError } from "../classes/errors";

export function errorHandler(err, req, res, next) {
  if (err instanceof ExposableError) {
    res.status(err.statusCode || 400).json(err.message);
  } else {
    console.error(err);
    res.status(500).json("Internal sever error, contact support");
  }
}
