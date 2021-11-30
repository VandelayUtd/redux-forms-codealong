import React, { Component } from 'react';
import { connect } from "react-redux"

class CreateTodo extends Component {

  constructor(){
    super()
    this.state = {
      text: ""
    }
  }

  handleOnChange = (e) => {
    this.setState({
      text: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.addToDo(this.state)
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder="add todo" onChange={this.handleOnChange} value={this.state.text} />
          <input type="submit" />
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addToDo: (formData) => dispatch({type: "ADD_TODO", payload: formData}) 
  };
};

export default connect(null, mapDispatchToProps)(CreateTodo);
