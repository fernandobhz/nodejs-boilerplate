export class ExposableError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.name = "ExposableError";
    this.statusCode = statusCode;
    this.status = statusCode;
  }
}
