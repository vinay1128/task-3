 Books REST API with Node.js and Express

 Description

This is a simple REST API server to manage a list of books stored in memory.  
It supports basic CRUD operations: create, read, update, and delete books.

 Prerequisites

- Node.js installed (https://nodejs.org/)  
- npm (comes with Node.js)  
- Postman or any API testing tool

 Setup Instructions

1. Initialize a new Node.js project:
2. Install express:
3. Save the provided `server.js` file in your project directory.
4. Start the server:

The server will run on http://localhost:3000

 API Endpoints

GET /books

- Returns a JSON array of all books.

 POST /books

- Adds a new book.
- Request body should be JSON with these fields:
  - `title`: string, required
  - `author`: string, required
- Example request body:

```json
{
  "title": "The Great Gatsby",
  "author": "F. Scott Fitzgerald"
}


