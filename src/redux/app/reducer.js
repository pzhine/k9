import initialState from './initialState'

export default function appReducer(state = initialState, action) {
  switch (action.type) {
    case 'KEY_PRESSED': {
      return {
        ...state,
        numbers: `${state.numbers}${action.payload}`,
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
