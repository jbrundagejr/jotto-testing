import PropTypes from 'prop-types'

function Congrats(props){

  if(props.success){
    return(
      <div data-test='congrats-div'>
        <span data-test='congrats-message'>
          Congratulations! You guessed the word!
        </span>
      </div>
    )
  } else {
    return (
      <div data-test='congrats-div'></div>
    )
  }
}

Congrats.propTypes = {
  success: PropTypes.bool.isRequired,
}

export default Congrats