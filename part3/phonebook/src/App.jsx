/* eslint-disable react/prop-types */
import Filter from './components/Filter'
import Form from './components/Form'
import Display from './components/Display'

import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { 
      name: 'Arto Hellas',
      number: '1-800-TESTING',
      id: 1 
    },
    {
      name: 'Jane Doe',
      number: '(442)-841-4329',
      id: 2
    },
    {
      name: 'Jake from State Farm',
      number: '1-800-429-3931',
      id: 3
    },
    {
      name: 'Janice Johnson',
      number: '(204)-194-5823',
      id: 4
    }
  ])
  const [newName, setNewName] = useState('')

  const [newNumber, setNewNumber] = useState('')

  const [filter, setFilter] = useState('')

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
      <Display filteredNames={filteredNames} />
    </div>
  )
}

export default App
