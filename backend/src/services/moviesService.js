// src/services/moviesService.js
let movies = [];

export async function listMovies({ page = 1, limit = 10 }) {
  const start = (page - 1) * limit;
  return {
    data: movies.slice(start, start + limit),
    total: movies.length,
    page,
    limit,
  };
}

export async function getMovieById(id) {
  return movies.find(m => m.id === id);
}

export async function createMovie(movie) {
  movies.push(movie);
  return movie;
}

export async function updateMovie(id, data) {
  const index = movies.findIndex(m => m.id === id);
  if (index === -1) return null;
  movies[index] = { ...movies[index], ...data };
  return movies[index];
}

export async function deleteMovie(id) {
  const index = movies.findIndex(m => m.id === id);
  if (index === -1) return null;
  const deleted = movies.splice(index, 1);
  return deleted[0];
}
