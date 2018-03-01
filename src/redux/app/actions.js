import axios from 'axios'
import config from '../../content/config.json'

export const axiosConfig = { baseURL: '/api', timeout: 10000 }

export default {
  toggleMenuIsActive(isActive) {
    return {
      type: 'TOGGLE_MENU_ACTIVE',
      payload: isActive,
    }
  },
  locationChanged(path) {
    return {
      type: 'LOCATION_CHANGED',
      payload: { path },
    }
  },
  pressKey(key) {
    return async (dispatch, getState) => {
      const currentNumbers = getState().app.numbers

      // DELETE
      if (key === '*') {
        const del = dispatch({
          type: 'DELETE_LAST',
          payload: key,
        })
        if (currentNumbers.length <= 1) {
          return del
        }
        const numbers = currentNumbers.substr(0, currentNumbers.length - 1)
        const words = getState().app.wordHistory[numbers]
        return dispatch({
          type: 'WORDS_RECEIVED',
          payload: {
            words,
            numbers,
          },
        })
      }

      // SPACE
      if (key === '0') {
        return dispatch({
          type: 'APPEND_WORD',
          payload: getState().app.word,
        })
      }

      // NEXT
      if (key === '#') {
        return dispatch({
          type: 'NEXT_WORD',
          payload: '#',
        })
      }

      // APPEND AND FETCH WORDS
      const numbers = `${getState().app.numbers}${key}`
      dispatch({
        type: 'APPEND_NUMBER',
        payload: key,
      })
      const dict = getState().app.language
      const words = (await axios.get(`/k9/${dict}/${numbers}`, axiosConfig))
        .data[dict]

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
