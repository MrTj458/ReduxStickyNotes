const ADD_NOTE = 'ADD_NOTE'
const DELETE_NOTE = 'DELETE_NOTE'

export const addNote = (note) => {
  return { type: ADD_NOTE, note }
}

export const deleteNote = (id) => {
  return { type: DELETE_NOTE, id }
}

export default ( state = [], action ) => {
  switch(action.type) {
    case ADD_NOTE:
      return [action.note, ...state]
    case DELETE_NOTE:
      return state.filter(n => n.id !== action.id)
    default:
      return state
  }
}
