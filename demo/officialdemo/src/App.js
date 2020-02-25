import React, { Component } from 'react'
import InputM from './InputM'
import Clock from './Clock'
import FlavorForm from './FlavorForm'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      todos: []
    }
  }

  inputHandle = (msg) => {
    this.setState({
      todos: [...this.state.todos, msg]
    });
  }

  render() {
    const { todos } = this.state;

    return (
      <div>
        {/* <InputM inputHandle={this.inputHandle}></InputM>
        <ul className="todos">
          {
            todos.map((todo, index) => {
              return <li key = {index}>{todo}</li>
            })
          }
        </ul>

          <Clock/> */}
          <FlavorForm/>
      </div>
    )
  }
}

export default App;