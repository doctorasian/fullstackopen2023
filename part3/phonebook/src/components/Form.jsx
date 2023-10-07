/* eslint-disable react/prop-types */
import PersonService from '../services/PersonService'

import axios from 'axios'

const Form = (props) => {
    const addPerson = (event) => {
      event.preventDefault()
  
      const personObject = {
        name: props.newName,
        number: props.newNumber,
        id: props.persons.length + 1
      }
    
      const addToList = () => {
        axios
            PersonService
            .create(personObject)
            .then(returnedPersons => {
                props.setPersons(props.persons.concat([returnedPersons]))
                props.setMessage(`${props.newName} has been added to our registry.`)
                props.setNewName('')
                props.setNewNumber('')
                setTimeout(() => {
                  props.setMessage(null)
                }, 5000)
            })
      }

      let findEntry = props.persons.find((person) => {return person.name === props.newName})
  
      try{
        if (!(findEntry.name === props.newName)) {
          addToList()
        } else {
          alert(`${props.newName} has already been registered to the phonebook.`)
        }
      }
      catch(TypeError) {
        addToList()
      }
    }
    return (
      <form onSubmit={addPerson}>
      <div>
        Name: <input value={props.newName} onChange={props.handleNameChange}/>
        <br></br>
        Number: <input value={props.newNumber} onChange={props.handleNumberChange}/>
      </div>
      <div>
        <button type="submit">Add</button>
      </div>
    </form>
    )
  }

export default Form;