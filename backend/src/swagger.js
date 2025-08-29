import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Movie API",
      version: "1.0.0",
      description: "This API allows you to manage movies (CRUD).",
      contact: {
        name: "Shruti Tagade",
        email: "shrutitagade507@gmail.com",
      },
    },
    servers: [
      {
        url: "http://localhost:5000",
        description: "Local server",
      },
    ],
    tags: [
      {
        name: "Movies",
        description: "Operations related to movies",
      },
    ],
    components: {
      schemas: {
        Movie: {
          type: "object",
          required: ["title", "director", "releaseYear", "genre", "rating"],
          properties: {
            id: {
              type: "string",
              description: "Auto-generated ID of the movie",
              example: "b1c5d6a2-1e3f-4c8d-9a9b-12ab34cd56ef",
            },
            title: {
              type: "string",
              description: "Movie title",
              example: "Inception",
            },
            director: {
              type: "string",
              description: "Movie director",
              example: "Christopher Nolan",
            },
            releaseYear: {
              type: "integer",
              description: "Year the movie was released",
              example: 2010,
            },
            genre: {
              type: "string",
              description: "Genre of the movie",
              example: "Sci-Fi",
            },
            rating: {
              type: "number",
              description: "Movie rating (1 to 10)",
              example: 9,
            },
          },
        },
      },
    },
    paths: {
      "/movies": {
        get: {
          tags: ["Movies"],
          summary: "Get all movies",
          responses: {
            200: {
              description: "List of movies",
              content: {
                "application/json": {
                  schema: {
                    type: "array",
                    items: { $ref: "#/components/schemas/Movie" },
                  },
                },
              },
            },
          },
        },
        post: {
          tags: ["Movies"],
          summary: "Create a new movie",
          requestBody: {
            required: true,
            content: {
              "application/json": {
                schema: { $ref: "#/components/schemas/Movie" },
              },
            },
          },
          responses: {
            201: { description: "Movie created successfully" },
          },
        },
      },
      "/movies/{id}": {
        get: {
          tags: ["Movies"],
          summary: "Get a movie by ID",
          parameters: [
            {
              name: "id",
              in: "path",
              required: true,
              schema: { type: "string" },
            },
          ],
          responses: {
            200: {
              description: "Movie found",
              content: {
                "application/json": {
                  schema: { $ref: "#/components/schemas/Movie" },
                },
              },
            },
            404: { description: "Movie not found" },
          },
        },
        put: {
          tags: ["Movies"],
          summary: "Update an existing movie",
          parameters: [
            {
              name: "id",
              in: "path",
              required: true,
              schema: { type: "string" },
            },
          ],
          requestBody: {
            required: true,
            content: {
              "application/json": {
                schema: { $ref: "#/components/schemas/Movie" },
              },
            },
          },
          responses: {
            200: { description: "Movie updated successfully" },
            404: { description: "Movie not found" },
          },
        },
        delete: {
          tags: ["Movies"],
          summary: "Delete a movie",
          parameters: [
            {
              name: "id",
              in: "path",
              required: true,
              schema: { type: "string" },
            },
          ],
          responses: {
            200: { description: "Movie deleted successfully" },
            404: { description: "Movie not found" },
          },
        },
      },
    },
  },
  apis: [], // not scanning JSDoc, using manual definition above
};

const swaggerSpec = swaggerJsdoc(options);

export default function setupSwagger(app) {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
}
