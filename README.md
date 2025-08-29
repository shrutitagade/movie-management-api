
# Movie Management API - Backend Development Assignment

This project is a **Movie Management API** built for backend development evaluation. It supports full CRUD operations for movies, includes unit testing, and Swagger/OpenAPI documentation. The project follows the **MVC (Model-View-Controller) design pattern** for proper separation of concerns.

---

## **Project Link**

GitHub repository: [https://github.com/shrutitagade/movie-management-api](https://github.com/shrutitagade/movie-management-api)

---

## **Features**

* Full CRUD operations for `Movie` entity:

  * `id` (UUID)
  * `title` (required)
  * `director`
  * `releaseYear`
  * `genre`
  * `rating` (1 to 10)

* **API Endpoints**:

  * `GET /movies` — List all movies
  * `GET /movies/:id` — Get movie by ID
  * `POST /movies` — Create a new movie
  * `PUT /movies/:id` — Update existing movie
  * `DELETE /movies/:id` — Delete a movie by ID

* Input validation for required fields.

* Unit tests covering DAO logic and API endpoints.

* Swagger/OpenAPI 3.0 documentation auto-generated.

* In-memory database using an array for persistence.

* Follows **MVC architecture**:

  * **Models** → Data and DAO operations
  * **Controllers** → Route handlers
  * **Routes** → API endpoints

* Proper error handling for missing fields and non-existent IDs.

---

## **Tech Stack**

* **Backend**: Node.js, Express.js
* **Testing**: Jest, Supertest
* **Documentation**: Swagger/OpenAPI 3.0
* **Database**: In-memory (array)
* **Utilities**: UUID for unique IDs
* **Dev Tools**: Nodemon for auto-reloading

---

## **Installation (Windows CMD)**

1. Clone the repository:

```cmd
git clone https://github.com/shrutitagade/movie-management-api.git
cd movie-management-api
```

2. Install dependencies:

```cmd
npm install
```

---

## **Running the Project**

### **Development Mode (with auto-reload)**

```cmd
npm run dev
```

> Uses **nodemon** to automatically restart the server on file changes.
> Server will run on: `http://localhost:5000`

### **Production Mode**

```cmd
npm start
```

---

## **API Endpoints**

* `GET /movies` — Retrieve all movies
* `GET /movies/:id` — Retrieve a movie by ID
* `POST /movies` — Create a movie (send JSON body)
* `PUT /movies/:id` — Update a movie (send JSON body)
* `DELETE /movies/:id` — Delete a movie by ID

**Example JSON for creating/updating a movie:**

```json
{
  "title": "The Test Movie",
  "director": "Someone",
  "releaseYear": 2020,
  "genre": "Drama",
  "rating": 8
}
```

---

## **Swagger/OpenAPI Documentation**

Swagger UI is available at:

```
http://localhost:5000/api-docs
```

---

## **Running Tests**

Unit and integration tests are included using **Jest** and **Supertest**.

```cmd
npm test
```

Tests cover:

* DAO operations (create, read, update, delete)
* API endpoints (all CRUD operations)
* Validation scenarios

---

## **Notes**

* Uses an **in-memory database**, so all data resets when the server restarts.
* Fully tested with unit and API tests to ensure correct CRUD operations.
* No changes to controllers are required — everything works as implemented.
* Follows **MVC design pattern** for clean separation of concerns and maintainability.

---

### **Author**

Shruti Tagade
[GitHub](https://github.com/shrutitagade) | [LinkedIn](https://www.linkedin.com/in/shruti-tagade-4a6668253/)

---

