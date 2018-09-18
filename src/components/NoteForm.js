import React from 'react'
import { connect } from 'react-redux'
import { addNote } from '../reducers/notes'

class NoteForm extends React.Component {
  state = { name: '' }

  handleSubmit = (e) => {
    e.preventDefault()
    const { dispatch } = this.props
    const { name } = this.state
    dispatch(addNote({ name }))
    this.setState({ name: '' })
  }

  handleChange = (e) => {
    this.setState({ name: e.target.value })
  }

  render() {
    const { name } = this.state

    return(
      <div>
        <h3>Add A Note</h3>
        <form onSubmit={this.handleSubmit}>
          <input value={name} onChange={this.handleChange} />
        </form>
      </div>
    )
  }
}

export default connect()(NoteForm)
