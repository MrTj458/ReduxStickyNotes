import React from 'react'
import { connect } from 'react-redux'
import Note from './Note'

const NoteList = ({ notes }) => (
  <ul>
    { notes.map(n => {
        return (
          <li key={n.id}>
            <Note {...n} />
          </li>
        )
      })
    }
  </ul>
)

const mapStateToProps = (state) => {
  return { notes: state.notes }
}

export default connect(mapStateToProps)(NoteList)
