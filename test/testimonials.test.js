const supertest = require('supertest');
const { app } = require('../app');
const { Testimony, User } = require('../models');
const TokenService = require('../services/TokenService') 

describe('Testimonials', () => {
  beforeEach(() => { //Reset all mocks after running all tests.
    jest.resetAllMocks();
  });
  
  //Mockes creation.
  const userAdmin = {id: 1234, roleId:1} //User admin
  const userAdminToken = TokenService.createToken({userId: userAdmin.id})

  const user = {id: 1235, roleId:2} //User no admin
  const userToken = TokenService.createToken({userId: user.id})


  const testimony = {name: 'Testimony 2',
                    image: 'www.anURL.com',
                    content: 'This is an mock example around fifty characters to test this feature'}

  Testimony.findByPk = jest.fn().mockResolvedValue(testimony)
  Testimony.findAll = jest.fn().mockResolvedValue([])
  Testimony.create = jest.fn().mockResolvedValue(testimony)
  User.findOne = jest.fn().mockResolvedValue(user) //Para los test donde se usan usuarios loggeados.

  // Set supertest to fake api.
  const api = supertest(app);
  
  // Request GET for /api/users
  describe('API route /api/testimonials - Request GET - Get all testomonies', () => {
    test('Get all testimonies without token Authorization.', async () => {
      await api
        .get('/api/testimonials')
        .set('Content-Type', 'application/json')
        .expect('Content-Type', /json/)
        .expect(400, { error: 'No token provided' });
    });
  
    test('Get all testimonies with token not authorized.', async () => {
      await api
        .get('/api/testimonials')
        .set('Content-Type', 'application/json')
        .set(
          'Authorization',
          'eyJhbGciOiJIUzI1NiJ9.eyJSb2xlIjoiQWRtaW4iLCJJc3N1ZXIiOiJJc3N1ZXIiLCJVc2VybmFtZSI6IkphdmFJblVzZSIsImV4cCI6MTYyNTY5MjQxMywiaWF0IjoxNjI1NjkyNDEzfQ.2dWAo7gqeGIrjjdo1q0accWABPfg7dQ_Zz73LSWuscw'
        )
        .expect('Content-Type', /json/)
        .expect(401, { error: 'Unauthorized' });
    });
  
    test('Get testimonies with token', async () => {
      /*const userLogged = await api
        .post('/api/auth/login/')
        .set('Content-Type', 'application/json')  
        .send({
          email: 'pdos@gmail.com',
          password: '12345678'
        });*/
      
      expect(Testimony.findAll).toBeCalled(); //To make sure method is called(mocked) or not.

      await api
        .get('/api/testimonials')
        .set('Content-Type', 'application/json')
        .set('Authorization', userToken)
        .expect('Content-Type', /json/)
        .expect(200, { Testimonials: [] });     
    });
  });

  //post('/', [verifyToken, checkAdmin, validateTestimonial], createTestimonial);
  describe('API route /api/testimonial - Request POST - Post Testimony', () => {
    test('Post without being an admin', async() => {
      await api
        .post('/api/testimonial')
        .set('Content-Type', 'application/json')
        .set('Authorization', userToken)
        .expect('Content-Type', /json/)
        .expect(403);
    });

    test('Post being an admin', async() => {
      await api
        .post('/api/testimonials')
        .set('Content-Type', 'application/json')
        .set('Authorization', userAdminToken)
        .expect('Content-Type', /json/)
        .expect(200, { Testimonials: [] });
    });


  });

  //put('/:id', [verifyToken, checkAdmin, validateTestimonial], putTestimonial);
  describe('API route /api/testimonial - Request PUT - Put Testimony', () => {
    test('Testimony do not exist. ID not is valid.', async() => {
      await api
        .put('/api/testimonial/9001')
        .set('Content-Type', 'application/json')
        .set('Authorization', userToken)
        .expect('Content-Type', /json/)
        .expect(404);
    });
    
    test('Put without being an admin', async() => {
      await api
        .put(`/api/testimonial/${testimony.id}`)
        .set('Content-Type', 'application/json')
        .set('Authorization', userToken)
        .expect('Content-Type', /json/)
        .expect(403);
    });
  })

  describe('API route /api/testimonial/:id - Request DELETE - Delete Testimony', () => {
    test('Testimony do not exist. ID not is valid.', async () => {
      await api
        .delete('/api/testimonial/9001')
        .set('Content-Type', 'application/json')
        .expect(404);
    });
  
    test('Create a testimony and remove.', async () => {
      // Make a new testimony with model on sequelize.
      /*const testy = await Testimony.create({
        name: 'Testimony 2',
        image: 'www.anURL.com',
        content: 'This is an example around fifty characters to tess this feature, maybe a sligthy over fifty.'
      });*/

      expect(Testimony.findByPk).toBeCalled();
      // Delete new testimony.
      await api
        .delete(`/api/testimonials/${testimony.id}`)
        .set('Authorization', userAdminToken)
        .set('Content-Type', 'application/json')
        .expect(204);
    });
  });
});

