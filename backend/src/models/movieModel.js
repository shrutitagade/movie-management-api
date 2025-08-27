// In-memory "database"
import { v4 as uuidv4 } from 'uuid';

let movies = [
  { id: uuidv4(), title: "The Shawshank Redemption", director: "Frank Darabont", releaseYear: 1994, genre: "Drama", rating: 9 },
  { id: uuidv4(), title: "The Godfather", director: "Francis Ford Coppola", releaseYear: 1972, genre: "Crime", rating: 9 },
  { id: uuidv4(), title: "The Dark Knight", director: "Christopher Nolan", releaseYear: 2008, genre: "Action", rating: 9 },
  { id: uuidv4(), title: "Pulp Fiction", director: "Quentin Tarantino", releaseYear: 1994, genre: "Crime", rating: 8 },
  { id: uuidv4(), title: "Forrest Gump", director: "Robert Zemeckis", releaseYear: 1994, genre: "Drama", rating: 8 }
];

export const getMovies = () => movies;

export const getMovieById = (id) => movies.find(m => m.id === id);

export const addMovie = (movie) => {
  const newMovie = { id: uuidv4(), ...movie };
  movies.push(newMovie);
  return newMovie;
};

export const updateMovie = (id, updatedData) => {
  const index = movies.findIndex(m => m.id === id);
  if (index === -1) return null;
  movies[index] = { ...movies[index], ...updatedData };
  return movies[index];
};

export const deleteMovie = (id) => {
  const index = movies.findIndex(m => m.id === id);
  if (index === -1) return null;
  return movies.splice(index, 1)[0];
};
