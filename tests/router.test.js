const app = require('../app'); // Link to your server file
const supertest = require('supertest');
const request = supertest(app);

describe('Testing routes', () => {
    it('Home page 200 OK', async done => {
      const response = await request.get('/');
      expect(response.status).toBe(200);
      done();
    });

    it('Login page 200 OK', async done => {
      const response = await request.get('/login');
      expect(response.status).toBe(200);
      done();
    });

    // it('Attempt to login with fake credentials', async done => {
    //   const response = await request.post('/login/LoginUser')
    //   .send({
    //     username: 'fj39afjzl',
    //     password: 'fjznvn39afialfj'
    //   });
    //   expect(response.statusCode).toEqual(200);
    //   done();
    // });
  });