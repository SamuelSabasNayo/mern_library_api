const { Router } = require('express');
const {
  createBook,
  getAllBooks,
  getBook,
  updateBook,
  deleteBook,
  getPublishedBooks
} = require('../controllers/bookControllers');

const router = Router();

router.route('/books').get(getAllBooks).post(createBook);
router.route('/books/:id').get(getBook).patch(updateBook).delete(deleteBook);
router.route('/books/published').get(getPublishedBooks);

module.exports = router;
