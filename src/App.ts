import express, { NextFunction, query, Request, Response } from "express";
import startServer from './Server';

import { router as productsRoute } from "./routes/products";
import { router as categoriesRoute } from "./routes/categories";

const app = express();

app.use(express.json())

app.use('/api/products', productsRoute)
app.use('/api/categories', categoriesRoute)


// Check for Invalid Token Error
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  if (err.name === "UnauthorizedError") {
    res.status(err.status).send({ message: err.message });
    return;
  }
  next();
});

startServer(app)