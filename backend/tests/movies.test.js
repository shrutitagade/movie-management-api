// tests/movies.test.js
import request from 'supertest';
import app from '../src/app.js';
import * as dao from '../src/dao/movieDao.js';

beforeEach(() => {
  dao.clearAll();
});

describe('Movie API - full flow', () => {
  let id;

  test('POST /movies - create', async () => {
    const res = await request(app).post('/movies').send({
      title: 'The Test Movie',
      director: 'Someone',
      releaseYear: 2020,
      genre: 'Drama',
      rating: 8
    });
    expect(res.status).toBe(201);
    expect(res.body).toHaveProperty('id');
    expect(res.body.title).toBe('The Test Movie');
    id = res.body.id;
  });

  test('GET /movies - list (pagination default)', async () => {
    // create one
    await request(app).post('/movies').send({ title: 'A', rating: 5 });
    const res = await request(app).get('/movies');
    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty('results');
    expect(Array.isArray(res.body.results)).toBe(true);
  });

  test('GET /movies/:id - get by id', async () => {
    const create = await request(app).post('/movies').send({ title: 'ById', rating: 7 });
    const res = await request(app).get(`/movies/${create.body.id}`);
    expect(res.status).toBe(200);
    expect(res.body.title).toBe('ById');
  });

  test('PUT /movies/:id - update', async () => {
    const create = await request(app).post('/movies').send({ title: 'ToUpdate', rating: 6 });
    const res = await request(app).put(`/movies/${create.body.id}`).send({ title: 'Updated', rating: 9 });
    expect(res.status).toBe(200);
    expect(res.body.title).toBe('Updated');
    expect(res.body.rating).toBe(9);
  });

  test('DELETE /movies/:id - delete', async () => {
    const create = await request(app).post('/movies').send({ title: 'ToDelete' });
    const res = await request(app).delete(`/movies/${create.body.id}`);
    expect(res.status).toBe(204);
    const get = await request(app).get(`/movies/${create.body.id}`);
    // After delete, should return 404
    expect(get.status).toBe(404);
  });

  test('Validation: POST without title should fail', async () => {
    const res = await request(app).post('/movies').send({ director: 'X' });
    expect(res.status).toBe(400);
    expect(res.body).toHaveProperty('errors');
  });
});
