# Express PostgreSQL CRUD API

A lightweight RESTful API built with **Express.js** and **PostgreSQL**. This repository provides a simple user management system with full CRUD operations and a clean, modular codebase suitable for learning or bootstrapping small applications.

---

## 🚀 Key Features

- Modular structure: routes, controllers, services, middleware, and config separated
- PostgreSQL connection managed with `pg` and environment variables
- Automatic table creation at startup (`create.user.table.js`)
- Input validation using **Joi**
- Centralized error handling middleware
- ES module (`type: "module"`) project with modern syntax
- Development support with `nodemon`

---

## 🧱 Project Structure

```
express-postgresql-crud-api/
├─ package.json
├─ README.md
├─ .env                # not checked in
└─ src/
   ├─ app.js           # app configuration
   ├─ index.js         # server entry point
   ├─ config/
   │  └─ db.js         # pg Pool configuration
   ├─ controllers/
   │  └─ user.controllers.js
   ├─ models/
   │  ├─ create.user.table.js  # creates `users` table if missing
   │  └─ data.sql              # same SQL used by create.user.table.js
   ├─ middleware/
   │  ├─ errorHandaling.js     # global error handler
   │  └─ inputValidator.js     # request body validator
   ├─ routes/
   │  └─ user.routes.js
   └─ services/
      └─ user.services.js      # database queries
```

> ✨ The `app.js` file imports and executes `create.user.table.js`, so no manual migration step is required when starting the server.

---

## 🔧 Getting Started

1. **Clone the repo**

   ```bash
   git clone <repo-url>
   cd express-postgresql-crud-api
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Configure environment variables**
   Create a `.env` file in the root with the following keys (adapt values to your setup):

   ```env
   DB_USER=youruser
   DB_PASSWORD=yourpassword
   DB_HOST=localhost
   DB_PORT=5432
   DB_DATABASE=yourdb
   PORT=3000
   ```

4. **Start the application**
   - Development mode (auto‑restart on changes):
     ```bash
     npm run dev
     ```
   - Production mode:
     ```bash
     npm start
     ```

   The server listens on `http://127.0.0.1:$PORT` (default 3000) and will create the `users` table if it doesn’t already exist.

---

## 📡 API Endpoints (base path `/api`)

| Method | Endpoint         | Description         |
| ------ | ---------------- | ------------------- |
| POST   | `/api/users`     | Create a new user   |
| GET    | `/api/users`     | List all users      |
| GET    | `/api/users/:id` | Retrieve user by ID |
| PUT    | `/api/users/:id` | Update user by ID   |
| DELETE | `/api/users/:id` | Delete user by ID   |

### Sample Request Body (POST/PUT)

```json
{
  "name": "John Doe",
  "email": "john@example.com"
}
```

> ⚠️ `age` field is not stored by the current schema; only `name` and `email` are required.

---

## 🛠️ Middleware

- **`inputValidator.js`** – validates incoming payloads using Joi; responds with `400` on validation error.
- **`errorHandaling.js`** – catches thrown errors and responds with a `500` status and message.

---

## 📦 Dependencies

```json
{
  "express": "^5.2.1",
  "pg": "^8.19.0",
  "dotenv": "^17.3.1",
  "joi": "^18.0.2",
  "cors": "^2.8.6",
  "nodemon": "^3.1.14" // dev
}
```

---

## 📝 Notes

- The database configuration keys match those logged during startup by `src/config/db.js`.
- To run the raw SQL directly, use the contents of `src/models/data.sql`.
- This project is intended for educational/demo purposes and does not include authentication or production‑grade error handling.

---

## 📞 Contact

For issues or contributions, please open an issue or submit a pull request on the repository.
