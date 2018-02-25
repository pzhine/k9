import axios from 'axios'

const api = axios.create({ baseURL: '/api', timeout: 10000 })

export default {
  fieldChanged({ field, value }) {
    return async dispatch => {
      dispatch({
        type: 'FORM_FIELD_CHANGED',
        payload: { field, value },
      })
      if (!value.length) {
        return dispatch({
          type: 'WORDS_RECEIVED',
          payload: [],
        })
      }
      const words = (await api.get(`/k9/${value}`)).data.all
      return dispatch({
        type: 'WORDS_RECEIVED',
        payload: words,
      })
    }
  },
}
