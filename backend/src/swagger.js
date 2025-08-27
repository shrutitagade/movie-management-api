// src/docs/swagger.js
import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Movie Management API',
      version: '1.0.0',
      description: 'Simple Movie Management API (in-memory, ES modules)'
    }
  },
  apis: ['./src/routes/*.js']
};

const spec = swaggerJsdoc(options);

export default function setupSwagger(app) {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(spec));
}
