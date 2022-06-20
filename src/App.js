import { useState } from 'react'

const Display = props => <div>{props.value}</div>
const Button = (props) => (
  <button onClick={props.handleClick}>
   {props.text}
  </button>
)

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const setToValue = (rating, other) => {
      other(rating + 1)
  } 

  const Total = () => {
    return (
      good + bad + neutral
    )
  }

  const Average = () => {
    return (
     (good - bad) / (good + bad + neutral)
    )
  }

  const Positive = () => {
    return (
      (good / (good + bad + neutral)) * 100
    )
  }

  const Statistics = (props) => {
    if ((good + bad + neutral) === 0) {
      return(
        <div>No feedback given</div>
      )
    }
    return (
      <table>
        <tbody>
        <tr> 
          <td>good</td><td>{good}</td> 
        </tr>
        <tr>
          <td>neutral</td><td>{neutral}</td>
        </tr>
        <tr>
          <td>bad</td><td>{bad}</td>
        </tr>
        <tr>
          <td>average</td><td><Average /></td>
        </tr>
        <tr>
          <td>positive</td><td><Positive />%</td>
        </tr>
        </tbody>
      </table>
    )

    
  }
  

  return (
    <div>

      <h1>give feedback</h1>
      <Button handleClick={() => setToValue(good, setGood)} text="good" />
      <Button handleClick ={() => setToValue(neutral, setNeutral)} text="neutral" />
      <Button handleClick ={() => setToValue(bad, setBad)} text="bad" />
      <h1>statistics</h1>
      <Statistics />

      </div>
  )
}

export default App
