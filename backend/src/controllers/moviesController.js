import * as MovieModel from "../models/movieModel.js";

// Validation helper
const validateMovie = (data) => {
  const requiredFields = ["title", "director", "releaseYear", "genre", "rating"];
  const missing = requiredFields.filter(field => !data[field]);
  if (missing.length > 0) {
    return `Missing fields: ${missing.join(", ")}`;
  }
  return null;
};

// GET all movies
export const getAllMovies = (req, res) => {
  res.json(MovieModel.getMovies());
};

// GET movie by ID
export const getMovie = (req, res) => {
  const movie = MovieModel.getMovieById(req.params.id);
  if (!movie) return res.status(404).json({ message: "Movie not found" });
  res.json(movie);
};

// CREATE new movie
export const createMovie = (req, res) => {
  const error = validateMovie(req.body);
  if (error) return res.status(400).json({ message: error });

  const newMovie = MovieModel.addMovie(req.body);
  res.status(201).json(newMovie);
};

// UPDATE movie
export const updateMovie = (req, res) => {
  const movie = MovieModel.updateMovie(req.params.id, req.body);
  if (!movie) return res.status(404).json({ message: "Movie not found" });
  res.json(movie);
};

// DELETE movie
export const deleteMovie = (req, res) => {
  const deleted = MovieModel.deleteMovie(req.params.id);
  if (!deleted) return res.status(404).json({ message: "Movie not found" });
  res.json({ message: "Movie deleted successfully" });
};
