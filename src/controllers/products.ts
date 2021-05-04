import { NextFunction, Request, Response } from "express";
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient()

export const getProducts =async (req: Request, res: Response) => {
   prisma.product.findMany().then((q) => {
      res.status(200)
      res.send({ products: q })
   }).catch((err) => {
      console.error(err);
      console.log(">> Error occurred");
   })
}

export const addProduct =async (req: Request, res: Response) => {
   console.log("Product Request", req.body);

   prisma.product.create(
      {
         data: {
            name: req.body.name,
            categoryId: req.body.categoryId
         }
      }
   ).then((q) => {
      res.status(200).send({ message: 'Product created successfully', product: q })
      console.log("Product Response", q);
   }).catch((err) => {
      console.error(err);
      console.log(">> Error occurred");
      res.status(500).send(err)

   })
}

export const getOneProduct =  async (req: Request, res: Response) => {
   prisma.product.findUnique({ where: { id: Number(req.params.id) } }).then((q) => {
      res.status(200)
      res.send(q)
   }).catch((err) => {
      console.error(err);
      console.log(">> Error occurred");
      res.status(500).send(err)

   })
}