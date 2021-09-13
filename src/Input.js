import React from 'react'
import PropTypes from 'prop-types'

function Input({secretWord}){
  const [currentGuess, setCurrentGuess] = React.useState("")

  function handleSubmit(e){
    e.preventDefault()
    setCurrentGuess("")
  }

  return (
    <div data-test="component-input">
      <form onSubmit={handleSubmit} className="form-inline">
        <label htmlFor="inputField">Your Guess:</label>
        <input id="inputField" 
                data-test="input-box" 
                className="mb-2 mx-sm-3" 
                type="text" 
                value={currentGuess} 
                onChange={(e) => setCurrentGuess(e.target.value)}
                placeholder="Enter Guess"
                />
        <button data-test="submit-botton" className="btn btn-primary mb-2">
          Submit</button>
      </form>
    </div>
  )
}

Input.propTypes = {
  secretWord: PropTypes.string.isRequired
}

export default Input