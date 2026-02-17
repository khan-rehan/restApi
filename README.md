# REST API - Blog Posts

A RESTful API for managing blog posts, built with Node.js, Express, and MongoDB. Supports full CRUD operations (Create, Read, Update, Delete) on posts.

## Tech Stack

- **Runtime:** Node.js
- **Framework:** Express.js
- **Database:** MongoDB Atlas (via Mongoose ODM)
- **Middleware:** CORS, Body-parser
- **Dev Tool:** Nodemon

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/posts` | Retrieve all posts |
| POST | `/posts` | Create a new post |
| GET | `/posts/:postId` | Retrieve a specific post by ID |
| PATCH | `/posts/:postId` | Update a post |
| DELETE | `/posts/:postId` | Delete a post |

**Request body example (POST/PATCH):**

```json
{
  "title": "My Post",
  "description": "Post content here"
}
```

## Project Structure

```
restApi/
├── app.js             # Express server setup, DB connection, middleware
├── models/
│   └── Post.js        # Mongoose schema (title, description, date)
├── routes/
│   └── posts.js       # API route handlers
├── .env               # MongoDB connection string
└── package.json
```

## Installation & Setup

1. Clone the repository

   ```sh
   git clone https://github.com/khan-rehan/restApi.git
   cd restApi
   ```

2. Install dependencies

   ```sh
   npm install
   ```

3. Configure the database

   Create a `.env` file with your MongoDB Atlas connection string:

   ```
   DB_CONNECTION=mongodb+srv://<username>:<password>@cluster.mongodb.net/dbname?retryWrites=true&w=majority
   ```

4. Start the server

   ```sh
   npm start
   ```

   The API runs at `http://localhost:3000/`. Use Postman or any HTTP client to test the endpoints.

## Screenshot

<img width="1052" alt="API Screenshot" src="https://user-images.githubusercontent.com/42263217/80071274-f3fd3100-8561-11ea-9f36-57d0abbd2311.png">
