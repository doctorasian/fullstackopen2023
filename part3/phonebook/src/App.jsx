/* eslint-disable react/prop-types */
import Filter from './components/Filter'
import Form from './components/Form'
import Display from './components/Display'
import PersonService from './services/PersonService'

import { useState, useEffect } from 'react'
import axios from 'axios'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  const hook = () => {
    axios
      PersonService
      .getAll()
      .then(personList => {
        setPersons(personList)
      })
  }

  useEffect(hook, [])

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }
  const handleFilter = (event) => {
    setFilter(event.target.value)
  }

  const filteredNames = filter ? persons.filter(person => person.name.includes(filter)) : persons

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filter} handleFilter={handleFilter}/>
      <h2>Add a new number</h2>
      <Form persons={persons}
            setPersons={setPersons}
            newName={newName} 
            setNewName={setNewName}
            newNumber={newNumber}
            setNewNumber={setNewNumber} 
            handleNameChange={handleNameChange} 
            handleNumberChange={handleNumberChange} />
      <h2>Numbers</h2>
      <Display filteredNames={filteredNames}/>
    </div>
  )
}

export default App
