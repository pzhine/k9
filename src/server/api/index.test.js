import request from 'supertest'
import server from '../base'
import fixtures from '../../../test/fixtures'

it('should should respond to /api/23', () =>
  new Promise((resolve, reject) =>
    request(server)
      .get('/api/k9/23')
      .then(response => {
        expect(response.status).toBe(200)
        expect(response.body).toEqual({ all: fixtures['23'] })
        resolve()
      })
      .catch(err => reject(err))
  ))
