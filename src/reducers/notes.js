export const ADD_NOTE = 'ADD_NOTE'

export const addNote = (note) => {
  return { type: ADD_NOTE, note }
}

export default ( state = [], action ) => {
  switch(action.type) {
    case ADD_NOTE:
      return [action.note, ...state]
    default:
      return state
  }
}
