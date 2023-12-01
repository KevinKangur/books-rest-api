import express from 'express';
import { getAllBooks, getBookById, deleteBook, createBook, updateBook } from '../controllers/bookcontrollers.js';

const router = express.Router();

router.get('/', getAllBooks);
router.get('/:id', getBookById);
router.delete('/:id', deleteBook);
router.post('/', createBook);
router.put('/:id', updateBook);

export {router};