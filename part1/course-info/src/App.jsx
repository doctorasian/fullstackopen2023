/* eslint-disable react/prop-types */
const Header = ({course}) => {
  return (
    <>
    <h1>{course.name}</h1>
    </>
  )
}

const Content = ({course}) => {
  return (
    <>
    <Part name={course.parts[0].exercise_name} exercise={course.parts[0].exercise_number}/>
    <Part name={course.parts[1].exercise_name} exercise={course.parts[1].exercise_number}/>
    <Part name={course.parts[2].exercise_name} exercise={course.parts[2].exercise_number}/>
    </>
  )
}

const Part = ({name, exercise}) => {
  return (
    <>
    <p>{name} {exercise}</p>
    </>
  )
}

const Total = ({course}) => {
  return (
    <p>Number of exercises: {course.parts[0].exercise_number + course.parts[1].exercise_number + course.parts[2].exercise_number}</p>
  )
}

const App = () => {
  let course = {
    name: "Half Stack application development",
    parts: [
      {
        exercise_name: "Fundamentals of React",
        exercise_number: 10
      },
      {
        exercise_name: "Using props to pass data",
        exercise_number: 7
      },
      {
        exercise_name: "State of a component",
        exercise_number: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course}/>
      <Content course={course}/>
      <Total course={course}/>
    </div>
  )
}

export default App