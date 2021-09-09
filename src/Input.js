import {useState} from 'react'

function Input(){
  const [input, setInput] = useState("")

  function handleSubmit(e){
    e.preventDefault()
    
  }

  return (
    <div>
      <form>
        <label htmlFor="inputField">Guess your word!</label>
        <input id="inputField" value={input} onChange={(e) => setInput(e.target.value)}></input>
        <button></button>
      </form>
    </div>
  )
}

export default Input