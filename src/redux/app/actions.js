import axios from 'axios'
import config from '../../content/config.json'

const api = axios.create({ baseURL: '/api', timeout: 10000 })

export default {
  toggleMenuIsActive(isActive) {
    return {
      type: 'TOGGLE_MENU_ACTIVE',
      payload: isActive,
    }
  },
  pressKey(number) {
    return async (dispatch, getState) => {
      const numbers = `${getState().app.numbers}${number}`
      dispatch({
        type: 'KEY_PRESSED',
        payload: number,
      })
      let words
      if (config.dictionary) {
        words = (await api.get(`/k9/${config.dictionary}/${numbers}`)).data[
          config.dictionary
        ]
      } else {
        words = (await api.get(`/k9/${numbers}`)).data.all
      }
      return dispatch({
        type: 'WORDS_RECEIVED',
        payload: {
          words,
          numbers,
        },
      })
    }
  },
}
