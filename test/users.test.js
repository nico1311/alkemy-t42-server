const supertest = require('supertest');
const { app } = require('../app');
const { register } = require('../controllers/AuthController');
// Set supertest to fake api.
const api = supertest(app);
// Request GET for /api/users
describe('API route /api/users - Request GET - Get all users', () => {
  test('Get all users without token Authorization.', async () => {
    await api
      .get('/api/users')
      .set('Content-Type', 'application/json')
      .expect('Content-Type', /json/)
      .expect(400, { error: 'No token provided' });
  });
  test('Get all users with token not authorized.', async () => {
    await api
      .get('/api/users')
      .set('Content-Type', 'application/json')
      .set(
        'Authorization',
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImVtYWlsdGVzdDE1QGdtYWlsLmNvbSIsImlkIjoiYWJjOGNkNGUtMGJlOC00ZmNhLTk3YjctMjAzZGE4MTQ2OTFhIiwiaWF0IjoxNjE5MzgyNDc0fQ.wuII5U9ocwEe18IKROlTAQLFEHBtbi88qiDLu0_Akwk'
      )
      .expect('Content-Type', /json/)
      .expect(401, { error: 'Unauthorized' });
  });
  test('Get all users with token but user not is admin.', async () => {
    await api
      .get('/api/users')
      .set('Content-Type', 'application/json')
      .set(
        'Authorization',
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjIsImlhdCI6MTYyNjcwMzAzOCwiZXhwIjoxNjI2ODc1ODM4fQ.Sb0qTtUTC57IIdU2rt9fBSVsaZsLmPhOhh-0XXmZHmU'
      )
      .expect('Content-Type', /json/)
      .expect(403, { error: 'Admin role required' });
  });
  test('Get all users with token valid and is admin.', async () => {
    await api
      .get('/api/users')
      .set('Content-Type', 'application/json')
      .set(
        'Authorization',
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTYyNjY5OTkwNCwiZXhwIjoxNjI2ODcyNzA0fQ.FdREzZON5YJEf8mfarjIaI5MAgpL_dlC_xaHanJaUP4'
      )
      .expect('Content-Type', /json/)
      .expect(200);
  });
});
// Request DELETE for /api/users/:id
describe('API route /api/users/:id - Request DELETE - Delete User', () => {
  test('User do not exist. ID not is valid.', async () => {
    await api
      .delete('/api/users/1000')
      .set('Content-Type', 'application/json')
      .expect(404);
  });
  test('Create an user and remove.', async () => {
    // Make request POST to create a new user.
    const newUser = await api
      .post('/api/auth/register')
      .set('Content-Type', 'application/json')
      .send({
        first_name: 'Test',
        last_name: 'Jest',
        email: 'testjest@gmail.com',
        password: '12345678'
      });
    // Delete new user.
    await api
      .delete(`/api/users/${newUser.body.user.id}`)
      .set('Content-Type', 'application/json')
      .expect(204);
  });
});
