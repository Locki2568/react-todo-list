import React, { Component } from 'react'

export default class TodoInput extends Component {
    state={input:''}
    updateInput=(event)=>{
        this.setState({input:event.target.value})
    }
    clickAdd=()=>{
        this.props.onAdd(this.state.input)
        this.setState({input:''})
    }
  render() {
    return (
      <div>
        <input type='text' onChange={this.updateInput} value={this.state.input}></input>
        <button onClick={this.clickAdd}>add to do</button>
      </div>
    )
  }
}
