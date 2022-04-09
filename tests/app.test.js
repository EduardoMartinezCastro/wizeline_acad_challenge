const request = require('supertest')
const app = require('../app')

describe('GET /', () => {
    describe('Accesing this URL', () => {
        test('Should get a 200 status code', async () => {
            const response = await request(app).get('/')
            expect(response.statusCode).toBe(200)
        })
        test('Should specify HTML in the content type header', async () => {
            const response = await request(app).get('/')
            expect(response.headers['content-type']).toEqual(expect.stringContaining("html"))
        })
    })
})

describe('GET /hello-world', () => {
    describe('Accesing this URL', () => {
        test('Should get a 200 status code', async () => {
            const response = await request(app).get('/')
            expect(response.statusCode).toBe(200)
        })
        test('Should specify HTML in the content type header', async () => {
            const response = await request(app).get('/')
            expect(response.headers['content-type']).toEqual(expect.stringContaining("html"))
        })
    })
})

describe('GET /rick-n-morty-chr/:id', () => {
    describe('Accesing this URL with a given param representing an existing character ID', () => {
        test('Should get a 200 status code', async () => {
            const response = await request(app).get('/rick-n-morty-chr/1')
            expect(response.statusCode).toBe(200)
        })
        test('Should specify JSON in the content type header', async () => {
            const response = await request(app).get('/rick-n-morty-chr/1')
            expect(response.headers['content-type']).toEqual(expect.stringContaining("json"))
        })
    })
    describe('Accesing this URL with a given param representing an non-existent character ID', () => {
        test('Should get a 404 status code', async () => {
            const response = await request(app).get('/rick-n-morty-chr/6000')
            expect(response.statusCode).toBe(404)
        })
        test('Should specify HTML in the content type header', async () => {
            const response = await request(app).get('/rick-n-morty-chr/6000')
            expect(response.headers['content-type']).toEqual(expect.stringContaining("html"))
        })
    })
})

describe('GET /*', () => {
    describe('Accesing an non-existent URL', () => {
        test('Should get a 404 status code', async () => {
            const response = await request(app).get('/non-existent')
            expect(response.statusCode).toBe(404)
        })
        test('Should specify HTML in the content type header', async () => {
            const response = await request(app).get('/non-existent')
            expect(response.headers['content-type']).toEqual(expect.stringContaining("html"))
        })
    })
})