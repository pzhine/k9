import initialState from './initialState'

export default function appReducer(state = initialState, action) {
  switch (action.type) {
    case 'APPEND_NUMBER': {
      return {
        ...state,
        numbers: `${state.numbers}${action.payload}`,
      }
    }
    case 'DELETE_LAST': {
      const next = { ...state, words: [], word: '' }
      if (state.numbers.length) {
        return {
          ...next,
          numbers: state.numbers.substr(0, state.numbers.length - 1),
        }
      }
      if (state.message.length) {
        return {
          ...next,
          message: state.message.splice(0, state.message.length - 1),
        }
      }
      return next
    }
    case 'APPEND_WORD': {
      return {
        ...state,
        numbers: '',
        words: [],
        word: '',
        message: [...state.message, action.payload],
      }
    }
    case 'WORDS_RECEIVED': {
      return {
        ...state,
        words: action.payload.words,
        word: action.payload.words[0],
      }
    }
    case 'NEXT_WORD': {
      if (state.words.length < 2) {
        return state
      }
      let nextIndex = state.words.indexOf(state.word) + 1
      if (nextIndex > state.words.length - 1) {
        nextIndex = 0
      }
      return {
        ...state,
        word: state.words[nextIndex],
      }
    }
    case 'TOGGLE_MENU_ACTIVE': {
      return { ...state, menuIsActive: action.payload }
    }
    default: {
      return state
    }
  }
}
