/* eslint-disable react/prop-types */

import PersonService from "../services/PersonService";
import axios from 'axios'

const DeleteButton = ({person}) => {
    const handleDelete = () => {
        if (window.confirm(`Are you sure you want to delete ${person.name}?`)){
            axios
            PersonService
            .deletePerson(person.id)
        }
    }
    return (
        <button onClick={() => handleDelete()}>delete</button>
    )
}

export default DeleteButton;