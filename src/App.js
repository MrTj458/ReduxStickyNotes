import React from 'react'
import NoteForm from './components/NoteForm'
import NoteList from './components/NoteList'
import Footer from './components/Footer'

const App = () => (
  <div className="App">
    <NoteForm />
    <NoteList />
    <Footer />
  </div>
)

export default App
