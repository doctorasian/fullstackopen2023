import { useState } from 'react'

const Header = ({ header }) => <h1>{header}</h1>

const Button = ({handleClick, text}) => <button onClick={handleClick}> {text} </button>

const Display = ({text, value}) => {
  if (text==='positive') {
    return (
      <tr> 
        <td>{text}</td>
        <td>{value}%</td> 
      </tr>
    )}
    else {
      return(
        <tr> 
          <td>{text}</td>
          <td>{value}</td> 
        </tr>
      )
    }
}
const Statistics = ({types}) => {
  const [good, neutral, bad] = types
  const total = good + neutral + bad
  if (good + neutral + bad === 0) {
    return (
      <p>No feedback given</p>
    )
  }else {
    return (
      <table>
        <tbody>
          <Display text='good' value= {good}/>
          <Display text='neutral' value= {neutral}/>
          <Display text='bad' value= {bad}/>
          <Display text='total' value= {total}/>
          <Display text='average' value= {(good-bad)/(total)}/>
          <Display text='positive' value={ (good/total)*100 }/>
        </tbody>
      </table>
    )
  }
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const header1 = 'give feedback'
  const header2 = 'statistics'

  return (
    <div>
      <Header header={header1}/>
      <Button handleClick={() => setGood(good + 1)} text='good'/>
      <Button handleClick={() => setNeutral(neutral + 1)} text='neutral'/>
      <Button handleClick={() => setBad(bad + 1)} text='bad'/>
      <Header header={header2}/>
      <Statistics types={[good, neutral, bad]}/>
    </div>
  )
}

export default App