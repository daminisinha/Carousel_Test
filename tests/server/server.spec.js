const request = require('supertest');
const app = require('../../src/server/server.js')
const express = require('express')
const router = express.Router()

describe('Server with route path',()=>{
    test('It should response the GET method',(done)=>{
        request(router).get('*').then((response)=>{
             expect(response.statusCode).toBe(404);
             done();
        })
    });
})