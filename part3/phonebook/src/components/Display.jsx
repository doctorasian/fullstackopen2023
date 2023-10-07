/* eslint-disable react/prop-types */
import DeleteButton from './Delete'

const Display = ({filteredNames}) => {
    return(
      <div>
        {filteredNames.map(person => <p key={person.id}> {person.name} {person.number} 
        <DeleteButton person={person}/> </p>)}
      </div>
    )
  }

export default Display;