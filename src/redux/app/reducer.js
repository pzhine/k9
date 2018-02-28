import initialState from './initialState'

export default function appReducer(state = initialState, action) {
  switch (action.type) {
    case 'FORM_FIELD_CHANGED': {
      return {
        ...state,
        fields: {
          ...state.fields,
          [action.payload.field]: action.payload.value,
        },
      }
    }
    case 'WORDS_RECEIVED': {
      return {
        ...state,
        words: action.payload,
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
