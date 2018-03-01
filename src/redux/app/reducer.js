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
      if (state.numbers.length) {
        return {
          ...state,
          numbers: state.numbers.substr(0, state.numbers.length - 1),
        }
      }
      if (state.message.length) {
        return {
          ...state,
          message: state.message.splice(0, state.message.length - 1),
        }
      }
      return state
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
