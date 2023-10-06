/* eslint-disable react/prop-types */

const Form = (props) => {
    const addPerson = (event) => {
      event.preventDefault()
  
      const personObject = {
        name: props.newName,
        number: props.newNumber,
        id: props.persons.length + 1
      }
  
      const addToList = () => {
        props.setPersons(props.persons.concat([personObject]))
        props.setNewName('')
        props.setNewNumber('')
      }
  
      let findEntry = props.persons.find((person) => person.name == props.newName)
  
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