import { NextFunction, Request, Response } from "express";
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient()

export const getCategories = async (req: Request, res: Response) => {
   prisma.category.findMany().then((q) => {
      res.status(200)
      res.send({ categories: q })
   }).catch((err) => {
      console.error(err);
      console.log(">> Error occurred");
      res.status(500)
   })
}