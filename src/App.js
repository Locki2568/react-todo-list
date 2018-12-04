import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoInput from './components/TodoInput'
import Todos from './components/Todos'

class App extends Component {
  state={input:'',todos:new Array(0).fill(0)}
  addTodo=(todo)=>{
    var list=this.state.todos
    list.push(todo)
    this.setState({input:todo,
    todos:list})
  }
  render() {
    return (
      <div className="App">
        <TodoInput onAdd={this.addTodo}/>
        {this.state.todos.map(each=><Todos onShowToDo={each}/>)}
      </div>
    );
  }
}

export default App;
