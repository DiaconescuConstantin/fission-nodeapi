const request = require('supertest');
const app = require('./app');

describe('Test the root path', () => {
    test('GET method /', () => {
        return request(app).get("/").then(response => {
            expect(response.statusCode).toBe(200);
        })
    });
    test('GET method /rand', () => {
        return request(app).get("/rand").then(response => {
            expect(response.statusCode).toBe(200);
        })
    });
})