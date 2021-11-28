import React, { useState } from 'react'
import ReactDOM from 'react-dom'


const Statistic = (props) => {
  return (
      <tr><td>{props.text}</td><td>{props.value}</td></tr>
  )
}
const Statistics = (props) => {
  const averagePositive = (props.objState.good  / props.objState.allState) * 100;
  const averageScore = props.objState.allState / 3;

  if (props.objState.allState > 0) {
    return (
      <div>
        <br/><strong>Statistics </strong><br/>
        <table>
          <tbody>
            <Statistic text={"good"}     value={props.objState.good}/>
            <Statistic text={"neutral"}  value={props.objState.neutral}/>
            <Statistic text={"bad"}      value={props.objState.bad}/>
            <Statistic text={"All"}      value={props.objState.allState}/>
            <Statistic text={"Avarage"}  value={averageScore}/>
            <Statistic text={"Positive"} value={averagePositive}/>
          </tbody>
        </table>
      </div>
    )
  }

  return (
    <div>
      No feedBack Given
    </div>

  )
}

const Button = ({ onClick, text }) => (  <button onClick={onClick}>    {text}  </button>)

const App = () => {
  const [objState, setObjState] = useState({ good:0, neutral:0, bad:0, allState:0 })

  const addGood = () => {
    const newStates = {
      ...objState,
      good: objState.good + 1,
      allState: objState.allState + 1
    }
    setObjState(newStates);
  }

  const addNeutral = () => {
    const newStates = {
      ...objState,
      neutral: objState.neutral + 1,
      allState: objState.allState + 1
    }
    setObjState(newStates);
  }

  const addBad = () => {
    const newStates = {
      ...objState,
      bad: objState.bad + 1,
      allState: objState.allState + 1
    }
    setObjState(newStates);
  }
  return (
    <div>
      <Button onClick={addGood} text='Good' />      
      <Button onClick={addNeutral} text='Neutral' />   
      <Button onClick={addBad} text='Bad' />   
      <Statistics objState={objState} ></Statistics>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)