/* eslint-disable react/prop-types */

const Filter = ({filter, handleFilter}) => {
    return(
      <div>
        Search: <input value={filter} onChange={handleFilter}/> 
      </div>
    )
  }

export default Filter;