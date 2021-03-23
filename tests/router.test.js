const app = require('../app'); // Link to your server file
const mongoose = require('mongoose');
const supertest = require('supertest');
const request = supertest(app);

beforeAll(() => {
  jest.spyOn(console, 'log').mockImplementation(jest.fn());
});

describe('Boards tests', () => {

  it('GET boards 200 OK', async done => {
    const response = await request.get('/api/boards');
    expect(response.status).toBe(200);
    done();
  });

  it('POST boards 200 OK', async done => {
    const response = await request.post('/api/boards').send({
      code: 'TESTCODE',
      name: 'TESTNAME',
      instructor: 'TESTINSTRUCTOR'
    });
    expect(response.status).toBe(200);
    done();
  })


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

afterAll(done => {
  mongoose.connection.close();
  done();
});