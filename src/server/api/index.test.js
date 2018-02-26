import request from 'supertest'
import server from '../base'
import fixtures, { english } from '../../../test/fixtures'

it('should should get all strings for /k9/23', () =>
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

it('should should get valid english words for /k9/en-us/4663', () =>
  new Promise((resolve, reject) =>
    request(server)
      .get('/api/k9/en-us/4663')
      .then(response => {
        expect(response.status).toBe(200)
        expect(response.body).toEqual({ 'en-us': english['4663'] })
        resolve()
      })
      .catch(err => reject(err))
  ))
