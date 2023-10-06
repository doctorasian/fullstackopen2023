/* eslint-disable react/prop-types */
const Course = ({courses}) => {
    return (
      <>
      {courses.map(course => (
          <div key={course.id}>
          <Header heading={course.name}/>
          <Content parts={course.parts}/>
          <Total parts={course.parts}/>
        </div>
        ))}
      </>
    )
  }
  
const Header = ({heading}) => {
    return (
    <>
    <h2>{heading}</h2>
    </>
    )
}

const Content = ({parts}) => {
return (
    <>
    {parts.map(part => <Part key={part.id} name={part.exercise_name} exercise={part.exercise_number}></Part>)}
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

const Total = ({parts}) => {
const total = parts.reduce((accumulator, object) => {return accumulator + object.exercise_number}, 0)
return (
    <p>Number of exercises: {total}</p>
)
}

export default Course;