import express from "express";
import { addProduct, getOneProduct, getProducts } from '../controllers/products';
export const router = express.Router();

router.get('/', getProducts)

router.post('/', addProduct )

router.get('/:id', getOneProduct)

