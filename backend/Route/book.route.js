import express from "express";
import {
  getBook,
  createBook,
  updateBook,
  deleteBook,
} from "../controller/book.controller.js";
import { searchBooks } from "../controller/book.controller.js";


const router = express.Router();

// GET all books
router.get("/", getBook);

// POST add book
router.post("/", createBook);

// PUT update book
router.put("/:id", updateBook);

// DELETE book
router.delete("/:id", deleteBook);
//search route
router.get("/search", searchBooks);


export default router;
