import React from 'react'
import { connect } from 'react-redux'
import { deleteNote } from '../reducers/notes'

const Note = ({ id, name, dispatch }) => (
  <div>
    {name}
    <button onClick={() => dispatch(deleteNote(id))}>X</button>
  </div>
)

export default connect()(Note)
