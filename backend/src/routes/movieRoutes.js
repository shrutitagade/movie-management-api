import express from "express";
import * as controller from "../controllers/moviesController.js";
import { createMovieValidator, updateMovieValidator } from "../validators/movieValidator.js";
import { validateRequest } from "../middlewares/validateRequest.js";

const router = express.Router();

router.get("/", controller.getAllMovies);
router.get("/:id", controller.getMovie);
router.post("/", createMovieValidator, validateRequest, controller.createMovie);
router.put("/:id", updateMovieValidator, validateRequest, controller.updateMovie);
router.delete("/:id", controller.deleteMovie);

let movies = [];

/**
 * @openapi
 * /movies:
 *   get:
 *     summary: Get all movies
 *     responses:
 *       200:
 *         description: List of movies
 */


/**
 * @openapi
 * /movies:
 *   post:
 *     summary: Add a new movie
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               director:
 *                 type: string
 *     responses:
 *       201:
 *         description: Movie added
 */


/**
 * @openapi
 * /movies/{id}:
 *   put:
 *     summary: Update a movie
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               director:
 *                 type: string
 *     responses:
 *       200:
 *         description: Movie updated
 */

/**
 * @openapi
 * /movies/{id}:
 *   delete:
 *     summary: Delete a movie
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Movie deleted
 */


export default router;
