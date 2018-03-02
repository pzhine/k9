import controller from './controller'
import fixtures, { english } from '../../../test/fixtures'

const mockResult = () => {
  const res = {
    json: jest.fn(() => res),
    status: jest.fn(jest.fn(() => res)),
    end: jest.fn(jest.fn(() => res)),
  }
  return res
}

it('should return correct word possibilities given a number sequence', () => {
  const req = { params: { numbers: '23' } }
  const res = mockResult()
  controller(req, res)
  expect(res.json).toHaveBeenCalledWith({
    all: fixtures['23'],
  })
})

it('should only return known english words', async () => {
  const req = { params: { numbers: '4663', dict: 'en-us' } }
  const res = mockResult()
  await controller(req, res)
  expect(res.json).toHaveBeenCalledWith({
    'en-us': english['4663'],
  })
})

it('should return prefixes when no words match', async () => {
  const req = { params: { numbers: '66674', dict: 'fr' } }
  const res = mockResult()
  await controller(req, res)
  expect(res.json).toHaveBeenCalledWith({
    fr: ['monsi'],
  })
})
