import { ErrorRequestHandler, RequestHandler } from "express"
import createError from "http-errors"

export const notFound: RequestHandler = (req, res, next) => {
  next(createError(404))
}

export const errorHandler: ErrorRequestHandler = (error, req, res, next) => {
  const status = error.statusCode || 500;
  const message = error.message;
  const data = error.data;
  res.status(status).json({ message: message, data: data });
}
