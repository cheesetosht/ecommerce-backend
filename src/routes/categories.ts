import express, { NextFunction, Request, Response } from "express";
import { PrismaClient } from '@prisma/client';
import { getCategories } from '../controllers/categories';

export const router = express.Router();
const prisma = new PrismaClient()

router.get('/', getCategories)