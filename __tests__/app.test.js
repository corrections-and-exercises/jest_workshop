const app = require('../app.js');
const request = require('supertest');

describe('testing routes', () => {
  it('should return json with a message', async () => {
    const response = await request(app).get('/message');
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ message: 'hello world' });
  });
});
