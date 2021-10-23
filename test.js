const request = require('supertest')('http://www.dummy.restapiexample.com/');
const assert = require('chai').assert;

describe('Employees API', () => {
  it('GET /employees', () => {
    return request
      .get('/employees')
      .expect(200)
      .then((res) => {
        assert.isNotEmpty(res.body);
      });
  });
 

  it('POST /employees', () => {
    const data = {
      name: 'test',
      salary: '123',
      age: '23',

    };
    return request
      .post('/employees')
      .send(data) 
      .then((res) => {
        assert.hasAnyKeys(res.body, 'id');
        assert.equal(res.body.name, data.name);
        assert.equal(res.body.salary, data.salary);
        assert.equal(res.body.age, data.age);
      });
  });

  it('PUT /employees/:id', () => {
    const data = {
      nama: 'test',
    };
    return request
      .put('/employees/719')
      .send(data)
      .then((res) => {
        assert.equal(res.body.nama, data.nama);
      });
  });

  it('DELETE /employees/:id', () => {
    return request.delete('/employees/1').then((res) => assert.isEmpty(res.body));
  });
});