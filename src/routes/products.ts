import express from "express";
import { addProduct, getOneProduct, getProducts } from '../controllers/products';
export const router = express.Router();

// Create
router.post('/', addProduct )

// Read
router.get('/', getProducts)
router.get('/:id', getOneProduct)

