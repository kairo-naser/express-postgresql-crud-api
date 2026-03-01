# Express PostgreSQL CRUD API

A simple RESTful CRUD API built with Express.js and PostgreSQL. This repository demonstrates how to create a basic API for managing users with create, read, update, and delete operations.

## 🚀 Features

- Express.js server with organized folder structure
- PostgreSQL integration using `pg` package
- Controllers, models, routes, and middleware separation
- Input validation and error handling middleware
- SQL script for table creation and sample data

## 🧱 Project Structure

```
package.json
README.md
src/
  app.js
  config/
    db.js
  controllers/
    user.controllers.js
  data/
    create.user.table.js
    data.sql
  middleware/
    errorHandaling.js
    inputValidator.js
  models/
    user.models.js
  routes/
    user.routes.js
```

## 🔧 Setup

1. Clone the repository:
   ```bash
   git clone <repo-url>
   cd express-postgresql-crud-api
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the project root and configure your PostgreSQL connection:
   ```env
   PGHOST=localhost
   PGUSER=youruser
   PGPASSWORD=yourpassword
   PGDATABASE=yourdb
   PGPORT=5432
   ```

4. Run the SQL script to create the `users` table (alternatively use a migration tool):
   ```bash
   node src/data/create.user.table.js
   # or run the SQL in data/data.sql against your database
   ```

5. Start the server:
   ```bash
   npm start
   ```

## 📡 API Endpoints

| Method | Endpoint           | Description               |
|--------|--------------------|---------------------------|
| POST   | `/users`           | Create a new user         |
| GET    | `/users`           | Get all users             |
| GET    | `/users/:id`       | Get user by ID            |
| PUT    | `/users/:id`       | Update user by ID         |
| DELETE | `/users/:id`       | Delete user by ID         |

### Example Request Body for POST / PUT
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "age": 30
}
```

## 🛠️ Middleware

- `inputValidator.js`: Validates request body for required fields and formats.
- `errorHandaling.js`: Central error handler catching and formatting errors.

## 📦 Dependencies

- express
- pg
- dotenv
- body-parser (if used)

## 📝 Notes

- Adjust the database configuration as necessary for your environment.
- This project is intended for learning and demonstration purposes.

## 📞 Contact

For questions or feedback, open an issue or contact the repository owner.
