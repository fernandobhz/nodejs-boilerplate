/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import * as classes from "../classes";

export function errorHandler(err, req, res, next) {
  console.error(err);
  if (err instanceof classes.errors.ExposableError) res.status(err.statusCode || 400).json(err.message);
  else res.status(500).json("Internal sever error, contact support");
}
