import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import axios from 'axios'
import actions from './actions'
import reducer from './reducer'
import initialState from './initialState'

jest.mock('axios', () => ({
  get: jest.fn(() => ({
    data: {
      'en-us': ['hello'],
      all: ['hello'],
    },
  })),
}))

const axiosSpy = jest.spyOn(axios, 'get')

beforeEach(() => {
  axios.get.mockClear()
})

const mockStore = configureStore([thunk])

const reduce = (state, action) => ({ app: reducer(state.app, action) })

describe('typing a number', () => {
  it('should append it to the numbers in state', () => {
    const state = { app: { ...initialState, numbers: '23' } }
    const store = mockStore(state)
    const expectedAction = { type: 'APPEND_NUMBER', payload: '4' }
    return store.dispatch(actions.pressKey('4')).then(() => {
      expect(store.getActions()[0]).toEqual(expectedAction)
      expect(reduce(state, expectedAction).app).toEqual({
        ...state.app,
        numbers: '234',
      })
    })
  })
  it('should get the word array from the API and update current word', () => {
    const store = mockStore({ app: { ...initialState, numbers: '23' } })
    const expectedAction = {
      type: 'WORDS_RECEIVED',
      payload: { words: ['beg'], numbers: '234' },
    }
    return store.dispatch(actions.pressKey('4')).then(() => {
      expect(axiosSpy).toHaveBeenCalled()
      const nextState = reduce(store.getState(), expectedAction).app
      expect(nextState.words).toEqual(['beg'])
      expect(nextState.word).toEqual('beg')
    })
  })
  it('should put the word into the word history', () => {
    const state = {
      app: {
        ...initialState,
        numbers: '23',
        wordHistory: { '23': ['be'] },
      },
    }
    const action = {
      type: 'WORDS_RECEIVED',
      payload: { words: ['beg'], numbers: '234' },
    }
    expect(reduce(state, action).app).toEqual({
      ...state.app,
      words: ['beg'],
      word: 'beg',
      wordHistory: {
        ...state.app.wordHistory,
        '234': ['beg'],
      },
    })
  })
})

describe('typing a * (back)', () => {
  it('should remove last number and clear word state when numbers is non-empty', () => {
    const state = {
      app: {
        ...initialState,
        numbers: '23',
        words: ['beg'],
        word: 'beg',
      },
    }
    const store = mockStore(state)
    const expectedAction = { type: 'DELETE_LAST', payload: '*' }
    return store.dispatch(actions.pressKey('*')).then(() => {
      expect(store.getActions()[0]).toEqual(expectedAction)
      expect(reduce(store.getState(), expectedAction).app).toEqual({
        ...state.app,
        numbers: '2',
        words: [],
        word: '',
      })
    })
  })
  it('should return the word array from history (not call api)', () => {
    const state = {
      app: {
        ...initialState,
        numbers: '23',
        wordHistory: { '2': ['a'] },
      },
    }
    const store = mockStore(state)
    return store.dispatch(actions.pressKey('*')).then(() => {
      expect(store.getActions()[1]).toEqual({
        type: 'WORDS_RECEIVED',
        payload: { words: ['a'], numbers: '2' },
      })
      expect(axiosSpy).not.toHaveBeenCalled()
    })
  })
  it('should remove last word in message when numbers is empty', () => {
    const state = { app: { ...initialState, message: ['good', 'morning'] } }
    const store = mockStore(state)
    const expectedAction = { type: 'DELETE_LAST', payload: '*' }
    return store.dispatch(actions.pressKey('*')).then(() => {
      expect(store.getActions().length).toBe(1)
      expect(store.getActions()[0]).toEqual(expectedAction)
      expect(reduce(store.getState(), expectedAction).app).toEqual({
        ...state.app,
        message: ['good'],
      })
    })
  })
})

describe('typing a 0 (space)', () => {
  it('should append the word to the message and clear the word states', () => {
    const store = mockStore({
      app: {
        ...initialState,
        numbers: '4663',
        word: 'good',
        words: ['gone', 'good'],
      },
    })
    const expectedAction = {
      type: 'APPEND_WORD',
      payload: 'good',
    }
    return store.dispatch(actions.pressKey('0')).then(() => {
      expect(store.getActions()[0]).toEqual(expectedAction)
      expect(reduce(store.getState(), expectedAction).app).toEqual({
        ...initialState,
        numbers: '',
        word: '',
        words: [],
        message: ['good'],
      })
    })
  })
})

describe('typing a # (next)', () => {
  it('should cycle to next word in words', () => {
    const state = {
      app: {
        ...initialState,
        numbers: '4663',
        word: 'good',
        words: ['gone', 'good'],
      },
    }
    const store = mockStore(state)
    const expectedAction = {
      type: 'NEXT_WORD',
      payload: '#',
    }
    return store.dispatch(actions.pressKey('#')).then(() => {
      expect(store.getActions()[0]).toEqual(expectedAction)
      expect(reduce(state, expectedAction).app).toEqual({
        ...state.app,
        word: 'gone',
      })
    })
  })
})

describe('changing language in route path', () => {
  it('should reset the app state and set the current language', () => {
    const state = {
      app: {
        ...initialState,
        numbers: '4663',
        word: 'good',
        words: ['gone', 'good'],
      },
    }
    expect(reduce(state, actions.locationChanged('/es')).app).toEqual({
      ...initialState,
      language: 'es',
    })
  })
})
