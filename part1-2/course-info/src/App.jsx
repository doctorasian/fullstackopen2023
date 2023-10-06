/* eslint-disable react/prop-types */
import Course from './components/courses'

const App = () => {
  const courses = 
  [
    {
      id: 1,
      name: "Half Stack application development",
      parts: 
      [
        {
          exercise_name: "Fundamentals of React",
          exercise_number: 10,
          id: 1
        },
        {
          exercise_name: "Using props to pass data",
          exercise_number: 7,
          id: 2
        },
        {
          exercise_name: "State of a component",
          exercise_number: 14,
          id: 3
        }
      ]
    },
    {
      id: 2,
      name: "Node.js",
      parts:
      [
        {
          exercise_name: "Routing",
          exercise_number: 3,
          id: 1
        },
        {
          exercise_name: 'Middlewares',
          exercise_number: 7,
          id: 2
        }
      ]
    }
  ]

  return (
    <div>
      <Course courses={courses}/>
    </div>
  )
}

export default App