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

export default router;
