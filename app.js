
const express = require('express');
const app = express();

app.use(express.json());

const PORT = 3000;

// In-memory storage for books
let books = [];
let nextId = 1;

// GET /books - return all books
app.get('/books', (req, res) => {
  res.json(books);
});

// POST /books - add a new book from request body
app.post('/books', (req, res) => {
  const { title, author } = req.body;
  
  if (!title || !author) {
    return res.status(400).json({ error: 'Both title and author are required' });
  }

  const newBook = {
    id: nextId++,
    title,
    author
  };

  books.push(newBook);

  res.status(201).json(newBook);
});

// PUT /books/:id - update a book by ID
app.put('/books/:id', (req, res) => {
  const bookId = parseInt(req.params.id);
  const { title, author } = req.body;

  const book = books.find(b => b.id === bookId);
  if (!book) {
    return res.status(404).json({ error: 'Book not found' });
  }

  if (!title && !author) {
    return res.status(400).json({ error: 'Nothing to update. Provide title or author' });
  }

  if (title) book.title = title;
  if (author) book.author = author;

  res.json(book);
});

// DELETE /books/:id - remove a book
app.delete('/books/:id', (req, res) => {
  const bookId = parseInt(req.params.id);

  const index = books.findIndex(b => b.id === bookId);
  if (index === -1) {
    return res.status(404).json({ error: 'Book not found' });
  }

  const removedBook = books.splice(index, 1)[0];
  res.json(removedBook);
});

app.listen(PORT, () => {
  console.log(`Books API server running on http://localhost:${PORT}`);
});

