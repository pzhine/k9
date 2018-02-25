import controller from './controller'

it('should return correct word possibilities given a number sequence', () => {
  const req = { params: { numbers: '23' } }
  const res = {
    json: jest.fn(() => res),
    status: jest.fn(jest.fn(() => res)),
    end: jest.fn(jest.fn(() => res)),
  }
  controller(req, res)
  expect(res.json).toHaveBeenCalledWith({
    all: ['ad', 'ae', 'af', 'bd', 'be', 'bf', 'cd', 'ce', 'cf'],
  })
})
