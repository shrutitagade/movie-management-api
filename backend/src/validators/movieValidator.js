import { body, param } from "express-validator";

export const createMovieValidator = [
  body("title").notEmpty().withMessage("Title is required"),
  body("director").notEmpty().withMessage("Director is required"),
  body("releaseYear")
    .isInt({ min: 1800, max: new Date().getFullYear() })
    .withMessage("Release year must be a valid number"),
  body("genre").notEmpty().withMessage("Genre is required"),
  body("rating")
    .isFloat({ min: 1, max: 10 })
    .withMessage("Rating must be between 1 and 10"),
];

export const updateMovieValidator = [
  param("id").isUUID().withMessage("Invalid Movie ID"),
  body("releaseYear").optional().isInt().withMessage("Release year must be a number"),
  body("rating").optional().isFloat({ min: 1, max: 10 }).withMessage("Rating must be between 1 and 10"),
];
