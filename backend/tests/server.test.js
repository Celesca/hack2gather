/* eslint-disable no-undef */
const request = require('supertest');
const app = require('../src/server');

describe('GET /posts', () => {
    it("should return all products", async() => {
        const res = await request(app).get("/v1/posts");
        expect(res.statusCode).toBe(200);
        expect(res.body.length).toBeGreaterThan(0);
    })
})
require("dotenv").config();