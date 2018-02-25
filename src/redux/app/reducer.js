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
    default: {
      return state
    }
  }
}
