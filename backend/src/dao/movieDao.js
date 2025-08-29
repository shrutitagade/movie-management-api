import { v4 as uuidv4 } from "uuid";

// Global in-memory array (will persist across requests & tests)
const movies = [];

export function create(movie) {
  const newMovie = { id: uuidv4(), ...movie };
  movies.push(newMovie);
  return newMovie;
}

export function getAll() {
  return movies;
}

export function getById(id) {
  return movies.find((m) => m.id === id) || null;
}

export function update(id, data) {
  const movie = getById(id);
  if (!movie) return null;
  Object.assign(movie, data); // update in place
  return movie;
}

export function remove(id) {
  const index = movies.findIndex((m) => m.id === id);
  if (index === -1) return null;
  const deleted = movies.splice(index, 1)[0];
  return deleted;
}

export function clearAll() {
  movies.length = 0; // reset array
}
