/* eslint-disable react/prop-types */

const Display = ({filteredNames}) => {
    return(
      <div>
      {filteredNames.map(person => <p key={person.id}>{person.name} {person.number}</p>)}
      </div>
    )
  }

export default Display;