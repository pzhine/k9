export default {
  fieldChanged({ field, value }) {
    return {
      type: 'FORM_FIELD_CHANGED',
      payload: { field, value },
    }
  },
}
