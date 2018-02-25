import controller from './controller'
import fixtures from '../../../test/fixtures'

it('should return correct word possibilities given a number sequence', () => {
  const req = { params: { numbers: '23' } }
  const res = {
    json: jest.fn(() => res),
    status: jest.fn(jest.fn(() => res)),
    end: jest.fn(jest.fn(() => res)),
  }
  controller(req, res)
  expect(res.json).toHaveBeenCalledWith({
    all: fixtures['23'],
  })
})
