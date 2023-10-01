/* eslint-disable react/prop-types */
import { useState } from 'react'

const Button = ({handleClick, text}) => {
  return (
    <button onClick={handleClick}>{text}</button>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  const initialVotes = new Array(8).fill(0)
  const [points, setPoints] = useState(initialVotes)
  const randomInt = () => Math.floor(Math.random() * 8)
  const max_value_index = points.indexOf(Math.max(...points))

  function updatePoints(points, selected) {
    const copy = [...points]
    copy[selected] += 1
    setPoints( [...copy] )
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      {anecdotes[selected]}
      <p>Has {points[selected]} votes</p>
      <br></br>
      <Button handleClick={() => {updatePoints(points, selected)}} text='vote'/>
      <Button handleClick={() => {setSelected(randomInt)}} text='next anecdote'/>
      <h1>Anecdotes with most votes</h1>
      {anecdotes[max_value_index]}
      <p>has {points[max_value_index]} votes</p>
    </div>
  )
}

export default App