import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import "./index.css"


const Anecdote = ({anecdotes, selected, voteAnecdotes, title}) => {
  return (
    <div>
      <div className="title">{title}</div>
      <p>{anecdotes[selected]}</p>
      <p>has {voteAnecdotes[selected]} votes</p>
    </div>
  )
}


const Button = ({onClick, text}) => {
  return (
    <button onClick={onClick}>{text}</button>
  )
}


const App = ({anecdotes}) => {
  const [selected, setSelected] = useState(0)
  const [voteAnecdotes, setVoteAnecdotes] = useState([0,0,0,0,0,0])
  const [maxVoteAnecdote, setmaxVoteAnecdote] = useState(0)

  const randomAnecdotes = () =>{
    const randomNumber = Math.floor(Math.random() * 6);
    setSelected(randomNumber);
  }

  const vote = () =>{
    console.log(selected)
    const copyVoteAnecdotes = [...voteAnecdotes];
    copyVoteAnecdotes[selected] += 1
    setVoteAnecdotes(copyVoteAnecdotes);

    const maxAnecdote = indexOfMaxAnecdote(copyVoteAnecdotes)
    setmaxVoteAnecdote(maxAnecdote);
  }

  const indexOfMaxAnecdote = (copyVoteAnecdotes) => {
    let max = 0;
    let index = 0;
    for(let i=0; i < copyVoteAnecdotes.length; i++){
      if(copyVoteAnecdotes[i] > max){
        index = i 
        max =  copyVoteAnecdotes[i]
      }
    }
    return index;
  }

  return (
    <div>
      <Anecdote anecdotes={anecdotes} selected={selected} voteAnecdotes={voteAnecdotes} title={"Anecdote of the day"}/><br/>
      <Button onClick={vote} text={"vote"}/>
      <Button onClick={randomAnecdotes} text={"next anecdote"}/>
      <Anecdote anecdotes={anecdotes} selected={maxVoteAnecdote} voteAnecdotes={voteAnecdotes} title={"Anecdote with most votes"}/><br/>
     
    </div>
  )
}


const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]


ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)