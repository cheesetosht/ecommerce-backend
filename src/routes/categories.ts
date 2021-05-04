import express from "express";
import { getCategories } from '../controllers/categories';

export const router = express.Router();

// Read
router.get('/', getCategories)