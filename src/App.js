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
  

  return (
    <div>

      <h1>give feedback</h1>
      <Button handleClick={() => setToValue(good, setGood)} text="good" />
      <Button handleClick ={() => setToValue(neutral, setNeutral)} text="neutral" />
      <Button handleClick ={() => setToValue(bad, setBad)} text="bad" />
      <h1>statistics</h1>
      <div>good {good}</div> 
      <div>neutral {neutral}</div>
      <div>bad {bad}</div>

      </div>
  )
}

export default App
